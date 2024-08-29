// CourseDetails.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Course } from '@/modules/lessons/data';
import Link from 'next/link';
import { FaArrowLeft, FaBookOpen, FaStar, FaClock, FaInfoCircle } from 'react-icons/fa';
import ButtonFull from './ButtonFull';

interface CourseDetailProps {
  course: Course;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  return (
    <motion.div
      className="relative font-jakarta min-h-[80vh] gap-4 md:gap-8 w-full max-w-screen-lg mx-auto px-4 py-6 md:px-8  mt-8 md:mt-6 bg-white     text-gray-600  rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-6">
        <Link href="/courses" className="hover:text-primary text-gray-600 flex items-center transition-colors">
          <FaArrowLeft className="mr-2" /> Înapoi la Cursuri
        </Link>
      </div>
      
      <div className="bg-white  rounded-lg p-6 mb-8 shadow-md">
        <h1 className="text-4xl font-extrabold text-primary mb-4">{course.name}</h1>
        <p className="text-lg">{course.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white  rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <FaInfoCircle className="text-primary text-3xl mr-3" />
            <h2 className="text-2xl font-semibold text-primary">Despre acest curs</h2>
          </div>
          <p>{course.story}</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <FaStar className="text-primary text-3xl mr-3" />
            <h2 className="text-2xl font-semibold text-primary">Cum te ajută acest curs</h2>
          </div>
          <p>{course.benefits}</p>
        </div>
      </div>

      <div className="bg-white  rounded-lg p-6 mb-8 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <FaBookOpen className="text-primary text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-primary">Instructor</h2>
        </div>
        <p className="font-medium">Nume: {course.instructor.name}</p>
        <p className="mt-2">Bio: {course.instructor.bio}</p>
      </div>

      <div className="bg-white  rounded-lg p-6 mb-8 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <FaBookOpen className="text-primary text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-primary">Ce vei învăța</h2>
        </div>
        <ul className="list-disc list-inside">
          {course.learningObjectives.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white  rounded-lg p-6 mb-8 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <FaClock className="text-primary text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-primary">Durata cursului</h2>
        </div>
        <p className="text-lg">{course.duration} ore</p>
      </div>

      <div className="bg-white  rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <FaInfoCircle className="text-primary text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-primary">Detalii suplimentare</h2>
        </div>
        <p className="text-lg">{course.additionalDetails}</p>
      </div>

      <div className="flex justify-center mt-8">
        <ButtonFull text="Înscrie-te acum" redirectTo={`/courses/shop/${course.code}`} />
      </div>
    </motion.div>
  );
};

export default CourseDetail;
