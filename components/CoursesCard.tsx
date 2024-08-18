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
      className="bg-secondary p-6 rounded-lg shadow-lg text-center transform transition duration-500 max-w-[300px] flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Image
          src={trainer}
          alt={course.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
        <p className="text-xl text-primary mb-4">{course.pret} RON</p>
      </div>
      <div className="flex justify-center space-x-4">
        <ButtonFull text="Cumpara" />
        <ButtonBorder text="Detalii" />
      </div>
    </motion.div>
  );
};

export default CourseCard;
