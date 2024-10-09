"use client";

import { Course } from "@/modules/lessons/data";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface OrderSummaryProps {
  courses: Course[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ courses }) => {
  const totalAmount = courses.reduce(
    (total, course) => total + course.price * 1,
    0
  );

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
      <div className="flex flex-col gap-3">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center space-x-4 border-b border-gray-200 pb-4"
          >
            <Image
              src={course.image}
              alt={course.name}
              className="w-20 h-20 object-cover rounded-lg shadow-sm"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {course.name}
              </h3>
              <p className="text-sm text-primary">{course.price} RON</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 flex justify-between font-semibold text-gray-900 border-t pt-4">
        <span>Total:</span>
        <span>{totalAmount.toFixed(2)} USD</span>
      </div>
    </div>
  );
};

export default OrderSummary;
