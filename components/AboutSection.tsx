"use client";
import React from "react";
import { motion } from "framer-motion";
import trainer from "@/assets/instructor1.jpg";
import background from "@/assets/footerbg.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ButtonFull from "./ButtonFull";
import ButtonBorder from "./ButtonBorder";

const AboutSection = () => {
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
        className="mt-8 md:mt-6 relative font-jakarta grid min-h-[80vh] grid-cols-1 lg:grid-cols-2 gap-4  md:gap-8 w-full max-w-screen-lg mx-auto px-4 md:px-6 bg-secondary rounded-xl p-8 shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 z-0 rounded-xl"
          initial={{ filter: "blur(40px)", scale: 1.1 }}
          animate={{
            filter: inView ? "blur(0px)" : "blur(10px)",
            scale: inView ? 1 : 1.1,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center px-4 md:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={trainer}
            className="rounded-2xl md:w-48 md:h-64 max-w-[250px] max-h-[280px] md:min-h-[400px] md:min-w-[300px]"
            alt="Ana Buda"
          />
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-start  justify-center px-4 md:px-0 "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl lg:text-5xl font-extrabold mb-6 max-w-lg "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
          >
            Despre Ana Buda
          </motion.h1>
          <motion.p
            className="font-thin text-base md:text-xl  mb-4 text-gray-800  max-w-lg "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
          >
            Activez in domeniu beauty din <span className="text-primary font-semibold">2008</span>, iar din <span className="text-primary font-semibold">2012</span> sunt trainer
            autorizat in acest domeniu.
          </motion.p>
          <motion.p
            className="font-thin text-base md:text-xl  mb-8 text-gray-800  max-w-lg "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
          >
            Pana acum am peste <span className="text-primary font-semibold">200</span> de absolventi, lashstylisti care activeaza
            atat in tara cat si in strainatate
          </motion.p>
          <motion.p
            className="font-thin text-base md:text-xl  mb-8 text-gray-800  max-w-lg "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
          >
            La randul meu am urmat peste  <span className="text-primary font-semibold">100</span> de cursuri de perfectionare atat in
            tara cat si in alte tari iar in anul 2023 am lansat propriul brand
            de extensii de gene .
          </motion.p>

          <motion.p
            className="font-thin text-base md:text-xl  mb-8 text-gray-800  max-w-lg "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
          >
            Conduc o echipa de <span className="text-primary font-semibold">lash stylisti</span> in studioul meu
          </motion.p>
          
          <div className="flex flex-col lg:flex-row  gap-2 mt-2 md:mt-2 items-center lg:items-start">
                <ButtonFull text="Cursuri" redirectTo="courses"/>
                <ButtonBorder text="Contact" redirectTo="contact" />
              </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
