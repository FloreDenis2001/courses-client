import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

interface SubjectItemProps {
  text: string;
  index: number;
}

const SubjectItem: React.FC<SubjectItemProps> = ({ text, index }) => {
  return (
    <motion.div
      className="flex items-center mb-6 p-4 bg-white rounded-lg shadow-lg"
      initial={{scale:0.9, opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay: index * 0.2,
      }}
      whileHover={{
        scale: 1,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <FontAwesomeIcon icon={faBullseye} className="text-primary mr-4 text-2xl" />
      </motion.div>
      <motion.span
        className="text-lg font-medium"
        whileHover={{
          textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transform: "translateZ(10px)",
          transition: { duration: 0.3 },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default SubjectItem;
