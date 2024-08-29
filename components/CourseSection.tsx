"use client";

import React from "react";
import CourseDetails from "@/components/CourseDetails";
import LessonList from "@/components/LessonList";
import { StaticImageData } from "next/image";

interface Lesson {
  title: string;
  videoUrl: string;
  description: string;
  supportFile?: string;
}

export interface Course {
  code: string;
  name: string;
  description: string;
  story: string;
  benefits: string;
  duration: number;
  price: number;
  image: StaticImageData;
  additionalDetails: string;
  learningObjectives: string[];
  instructor: {
    name: string;
    bio: string;
  };
  lessons: Lesson[];
}

const CourseSection: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="mt-8 md:mt-6 relative font-jakarta min-h-[80vh] gap-4 md:gap-8 w-full max-w-screen-lg mx-auto px-4 py-2 md:px-6  rounded-xl ">
      <CourseDetails course={course} />
      <LessonList lessons={course.lessons} />
    </div>
  );
};

export default CourseSection;
