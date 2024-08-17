"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavLinkProps {
  link: {
    text: string;
    url: string;
  };
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathname = usePathname();
  const isActive = pathname === link.url; 
  return (
    <motion.li
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, x: 5 }}
      whileTap={{ scale: 0.95 }}
      className={`transition-colors duration-300 ${
        isActive ? "text-primary" : "text-gray-600"
      }`}
    >
      <Link
        href={link.url}
        className={`flex flex-row items-center gap-1 ${
          isActive ? "font-bold" : "font-normal"
        }`}
      >
        <p>{link.text}</p>
      </Link>
    </motion.li>
  );
};

export default NavLink;
