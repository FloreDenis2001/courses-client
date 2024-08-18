"use client";
import React from "react";
import SubjectItem from "./SubjectItem";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SubjectSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const data = [
    { text: "Tehnici de aplicare a genelor false, fir cu fir" },
    { text: "Învățarea diverselor forme și stiluri de extensii de gene" },
    { text: "Alegerea corectă a produselor și instrumentelor pentru aplicare" },
    { text: "Metode de întreținere și îngrijire post-aplicare" },
    { text: "Cum să personalizezi extensiile de gene pentru fiecare client" },
    { text: "Soluționarea problemelor comune în aplicarea genelor false" },
    { text: "Tehnici avansate de volumizare a genelor" },
    { text: "Întreținerea și siguranța sănătății ochilor" },
    { text: "Consilierea clienților pentru îngrijirea genelor acasă" },
    { text: "Sfaturi pentru crearea unui business de succes în beauty" },
  ];

  return (
    <section
      className="relative flex items-center justify-center py-16 px-6 overflow-hidden bg-gradient-to-r "
      ref={ref}
    >
      <motion.div
        className="font-jakarta bg-white p-8 md:p-12 lg:p-16 max-w-screen-lg w-full relative z-10 rounded-xl "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-extrabold mb-6 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
        >
          Ce subiecte sunt acoperite în curs?
        </motion.h2>
        <motion.p
          className="text-lg mb-8 text-gray-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
        >
          Învăță despre tehnici avansate de aplicare a genelor false, fir cu fir, și
          obține abilitățile necesare pentru a deveni expert în beauty.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {data.map((item, index) => (
            <SubjectItem key={index} index={index} text={item.text} />
          ))}
        </motion.div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Enhanced 3D Abstract Shapes */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-yellow-400 to-red-500 opacity-50"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 0],
              transformPerspective: 600,
              transformOrigin: "center",
            }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            style={{ zIndex: -1, transformStyle: "preserve-3d" }}
          />
          <motion.div
            className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-bl from-blue-500 to-teal-500 opacity-40"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 0],
              transformPerspective: 600,
              transformOrigin: "center",
            }}
            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
            style={{ zIndex: -1, transformStyle: "preserve-3d" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-purple-600 to-indigo-700 opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [-360, 0],
              transformPerspective: 600,
              transformOrigin: "center",
            }}
            transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
            style={{ zIndex: -1, transformStyle: "preserve-3d" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-400 to-teal-600 opacity-35"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360],
              transformPerspective: 600,
              transformOrigin: "center",
            }}
            transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
            style={{ zIndex: -1, transformStyle: "preserve-3d" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SubjectSection;
