"use client";
import React from "react";
import CoursesStatsBox from "./CoursesStatsBox";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CoursesStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,

    threshold: 0.3,
  });

  const data = [
    { value: 2, text: "Cursuri" },
    { value: 30, text: "Lectii" },
    { value: 45, text: "Ore de video" },
    { value: 5, text: "Materiale" },
    { value: 500, text: "Studenti" },
  ];

  return (
    <section
      className="flex items-center justify-center md:py-12 m-4"
      ref={ref}
    >
      <motion.div
        className="font-jakarta bg-zinc-900 p-10 md:p-16 lg:p-24 max-w-screen-lg w-full relative z-10 shadow-lg rounded-xl overflow-hidden mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-extrabold mb-6 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
        >
          Cifrele care vorbesc despre succesul nostru
        </motion.h2>

        <div className="flex flex-col gap-4 items-center md:flex-row flex-wrap justify-center">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CoursesStatsBox value={item.value} text={item.text} />
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-56 h-56 bg-gray-600 opacity-40 rounded-full"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              rotate: [0, 360],
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-56 h-56 bg-primary opacity-40 rounded-full"
            animate={{
              x: [0, -50, 50, 0],
              y: [0, 50, -50, 0],
              rotate: [0, -360],
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-56 h-56 bg-primary opacity-40 rounded-full"
            animate={{
              x: [0, -50, 50, 0],
              y: [0, 50, -50, 0],
              rotate: [0, 360],
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-56 h-56 bg-gray-300 opacity-40 rounded-full"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              rotate: [0, -360],
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CoursesStats;
