import React from "react";
import { useTheme } from "../context/ThemeContext";

const GradientBackground = ({ className = "", intensity = "medium" }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sizeMap = {
    light: "w-[700px] h-[700px]",
    medium: "w-[900px] h-[900px]",
    strong: "w-[1100px] h-[1100px]",
  };

  const sizeClass = sizeMap[intensity] || sizeMap.medium;

  // Brighter in dark mode, slightly more subtle in light mode
  const mainOpacity = isDark ? 0.65 : 0.55;
  const secondaryOpacity = isDark ? 0.40 : 0.30;
  const tertiaryOpacity = isDark ? 0.20 : 0.12;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Primary glow – largest & brightest */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${sizeClass} rounded-full animate-throb-glow`}
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(90, 114, 240, ${mainOpacity}) 0%,
              rgba(90, 114, 240, ${mainOpacity * 0.5}) 25%,
              rgba(90, 114, 240, ${mainOpacity * 0.2}) 50%,
              rgba(90, 114, 240, 0.05) 75%,
              transparent 90%
            )
          `,
        }}
      />

      {/* Secondary layer – wider, softer pulse */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${sizeClass} rounded-full animate-throb-glow-delayed`}
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(90, 114, 240, ${secondaryOpacity}) 0%,
              rgba(90, 114, 240, ${secondaryOpacity * 0.4}) 30%,
              rgba(90, 114, 240, ${secondaryOpacity * 0.15}) 60%,
              transparent 85%
            )
          `,
          transform: "translate(-50%, -50%) scale(2.2)",
        }}
      />

      {/* Tertiary layer – very wide, subtle ambient glow */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${sizeClass} rounded-full animate-throb-glow-slow`}
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(90, 114, 240, ${tertiaryOpacity}) 0%,
              rgba(90, 114, 240, ${tertiaryOpacity * 0.3}) 40%,
              transparent 75%
            )
          `,
          transform: "translate(-50%, -50%) scale(3.5)",
        }}
      />
    </div>
  );
};

export default GradientBackground;
