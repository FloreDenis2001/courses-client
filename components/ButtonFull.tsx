"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
}

const ButtonFull: React.FC<ButtonProps> = ({ text }) => {
  return (
    <motion.button
      initial={{ scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
      whileHover={{
        scale: 1.05, 
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", 
      }}
      whileTap={{
        scale: 0.98, 
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", 
      }}
      transition={{
        type: "spring", 
        stiffness: 300, 
      }}
      className="px-3 py-2 bg-primary text-white rounded-full w-full sm:w-32 md:w-36 flex items-center justify-center text-sm sm:text-base"
    >
      <span>{text}</span>
    </motion.button>
  );
};

export default ButtonFull;
