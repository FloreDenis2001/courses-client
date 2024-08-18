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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex items-center`}
    >
      <Link
        href={link.url}
        className={`flex flex-row items-center gap-1 transition-transform duration-300 ease-in-out ${
          isActive ? "text-primary font-semibold" : "text-gray-600"
        }`}
      >
        <p className={`relative z-10`}>{link.text}</p>
      </Link>
      <motion.div
        className={`absolute left-0 -bottom-1 w-full h-1 bg-primary rounded-full`}
        initial={{ width: 0 }}
        animate={{ width: isActive ? "100%" : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.li>
  );
};

export default NavLink;
