"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBook,
  faGraduationCap,
  faHouse,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import LogoBox from "./LogoBox";
import BurgerLink from "./BurgerLink";
import ButtonFull from "./ButtonFull";
import Image from "next/image";
import logo from "@/assets/logo.png";
import ButtonClose from "./ButtonClose";

interface BurgerBarProps {
  isOpen: boolean;
  onClose: () => void;
  isAuth: boolean;
}

const links = [
  { icon: faHouse, text: "Acasa", url: "/" },
  { icon: faBook, text: "Instructor", url: "/instructor" },
  { icon: faGraduationCap, text: "Cursuri", url: "/courses" },
  { icon: faAddressBook, text: "Contact", url: "/contact" },
];

const BurgerBar: React.FC<BurgerBarProps> = ({ isOpen, onClose, isAuth }) => (
  <motion.section
    className="fixed top-0 left-0 w-full h-dvh bg-white z-50 flex flex-col p-4"
    initial={{ opacity: 0, x: "-100%" }}
    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "-100%" }}
    exit={{ opacity: 0, x: "-100%" }}
    transition={{ type: "spring", stiffness: 200, damping: 30 }}
  >
    <header className="flex justify-between items-center mb-4">
      <Image src={logo} width={80} height={80} alt="logo" />
      <ButtonClose onClose={onClose} />
    </header>

    {isAuth ? (
      <div className="flex flex-col items-center gap-4 border-b-2 border-gray-200 py-4 mb-4">
        <div className="w-24 h-24 rounded-full bg-gray-400 overflow-hidden grid place-content-center">
          <Image src={logo} width={80} height={80} alt="logo" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-black font-semibold">Flore Denis</p>
          <p className="text-gray-400">floredenis907@yahoo.com</p>
        </div>
      </div>
    ) : null}

    <motion.ul className="flex flex-col gap-4 mb-4">
      {links.map((link, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
        >
          <BurgerLink icon={link.icon} url={link.url}>
            {link.text}
          </BurgerLink>
        </motion.li>
      ))}
    </motion.ul>

    <section className="flex flex-col items-center gap-4 mt-6">
      <ButtonFull text={isAuth ? "Log out" : "Sign up"} />
      <p className="text-gray-400 text-sm mt-4">
        © 2021 Global Development Future
      </p>
    </section>
  </motion.section>
);

export default BurgerBar;
