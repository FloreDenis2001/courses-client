"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProfileCloseAccount: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="p-6 bg-white rounded-xl shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold mb-4">Încetare Cont</h2>
      <p className="text-gray-800">Instructions for account closure will be displayed here.</p>
    </motion.div>
  );
};

export default ProfileCloseAccount;