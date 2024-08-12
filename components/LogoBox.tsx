import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
const LogoBox = () => {
  return (
    <div className="grid place-content-center">
      <Image src={logo} width={80} height={80} alt="logo" />
    </div>
  );
};

export default LogoBox;
