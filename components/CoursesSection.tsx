"use client";
import React from "react";
import trainer from "@/assets/trainer.jpg";
import CourseCard from "./CoursesCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CoursesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
      className="relative flex items-center justify-center md:py-12 m-4"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="text-start font-jakarta bg-secondary p-10 max-w-screen-lg w-full relative z-10 rounded-xl overflow-hidden mx-auto"
        style={{ perspective: "1000px" }}
      >
        <motion.h2
          className="text-4xl font-extrabold mb-6 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
        >
          Cursurile noastre
        </motion.h2>
        <motion.p
          className="text-lg mb-4 text-gray-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
        >
          Am pregătit pentru tine două pachete educaționale marca Ana Buda
          Beauty Artist
        </motion.p>
        <motion.p
          className="text-lg mb-4 text-gray-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
        >
          Cursul online îți oferă acces la comunitatea noastră exclusivă și te
          învață tot ce trebuie să știi despre beauty prin intermediul
          materialelor text și video de înaltă calitate.
        </motion.p>
        <motion.p
          className="text-lg mb-4 text-gray-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
        >
          Programul „Întâlnește Artistul” îți permite să înveți direct de la
          echipa noastră de experți, prin sesiuni 1-1 (Live la studio sau pe
          Zoom).
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="transform transition-transform duration-500 hover:scale-105 hover:rotate-3d "
              style={{ transformStyle: "preserve-3d" }}
            >
              <CourseCard course={course} trainer={trainer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CoursesSection;
