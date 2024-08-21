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
const CardCoursesSection: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <motion.div
    className="relative bg-white rounded-lg shadow-lg justify-between overflow-hidden flex flex-col max-w-[320px] h-[450px]"
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative flex-shrink-0 h-48">
      <Image
        src={course.image}
        alt={course.title}
        className="object-cover w-full h-full"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
    </div>
    <div className="flex-1 p-6 text-center flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{course.title}</h3>
        <p className="text-xl text-primary mb-4">{course.pret} RON</p>
      </div>
      <div className="flex justify-center gap-2">
        <ButtonFull text="Cumpara" />
        <ButtonBorder text="Detalii" />
      </div>
    </div>
  </motion.div>
  );
};

export default CardCoursesSection;
