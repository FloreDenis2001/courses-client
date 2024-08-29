"use client";
import React from 'react';
import { Course } from '@/modules/lessons/data'; 
import { motion } from 'framer-motion';

interface CourseDetailsProps {
  course: Course;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  return (
    <section className="my-8 p-4 md:p-8 bg-secondary rounded-xl">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {course.name}
      </motion.h1>
      <p className="text-lg text-gray-700">{course.description}</p>
    </section>
  );
};

export default CourseDetails;
