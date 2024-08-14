"use client";
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const InfoBox = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <section className="flex flex-row  gap-1 items-center sm:bg-white sm:px-6 sm:py-2 sm:rounded-full">
      <SearchBox />
      <div className="flex items-center p-2 rounded-full  ">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-primary w-5 h-5"
        />
      </div>

      {isAuth ? (
        <div className="border-primary border-[1px] rounded-full p-[1px] inline-block " onClick={()=>setIsAuth(false)}>
          <Image
            src={logo}
            width={35}
            height={35}
            alt="logo"
            className="rounded-full object-cover"
            
          />
        </div>
      ) : (
        <motion.div
          className="cursor-pointer flex items-center  p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsAuth(true)}
        >
          <FontAwesomeIcon icon={faUser} className="text-primary w-5 h-5" />
        </motion.div>
      )}
    </section>
  );
};

export default InfoBox;
