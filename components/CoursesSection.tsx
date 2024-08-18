"use client";
import React from "react";
import trainer from "@/assets/trainer.jpg";
import CourseCard from "./CoursesCard";
import { motion } from "framer-motion";

const CoursesSection = () => {
  const courses = [
    {
      title: "Curs Extensii Gene",
      pret: 700,
    },
    {
      title: "Curs Extensii Gene (Întâlnește Artistul)",
      pret: 2100,
    },
  ];

  return (
    <motion.section
      className="flex items-center justify-center md:py-12 m-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-start font-jakarta bg-secondary p-10 max-w-screen-lg w-full relative z-10 rounded-xl overflow-hidden mx-auto">
        <motion.h2
          className="text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Cursurile noastre
        </motion.h2>
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Am pregătit pentru tine două pachete educaționale marca Ana Buda Beauty
          Artist
        </motion.p>
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Cursul online îți oferă acces la comunitatea noastră exclusivă și te
          învață tot ce trebuie să știi despre beauty prin intermediul
          materialelor text și video de înaltă calitate.
        </motion.p>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Programul „Întâlnește Artistul” îți permite să înveți direct de la
          echipa noastră de experți, prin sesiuni 1-1 (Live la studio sau pe
          Zoom).
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} trainer={trainer} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CoursesSection;
