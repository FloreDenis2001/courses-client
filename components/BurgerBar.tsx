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
    className="w-full h-screen fixed top-0 left-0 z-50 bg-white flex flex-col gap-1 justify-between"
    initial={{ x: "-100%" }}
    animate={{ x: isOpen ? "0%" : "-100%" }}
    exit={{ x: "-100%" }}
    transition={{ type: "spring", stiffness: 120, damping: 20 }}
  >
    <motion.div
      onClick={onClose}
      className="p-2 cursor-pointer absolute right-4 top-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <FontAwesomeIcon
        icon={faX}
        className="text-primary border-2 border-primary p-1 w-4 h-4 rounded-full bg-white shadow-lg"
      />
    </motion.div>

    <section className="flex flex-col w-full p-4">
      <LogoBox />
      {isAuth && ( 
        <div className="flex items-center gap-2 border-b-2 border-saint-200">
          <LogoBox />
          <div className="flex flex-col">
            <p className="text-gray-800">Flore Denis</p>
            <p className="text-gray-400">floredenis907@yahoo.com</p>
          </div>
        </div>
      )}
      <motion.ul className="flex flex-col gap-2 mt-4">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <BurgerLink icon={link.icon} url={link.url}>
              {link.text}
            </BurgerLink>
          </motion.li>
        ))}
      </motion.ul>
    </section>

    <section className="flex flex-col items-center p-2 gap-4">
      <ButtonFull text={isAuth ? "Log out" : "Sign in"} /> 
      <p className="text-gray-800">© 2021 Global Development Future</p>
    </section>
  </motion.section>
);

export default BurgerBar;
