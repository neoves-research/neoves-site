import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// Quote removed
import Challenge from "./components/Challenge";
import Research from "./components/Research";
import Mission from "./components/Mission";
import Milestones from "./components/Milestones";
import Team from "./components/Team";
import Advisors from "./components/Advisors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const Landing = () => {
  useEffect(() => {
    document.title =
      "Neoves — Engineering better outcomes for neuropathy through stem cell research";
  }, []);

  return (
    <div className="App bg-white text-neoves-black antialiased">
      <Navbar />
      <main data-testid="landing-main">
        <Hero />
        {/* Quote removed */}
        <Challenge />
        <Research />
        <Mission />
        <Milestones />
        <Team />
        <Advisors />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { borderRadius: 12, background: "#0A0A0F", color: "#fff" },
        }}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
