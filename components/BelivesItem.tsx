import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface BelievesItemProps {
  title: string;
  text: string;
  icon: IconDefinition;
}

const BelievesItem: React.FC<BelievesItemProps> = ({ title, text, icon }) => {
  return (
    <motion.div
      className="bg-secondary rounded-xl text-center shadow-md cursor-pointer flex flex-col items-center justify-center relative group p-6 max-w-xs mx-auto"
      initial={{ scale: 0.9, opacity: 0.6 }}
      animate={{ scale: 0.9, opacity: 1 }}
      whileHover={{ scale: 0.95, backgroundColor: "#DE968D" }}
      whileTap={{ scale: 0.95, backgroundColor: "#DE968D" }}
      style={{ width: "100%", aspectRatio: "1 / 1" }} 
    >
      <div className="bg-primary p-4 rounded-xl mb-4 w-24 h-24 flex items-center justify-center group-hover:bg-white group-hover:rounded-full transition-colors duration-300">
        <FontAwesomeIcon
          icon={icon}
          className="text-white text-4xl group-hover:text-primary transition-colors duration-300"
        />
      </div>

      <h3 className="text-xl font-bold mb-4 text-gray-600 group-hover:text-white transition-colors duration-300">{title}</h3>

      <p className="text-center text-gray-600 group-hover:text-white transition-colors duration-300">{text}</p>
    </motion.div>
  );
};

export default BelievesItem;
