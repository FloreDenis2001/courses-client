"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lesson } from "@/modules/lessons/data";
import LessonItem from "./LessonItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface LessonListProps {
  lessons: Lesson[];
}

const LessonList: React.FC<LessonListProps> = ({ lessons }) => {
  const [openLessonIndex, setOpenLessonIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenLessonIndex(openLessonIndex === index ? null : index);
  };

  return (
    <section className="my-8 p-4 md:p-8 bg-secondary rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Lectii</h2>
      <div>
        {lessons.map((lesson, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-4"
          >
            <div className="flex items-center">
              <button
                onClick={() => handleToggle(index)}
                className="flex-1 text-left bg-primary text-white p-3 rounded-md flex items-center justify-between"
              >
                {lesson.title}
                <motion.div
                  animate={{ rotate: openLessonIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-white text-xl"
                  />
                </motion.div>
              </button>
            </div>
            <AnimatePresence>
              {openLessonIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2"
                >
                  <LessonItem lesson={lesson} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LessonList;
