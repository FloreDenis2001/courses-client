"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  redirectTo?: string;
  onClick?: () => void;
}

const ButtonBorder: React.FC<ButtonProps> = ({ text, redirectTo, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (redirectTo) {
      router.push(redirectTo);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.98,
        borderColor: "#000",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="px-3 py-2 mt-2 border-2 bg-secondary border-primary text-primary rounded-full w-full sm:w-32 md:w-36 flex items-center justify-center text-sm sm:text-base"
    >
      <span>{text}</span>
    </motion.button>
  );
};

export default ButtonBorder;
