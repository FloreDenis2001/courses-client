"use client";
import React from "react";
import { motion } from "framer-motion";
import background from "@/assets/background.jpg";
import { useInView } from "react-intersection-observer";

interface User {
  enrolledCourses: string[];
}

const ProfilePublic: React.FC<{ user: User }> = ({ user }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ backgroundImage: `url(${background.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
    >
      <div className="p-6 bg-white bg-opacity-75 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Enrolled Courses</h2>
        <ul className="list-disc list-inside space-y-2">
          {user.enrolledCourses.map((course, index) => (
            <li key={index} className="text-lg text-gray-800">{course}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProfilePublic;
