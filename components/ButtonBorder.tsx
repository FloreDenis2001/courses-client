"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
}

const ButtonBorder: React.FC<ButtonProps> = ({ text }) => {
  return (
    <motion.button
      initial={{ scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
      whileHover={{
        scale: 1.05, 
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", 
      }}
      whileTap={{
        scale: 0.98, 
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)", 
      }}
      transition={{
        type: "spring", 
        stiffness: 300, 
      }}
      className="px-4 py-2 bg-white border-2 border-primary text-primary rounded-3xl w-full sm:w-40 md:w-48 lg:w-56 xl:w-64 flex justify-center relative overflow-hidden cursor-pointer"
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 bg-white rounded-full z-0"
        initial={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.4, opacity: 0 }} 
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );
};

export default ButtonBorder;
