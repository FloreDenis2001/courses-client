"use client";

import React, { useState, useEffect, useContext } from "react";
import SearchBox from "./SearchBox";
import Image from "next/image";
import profilePic from "@/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LoginContext } from "@/modules/context/LoginProvider";
import LoginContextType from "@/modules/context/LoginContextType";
import SideShoppingCart from "./SideShoppingCart";
import freeImage from "@/assets/free.jpg";
import meetImage from "@/assets/meet.jpg";
import { determinePath } from "@/modules/utils/utils";

const InfoBox = () => {
  const { user, logOut } = useContext(LoginContext) as LoginContextType;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const courses = [
    {
      title: "Curs Extensii Gene",
      pret: 700,
      image: freeImage,
    },
    {
      title: "Curs Extensii Gene (Întâlnește Artistul)",
      pret: 2100,
      image: meetImage,
    },
    {
      title: "Curs Extensii Gene",
      pret: 700,
      image: freeImage,
    },
    {
      title: "Curs Extensii Gene (Întâlnește Artistul)",
      pret: 2100,
      image: meetImage,
    },
    {
      title: "Curs Extensii Gene",
      pret: 700,
      image: freeImage,
    },
  ];

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

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      const timer = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isDropdownOpen]);

  const handleLogOut = () => {
    logOut();
  };

  const cartItemCount = courses.length;

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
        className="relative flex items-center rounded-full cursor-pointer"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={toggleCart}
      >
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-primary w-5 h-5"
        />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-secondary text-primary text-[8px] border border-primary font-extrabold rounded-full w-4 h-4 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </motion.div>

      <motion.div
        className="relative"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={toggleDropdown}
      >
        {user.token ? (
          <div className="border-primary border-[1px] w-8 h-8 rounded-full p-[1px] cursor-pointer overflow-hidden flex items-center justify-center">
            {user.profileUrl?.length > 0 ? (
              <Image
                src={user.profileUrl}
                width={35}
                height={35}
                alt="Profile Picture"
                className="contain w-full h-full rounded-full"
              />
            ) : (
              <Image
                src={profilePic}
                width={35}
                height={35}
                alt="Profile Picture"
                className="contain w-full h-full rounded-full"
              />
            )}
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
              {user.token ? (
                <div className="flex flex-col">
                  {user.userRole === "ADMIN" && (
                    <Link
                      href={determinePath("dashboard")}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Dashboard
                    </Link>
                  )}
                  <Link
                    href={determinePath("profile")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Contul Meu
                  </Link>
                  <Link
                    href={determinePath("courses")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Cursurile Mele
                  </Link>
                  <p
                    onClick={() => handleLogOut()}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              ) : (
                <div className="flex flex-col">
                  <Link
                    href={determinePath("login")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Autentificare
                  </Link>
                  <Link
                    href={determinePath("register")}
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
      <SideShoppingCart
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
        courses={courses}
      />
    </motion.section>
  );
};

export default InfoBox;
