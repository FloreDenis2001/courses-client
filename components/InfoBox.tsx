"use client";

import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const InfoBox = () => {
  const [isAuth, setIsAuth] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        staggerChildren: 0.3,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      className="flex flex-row justify-center  h-full w-1/4 items-center  gap-2 md:gap-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex items-center"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <SearchBox />
      </motion.div>

      <motion.div
        className="flex items-center  rounded-full cursor-pointer"
        variants={itemVariants}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9, rotate: -15 }}
        transition={{ duration: 0.3 }}
      >
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-primary w-5 h-5"
        />
      </motion.div>

      {isAuth ? (
        <motion.div
          className="border-primary border-[1px] w-8 h-8 rounded-full p-[1px] inline-block cursor-pointer"
          onClick={() => setIsAuth(false)}
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={logo}
            width={35}
            height={35}
            alt="logo"
            className="rounded-full object-cover"
          />
        </motion.div>
      ) : (
        <motion.div
          className="cursor-pointer flex items-center md:p-2"
          onClick={() => setIsAuth(true)}
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faUser} className="text-primary w-5 h-5" />
        </motion.div>
      )}
    </motion.section>
  );
};

export default InfoBox;
