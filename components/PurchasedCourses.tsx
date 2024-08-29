"use client";

import React from "react";
import Image from "next/image";
import { Course } from "@/modules/lessons/data";

interface PurchasedCoursesProps {
  courses: Course[];
}

const PurchasedCourses: React.FC<PurchasedCoursesProps> = ({ courses }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">Cursuri Achiziționate</h2>
      <div className="flex flex-col gap-6">
        {courses.map((course) => (
          <div key={course.code} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src={course.image}
                alt={course.name}
                className="object-cover rounded-lg"
                fill
              />
            </div>
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
              <p className="text-gray-600 mb-2">{course.description}</p>
              <p className="text-lg font-semibold text-primary">{course.price} RON</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchasedCourses;
