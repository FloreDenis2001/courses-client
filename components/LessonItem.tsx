import React from 'react';
import { motion } from 'framer-motion';
import { Lesson } from '@/modules/lessons/data';
import Link from 'next/link';

interface LessonItemProps {
  lesson: Lesson;
}

const LessonItem: React.FC<LessonItemProps> = ({ lesson }) => {
  return (
    <motion.div
      className="p-4 bg-white rounded-md shadow-sm"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <video controls src={lesson.videoUrl} className="w-full mb-2" />
      <p className="mb-2 text-gray-700">{lesson.description}</p>
      {lesson.supportFile && (
        <Link href={lesson.supportFile} download className="text-primary">
          Download Support File
        </Link>
      )}
    </motion.div>
  );
};

export default LessonItem;
