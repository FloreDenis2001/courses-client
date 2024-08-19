import React from "react";
import { motion } from "framer-motion";
import AnimatedValue from "./AnimatedValue";

interface CoursesStatsBoxProps {
  value: number;
  text: string;
  decoration: 'circle' | 'square' | 'star';
}

const decorationStyles = {
  circle: "bg-primary w-4 h-4 rounded-full",
  square: "bg-primary w-4 h-4",
  star: "bg-primary w-4 h-4 rounded-full" 
};

const CoursesStatsBox: React.FC<CoursesStatsBoxProps> = ({ value, text, decoration }) => {
  return (
    <motion.div
      className="bg-secondary rounded-xl text-center shadow-md  hover:text-white transition-transform duration-300 cursor-pointer flex flex-col items-center justify-center w-36 h-36 md:w-48 md:h-48 relative group"
      initial={{ scale: 0.9, opacity: 0.6 }}
      animate={{ scale: 0.9, opacity: 1 }}
      whileHover={{ scale: 0.95, backgroundColor: "#DE968D" }}
      whileTap={{ scale: 0.95, backgroundColor: "#DE968D" }}
    >
      <AnimatedValue value={value} />
      <p className="text-lg">{text}</p>

      <motion.div
        className={`absolute top-2 right-2 ${decorationStyles[decoration]} group-hover:bg-white`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

export default CoursesStatsBox;
