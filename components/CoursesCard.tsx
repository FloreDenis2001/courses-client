"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import ButtonFull from "./ButtonFull";
import ButtonBorder from "./ButtonBorder";

interface CourseCardProps {
  course: {
    title: string;
    pret: number;
  };
  trainer: StaticImageData;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, trainer }) => {
  return (
    <motion.div
      className="relative bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-between h-[400px] max-w-[300px] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative mb-4">
        <Image
          src={trainer}
          alt={course.title}
          className="w-full h-48 object-cover rounded-lg"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative mb-4">
        <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
        <p className="text-xl text-primary">{course.pret} RON</p>
      </div>
      <div className="relative flex justify-center space-x-4">
        <ButtonFull text="Cumpara" />
        <ButtonBorder text="Detalii" />
      </div>
    </motion.div>
  );
};

export default CourseCard;
