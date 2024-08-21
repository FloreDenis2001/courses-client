"use client";
import React from "react";
import { motion } from "framer-motion";
import background from "@/assets/backgroundCourses.png";
import { useInView } from "react-intersection-observer";
import freeImage from "@/assets/free.jpg";
import meetImage from "@/assets/meet.jpg";
import CoursesCard from "@/components/CoursesCard";
import CardCoursesSection from "@/components/CardCoursesSection";
const CoursesPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const courses = [
    {
      title: "Curs Extensii Gene",
      pret: 700,
      image: freeImage,
    },
    {
      title: "Curs Extensii Gene (Întâlnește Artistul)",
      pret: 2100,
      image: meetImage,
    },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.3,
      },
    }),
  };
  return (
    <section
      ref={ref}
      className="flex items-center justify-center md:py-4 mt-20 mx-4"
    >
      <motion.div
        className="mt-8 md:mt-6 relative font-jakarta  min-h-[80vh] flex flex-col gap-4 md:gap-8 w-full max-w-screen-lg mx-auto px-4 md:px-6 bg-secondary rounded-xl p-8 shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
          <motion.div
            className="absolute inset-0 z-0 rounded-xl"
            initial={{ filter: "blur(40px)", scale: 1.1 }}
            animate={{
              filter: inView ? "blur(0px)" : "blur(10px)",
              scale: inView ? 1 : 1.1,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              backgroundImage: `url(${background.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div>
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
            className="text-lg mb-4 text-gray-600 max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
          >
            Cursul online îți oferă acces la comunitatea noastră exclusivă și te
            învață tot ce trebuie să știi despre beauty prin intermediul
            materialelor text și video de înaltă calitate.
          </motion.p>

          </div>
      
        
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
                className="transform transition-transform duration-500 hover:scale-105 hover:rotate-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                <CardCoursesSection course={course} />
              </motion.div>
            ))}
          </motion.div>
      </motion.div>
    </section>
  );
};

export default CoursesPage;
