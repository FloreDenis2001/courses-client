"use client";
import React from "react";
import { motion } from "framer-motion";
import ButtonFull from "./ButtonFull";
import trainer from "@/assets/trainer.jpg";
import background from "@/assets/background.jpg"; // Import the background image
import Image from "next/image";
import ButtonBorder from "./ButtonBorder";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="flex items-center justify-center md:py-4 mt-20 mx-4"
    >
      <motion.div
        className="mt-8 md:mt-6 relative font-jakarta grid min-h-[80vh] grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-screen-lg mx-auto px-4 md:px-6 bg-secondary rounded-xl p-8 shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 z-0 rounded-xl"
          initial={{ filter: "blur(40px)", scale: 1.1 }}
          animate={{ filter: inView ? "blur(0px)" : "blur(10px)", scale: inView ? 1 : 1.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center px-4 md:px-0 "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-lg text-center md:text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
          >
            Intră în lumea fascinantă a beauty-ului
          </motion.h1>
          <motion.p
            className="font-thin text-base md:text-xl  mb-8 text-gray-800  max-w-lg text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
          >
            Descoperă secretele frumuseții cu cursurile noastre exclusive,
            concepute pentru a-ți perfecționa abilitățile și a-ți transforma
            pasiunea în carieră. Ești gata pentru această călătorie?
          </motion.p>
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col md:items-center justify-center px-4 md:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col items-center md:flex-col md:text-center lg:flex-row lg:text-start md:items-start gap-4 md:gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={trainer}
              className="rounded-2xl md:w-48 md:h-64 max-w-[250px] max-h-[280px] lg:min-h-[300px] lg:min-w-[200px]"
              alt="Ana Buda"
            />
            <div className="flex flex-col justify-between h-full">
              <div>
                <motion.h3
                  className="font-extrabold text-3xl md:text-4xl lg:text-5xl"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                >
                  Ana Buda
                </motion.h3>
                <motion.p
                  className="font-thin mb-8 text-primary text-light text-base md:text-lg lg:text-xl text-center lg:text-left"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
                >
                  Expert Beauty Artist
                </motion.p>
              </div>

              <div className="flex flex-col gap-2 mt-4 md:mt-6 items-center lg:items-start">
                <ButtonFull text="Cursuri" />
                <ButtonBorder text="Descopera" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
