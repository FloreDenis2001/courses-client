"use client";
import React from "react";
import CoursesStatsBox from "./CoursesStatsBox";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  faBullseye,
  faBolt,
  faLightbulb,
  faTrophy,
  faHandsHelping,
  faShieldAlt,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import BelievesItem from "./BelivesItem";
import ButtonFull from "./ButtonFull";
import ButtonBorder from "./ButtonBorder";

interface DataItem {
  title: string;
  text: string;
  icon: IconDefinition;
}

const BelivesSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const data: DataItem[] = [
    {
      title: "Concentrează-te pe Impact",
      text: "Fiecare mică acțiune contează! În arta extensiilor de gene, impactul pe care îl ai asupra frumuseții și încrederii clientelor tale este uriaș. Învață cum să creezi o transformare vizibilă și semnificativă la fiecare ședință.",
      icon: faBullseye,
    },
    {
      title: "Acționează Rapid",
      text: "În industria frumuseții, viteza și eficiența sunt esențiale. Descoperă tehnici rapide și precise care îți vor permite să lucrezi eficient fără a compromite calitatea rezultatului final.",
      icon: faBolt,
    },
    {
      title: "Fii Deschisă",
      text: "Fii deschisă la noi idei, tehnici și tendințe! Învață să te adaptezi constant în această industrie dinamică și să fii întotdeauna pregătită să oferi clientelor tale cele mai bune soluții.",
      icon: faLightbulb,
    },
    {
      title: "Tinde către Rezultate",
      text: "În lumea extensiilor de gene, rezultatele sunt ceea ce contează cel mai mult. Obține rezultate remarcabile și mulțumește-ți clientele cu aspecte impecabile și durabile.",
      icon: faTrophy,
    },
    {
      title: "Colaborează",
      text: "Succesul nu vine niciodată singur! Învață cum să colaborezi cu alte stiliste și să creezi un mediu de muncă armonios și creativ, unde schimbul de idei și suportul reciproc sunt cheia succesului.",
      icon: faHandsHelping,
    },
    {
      title: "Încredere",
      text: "Încrederea este baza relației dintre tine și clientele tale. Învață cum să îți construiești o reputație de încredere și să oferi servicii de calitate, astfel încât clientele să se întoarcă întotdeauna cu plăcere.",
      icon: faShieldAlt,
    },
  ];

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.3,
      },
    }),
  };

  return (
    <section
      className="flex items-center justify-center md:py-4 mx-4 mt-2"
      ref={ref}
    >
      <motion.div
        className="flex flex-col items-center font-jakarta max-w-screen-lg w-full relative z-10 overflow-hidden mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-3xl lg:text-4xl font-extrabold mb-6 max-w-lg text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
        >
          Principiile Anei: Calea Spre Excepțional
        </motion.h1>
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
              <BelievesItem
                title={item.title}
                text={item.text}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row  gap-2 mt-2 md:mt-2 items-center lg:items-start p-2">
          <ButtonFull text="Cursuri"  redirectTo="courses"/>
          <ButtonBorder text="Contact" redirectTo="contact" />
        </div>
      </motion.div>
    </section>
  );
};

export default BelivesSection;
