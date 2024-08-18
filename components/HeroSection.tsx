"use client";
import React from "react";
import { motion } from "framer-motion";
import ButtonFull from "./ButtonFull";
import trainer from "@/assets/trainer.jpg";
import Image from "next/image";
import ButtonBorder from "./ButtonBorder";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center md:py-12 m-4">
      <motion.div
        className="font-jakarta grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:max-w-[850px] lg:max-w-[1200px] w-full px-4 md:px-6 bg-secondary rounded-xl p-8 max-w-[650px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col items-center justify-center px-4 md:px-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
            Intră în lumea fascinantă a beauty-ului
          </h1>
          <span className="font-thin text-base md:text-lg lg:text-xl mb-4 md:mb-6">
            Descoperă secretele frumuseții cu cursurile noastre exclusive,
            concepute pentru a-ți perfecționa abilitățile și a-ți transforma
            pasiunea în carieră. Ești gata pentru această călătorie?
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col md:items-center justify-center px-4 md:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-row md:flex-col md:text-center lg:flex-row lg:text-start items-start gap-4 md:gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={trainer}
              className="rounded-2xl w-1/2 md:w-48 md:h-64 max-w-[200px]"
              alt="Ana Buda"
            />
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
                  Ana Buda
                </h3>
                <span className="text-primary text-light text-base md:text-lg lg:text-xl">
                  Expert Beauty Artist
                </span>
              </div>

              <div className="flex flex-col gap-2 mt-4 md:mt-6">
                <ButtonFull text="Vezi cursurile" />
                <ButtonBorder text="Invata mai multe" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
