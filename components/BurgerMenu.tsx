"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import BurgerBar from "./BurgerBar";
import { AnimatePresence, motion } from "framer-motion";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleBurgerBar() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="flex sm:hidden  p-2 rounded-md cursor-pointer">
      <motion.div
        className="cursor-pointer"
        onClick={handleToggleBurgerBar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon
          icon={faBars}
          className="bg-primary p-2 rounded-full text-white w-4 h-4 transition-colors duration-300"
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <BurgerBar isOpen={isOpen} onClose={handleToggleBurgerBar} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default BurgerMenu;
