// CardCoursesSection.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Course } from "@/modules/lessons/data";
import ButtonFull from "./ButtonFull";
import ButtonBorder from "./ButtonBorder";
import { useRouter } from "next/navigation";
import { determinePath } from "@/modules/utils/utils";
interface CourseCardProps {
  course: Course;
}

const CardCoursesSection: React.FC<CourseCardProps> = ({ course }) => {
  const router = useRouter();

  const handleDoubleClick = () => {
    let path = determinePath(`courses/shop/${course.code}`);
    router.push(path);
  };
  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col max-w-[320px] h-[450px]"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.3 }}
      onDoubleClick={handleDoubleClick}
    >
      <div className="relative flex-shrink-0 h-48">
        <Image
          src={course.image}
          alt={course.name}
          className="object-cover w-full h-full"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
      </div>
      <div className="flex-1 p-6 text-center flex flex-col justify-between">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{course.name}</h3>
        <p className="text-2xl text-primary mb-4 font-semibold">{+course.price} RON</p>
        <div className="flex justify-center gap-2">
          <ButtonFull text="Cumpără" redirectTo={determinePath(`/courses/shop/${course.code}`)} />
          <ButtonBorder
            text="Detalii"
            redirectTo={determinePath(`/courses/details/${course.code}`)}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CardCoursesSection;
