"use client";
import React from "react";
import SubjectItem from "./SubjectItem";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import flowerImage from "@/assets/flower.png";

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
      className="relative flex items-center justify-center md:py-16 px-6"
      ref={ref}
    >
      <motion.div
        className="relative font-jakarta max-w-screen-lg w-full bg-secondary p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
      <motion.div
          className="absolute right-0 top-0 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={flowerImage}
            alt="Floare"
            width={200}
            height={200}
            className="object-cover"
          />
        </motion.div>
        <div className="relative z-10">
          <motion.h2
            className="text-3xl font-semibold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ce subiecte sunt acoperite în curs?
          </motion.h2>
          <motion.p
            className="text-base mb-6 text-gray-600 max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Învăță despre tehnici avansate de aplicare a genelor false, fir cu
            fir, și obține abilitățile necesare pentru a deveni expert în
            beauty.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {data.map((item, index) => (
              <SubjectItem key={index} index={index} text={item.text} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SubjectSection;
