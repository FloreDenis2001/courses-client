import React from "react";
import BurgerMenu from "./BurgerMenu";
import LogoBox from "./LogoBox";
import NavBar from "./NavBar";
import InfoBox from "./InfoBox";

const Header = () => {
  return (
    <header className="flex flex-row p-1 items-center justify-around bg-white rounded-xl m-2">
      <BurgerMenu />
      <LogoBox />
      <NavBar />
      <InfoBox />
    </header>
  );
};

export default Header;
