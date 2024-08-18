"use client";
import React from "react";
import { motion } from "framer-motion";

interface CoursesStatsBoxProps {
  value: number;
  text: string;
}

const CoursesStatsBox: React.FC<CoursesStatsBoxProps> = ({ value, text }) => {
  return (
    <motion.div
      className="bg-zinc-800 rounded-xl p-6 text-center shadow-lg transition-transform duration-300"
      initial={{ scale: 0.9, opacity: 0.6 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, backgroundColor: "#DE968D" }}
      whileTap={{ scale: 0.95 , backgroundColor: "#DE968D"}} 
    >
      <span className="block text-3xl font-bold text-white mb-2">{value}</span>
      <p className="text-lg text-gray-300">{text}</p>
    </motion.div>
  );
};

export default CoursesStatsBox;
