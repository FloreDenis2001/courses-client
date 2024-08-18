"use client";
import React, { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
import LogoBox from "./LogoBox";
import NavBar from "./NavBar";
import InfoBox from "./InfoBox";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-4 mt-2">
      <div
        className={`flex flex-row items-center rounded-xl h-20 w-full max-w-screen-lg mx-auto px-4 py-2 transition-all duration-300 ${
          scrolled ? "bg-secondary border-2 border-b-primary shadow-md" : "bg-secondary"
        }`}
      >
        <BurgerMenu />
        <LogoBox />
        <NavBar />
        <InfoBox />
      </div>
    </header>
  );
};

export default Header;
