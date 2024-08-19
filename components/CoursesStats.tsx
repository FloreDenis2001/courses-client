"use client";
import React from "react";
import CoursesStatsBox from "./CoursesStatsBox";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface DataItem {
  value: number;
  text: string;
  decoration: 'circle' | 'square' | 'star'; 
}

const CoursesStats: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const data: DataItem[] = [
    { value: 2, text: "Cursuri", decoration: 'circle' },
    { value: 30, text: "Lectii", decoration: 'square' },
    { value: 45, text: "Ore de video", decoration: 'star' },
    { value: 5, text: "Materiale", decoration: 'circle' },
    { value: 500, text: "Studenti", decoration: 'square' },
  ];

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.3, 
      }
    })
  };

  return (
    <section className="flex items-center justify-center mx-4 mt-2" ref={ref}>
      <motion.div
        className="font-jakarta max-w-screen-lg w-full relative z-10 overflow-hidden mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={boxVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index} 
              className="flex-shrink-0"
            >
              <CoursesStatsBox 
                value={item.value} 
                text={item.text} 
                decoration={item.decoration} 
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CoursesStats;
