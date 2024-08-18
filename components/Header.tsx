import React from "react";
import BurgerMenu from "./BurgerMenu";
import LogoBox from "./LogoBox";
import NavBar from "./NavBar";
import InfoBox from "./InfoBox";

const Header = () => {
  return (
    <header className="flex items-center justify-center py-4 px-4 m-2 ">
      <div className="flex flex-row items-center rounded-xl h-20 w-full max-w-screen-lg   mx-auto bg-secondary">
        <BurgerMenu />
        <LogoBox />
        <NavBar />
        <InfoBox />
      </div>
    </header>
  );
};

export default Header;
