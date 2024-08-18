import React from "react";
import BurgerMenu from "./BurgerMenu";
import LogoBox from "./LogoBox";
import NavBar from "./NavBar";
import InfoBox from "./InfoBox";

const Header = () => {
  return (
    <header className="flex items-center justify-center  ">
      <div className=" flex flex-row  items-center  rounded-xl  h-[90px] w-full max-w-[1200px]">
        <BurgerMenu />
        <LogoBox />
        
        <NavBar />
        <InfoBox />
      </div>
    </header>
  );
};

export default Header;
