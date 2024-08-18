import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

interface BurgerLinkProps {
  icon: any;
  url: string;
  children: React.ReactNode;
}

const BurgerLink: React.FC<BurgerLinkProps> = ({ icon, children, url }) => (
  <motion.div
    className="flex gap-2 p-2"
    whileHover={{ scale: 1.05  }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
  >
    <Link
      href={url}
      className="flex items-center gap-2 p-4 mx-2 w-full rounded-xl text-gray-400 hover:bg-primary hover:text-white transition-colors duration-300"
    >
      <FontAwesomeIcon icon={icon} />
      <p>{children}</p>
    </Link>
  </motion.div>
);

export default BurgerLink;
