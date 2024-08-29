"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Course } from "@/modules/lessons/data";
import { motion } from "framer-motion";
import ButtonFull from "./ButtonFull";

interface CoursePurchaseSectionProps {
  course: Course;
}

const CoursePurchaseSection: React.FC<CoursePurchaseSectionProps> = ({
  course,
}) => {
  const [activeTab, setActiveTab] = useState<
    "details" | "objectives" | "instructor"
  >("details");

  const handlePurchase = () => {
    alert(`Curs achiziționat: ${course.name}`);
  };

  return (
    <motion.div
      className="mt-8 md:mt-6 relative font-jakarta min-h-[80vh] gap-4 md:gap-8 w-full max-w-screen-lg mx-auto px-4 py-2 md:px-6 rounded-xl bg-white shadow-md flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center w-full">
        <motion.div
          className="md:w-1/2 md:pr-8 mb-8 md:mb-0 flex justify-center"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-48 h-48 md:w-80 md:h-80 flex items-center">
            <Image
              src={course.image.src}
              alt={course.name}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 200px, 400px"
            />
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            {course.name}
          </h1>
          <p className="text-base md:text-lg mb-4 text-gray-700">
            {course.description}
          </p>
          <div className="mt-6">
            <div className="flex flex-wrap md:flex-nowrap space-x-4 mb-6 border-b border-gray-300">
              <button
                className={`py-2 px-4 text-sm md:text-base font-semibold ${
                  activeTab === "details"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("details")}
              >
                Detalii 
              </button>
              <button
                className={`py-2 px-4 text-sm md:text-base font-semibold ${
                  activeTab === "objectives"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("objectives")}
              >
                Obiective
              </button>
              <button
                className={`py-2 px-4 text-sm md:text-base font-semibold ${
                  activeTab === "instructor"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("instructor")}
              >
                Instructor
              </button>
            </div>

            <motion.div
              className="transition-opacity duration-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === "details" ? 1 : 0 }}
              exit={{ opacity: 0 }}
            >
              {activeTab === "details" && (
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                    Detalii suplimentare
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    {course.additionalDetails}
                  </p>
                </div>
              )}
            </motion.div>

            <motion.div
              className="transition-opacity duration-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === "objectives" ? 1 : 0 }}
              exit={{ opacity: 0 }}
            >
              {activeTab === "objectives" && (
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                    Obiective de învățare
                  </h2>
                  <ul className="list-disc list-inside text-sm md:text-base text-gray-600">
                    {course.learningObjectives.map((objective, index) => (
                      <li key={index} className="mb-1">
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            <motion.div
              className="transition-opacity duration-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === "instructor" ? 1 : 0 }}
              exit={{ opacity: 0 }}
            >
              {activeTab === "instructor" && (
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                    Instructor
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong>{course.instructor.name}</strong> -{" "}
                    {course.instructor.bio}
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          <p className="text-lg md:text-xl font-bold my-4 text-primary">
            Preț: {course.price} RON
          </p>

          <ButtonFull onClick={handlePurchase} text="Cumpără" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoursePurchaseSection;
