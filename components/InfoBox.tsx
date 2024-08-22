"use client";

import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import Image from "next/image";
import profilePic from "@/assets/trainer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const InfoBox = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAuth = () => {
    setIsAuth(!isAuth);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      const timer = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isDropdownOpen]);

  return (
    <motion.section
      className="flex flex-row justify-center h-full w-1/4 items-center gap-2 md:gap-4"
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
        className="flex items-center rounded-full cursor-pointer"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-primary w-5 h-5"
        />
      </motion.div>

      <motion.div
        className="relative"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={toggleDropdown}
      >
        {isAuth ? (
          <div className="border-primary border-[1px] w-8 h-8 rounded-full p-[1px] inline-block cursor-pointer overflow-hidden flex items-center justify-center">
            <Image
              src={profilePic}
              width={35}
              height={35}
              alt="Profile Picture"
              className="contain w-full h-full rounded-full"

            />
          </div>
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            className="text-primary w-5 h-5 cursor-pointer"
          />
        )}

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute right-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-lg p-2"
            >
              {isAuth ? (
                <>
                  <p className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Contul Meu
                  </p>
                  <p className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Cursurile Mele
                  </p>
                  <p
                    onClick={handleAuth}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </p>
                </>
              ) : (
                <div className="flex flex-col">
                  <Link
                    href="/login"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Autentificare
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Înregistrare
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default InfoBox;
