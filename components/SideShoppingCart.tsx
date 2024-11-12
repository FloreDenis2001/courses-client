"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import ButtonFull from "./ButtonFull";
import Link from "next/link";
import { determinePath } from "@/modules/utils/utils";

interface Course {
  title: string;
  pret: number;
  image: StaticImageData;
}

interface SideShoppingCartProps {
  isCartOpen: boolean;
  toggleCart: () => void;
  courses: Course[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SideShoppingCart: React.FC<SideShoppingCartProps> = ({
  isCartOpen,
  toggleCart,
  courses,
}) => {
  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-lg z-50 p-6 flex flex-col overflow-hidden"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
            <button
              onClick={toggleCart}
              className="text-gray-700 text-2xl hover:text-gray-900 transition"
            >
              &times;
            </button>
          </div>

          <div
            className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            style={{ maxHeight: "calc(100vh - 150px)" }}
          >
            {courses.length === 0 ? (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {courses.map((course, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4 border-b border-gray-200 pb-4"
                  >
                    <Image
                      src={course.image}
                      alt={course.title}
                      className="w-20 h-20 object-cover rounded-lg shadow-sm"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {course.title}
                      </h3>
                      <p className="text-sm text-primary">{course.pret} RON</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>

          <Link
            href={determinePath("checkout")}
            className="mt-4 grid place-content-center"
            onClick={toggleCart}
          >
            <ButtonFull text="Finalizeaza" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideShoppingCart;
