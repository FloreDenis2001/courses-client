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
    image: StaticImageData;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <motion.div
      className="relative bg-white p-4 rounded-lg shadow-md text-center flex flex-col justify-between h-[350px] max-w-[220px]  mx-auto"
      initial={{ scale: 0.95, opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative mb-4">
        <Image
          src={course.image}
          alt={course.title}
          className="w-full h-36 object-cover rounded-lg"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative mb-4">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-lg text-primary">{course.pret} RON</p>
      </div>
      <div className="relative flex justify-center items-center gap-2">
        <ButtonFull text="Cumpara" />
        <ButtonBorder text="Detalii" />
      </div>
    </motion.div>
  );
};

export default CourseCard;
