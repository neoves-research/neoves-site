const { XMLParser } = require("fast-xml-parser");

// Source of truth: the NeoVes Substack. Every post published here is picked
// up automatically the next time this endpoint's cache expires.
const FEED_URL = "https://neoves.substack.com/feed";

// How long Vercel's edge is allowed to serve a cached response before
// re-fetching the feed. Keep this modest so a new post shows up promptly
// without hammering Substack on every page load.
const CACHE_SECONDS = 30 * 60; // 30 minutes
const STALE_WHILE_REVALIDATE_SECONDS = CACHE_SECONDS * 4;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  cdataPropName: "__cdata",
});

function textOf(node) {
  if (node == null) return "";
  if (typeof node === "string") return node;
  if (typeof node === "object" && "__cdata" in node) return node.__cdata ?? "";
  return String(node);
}

function stripHtml(html) {
  return textOf(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function firstImageFrom(html) {
  const match = textOf(html).match(/<img[^>]+src="([^"]+)"/i);
  return match ? match[1] : null;
}

function formatDate(pubDate) {
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return textOf(pubDate);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function toArray(value) {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

module.exports = async (req, res) => {
  try {
    const feedRes = await fetch(FEED_URL, {
      headers: {
        // A descriptive UA is polite and avoids being treated as a bot probe.
        "User-Agent": "NeoVesSiteBot/1.0 (+https://neoves.in)",
      },
    });

    if (!feedRes.ok) {
      throw new Error(`Feed responded with HTTP ${feedRes.status}`);
    }

    const xml = await feedRes.text();
    const parsed = parser.parse(xml);
    const rawItems = parsed?.rss?.channel?.item;
    const items = toArray(rawItems);

    // Sort oldest -> newest so we can assign stable, incrementing issue
    // numbers, then reverse for newest-first display.
    const sorted = [...items].sort(
      (a, b) => new Date(a.pubDate) - new Date(b.pubDate)
    );

    const posts = sorted.map((item, i) => {
      const contentEncoded = item["content:encoded"];
      const thumbnail =
        item.enclosure?.["@_url"] || firstImageFrom(contentEncoded) || null;

      return {
        issue: `Issue ${String(i + 1).padStart(2, "0")}`,
        date: formatDate(item.pubDate),
        title: textOf(item.title) || "Untitled",
        dek: stripHtml(item.description),
        href: textOf(item.link),
        thumbnail,
        topics: toArray(item.category).map(textOf).filter(Boolean),
      };
    });

    posts.reverse(); // newest first

    res.setHeader(
      "Cache-Control",
      `s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${STALE_WHILE_REVALIDATE_SECONDS}`
    );
    res.status(200).json({ posts });
  } catch (err) {
    res.status(502).json({ error: "Could not load Substack feed", detail: String(err) });
  }
};
