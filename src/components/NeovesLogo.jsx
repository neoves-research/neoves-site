import React from "react";

export const NeovesLogo = ({ className = "h-8 w-auto", variant = "dark" }) => {
  const src = variant === "dark" ? "/assets/logo.png" : "/assets/logo-white.png";
  return <img src={src} alt="Neoves" className={className} />;
};

export default NeovesLogo;
