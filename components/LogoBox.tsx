"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const LogoBox = () => {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 }, 
    visible: { opacity: 1, scale: 1 },  
  };

  return (
    <motion.div
      className="grid place-content-center h-full w-1/2 md:w-1/4"
      initial="hidden"
      animate="visible"
      variants={logoVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}  
    >
      <Image src={logo} width={80} height={80} alt="logo" />
    </motion.div>
  );
};

export default LogoBox;
