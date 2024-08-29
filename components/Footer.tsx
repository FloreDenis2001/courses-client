"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import background from "@/assets/footerbg.png";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const socialIconTransition = () => ({
  duration: 0.5,
});

export const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.footer
      ref={ref}
      className="flex items-center justify-center md:py-4 mx-4 mt-4"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={footerVariants}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative font-jakarta max-w-screen-lg w-full bg-secondary p-8 rounded-lg shadow-md"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={footerVariants}
        transition={{ duration: 0.6 }}
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
      
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="sm:col-span-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={footerVariants}
            transition={{ duration: 0.6 }}
          >
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center mb-6"
            >
              <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                Beauty Academy - Ana Buda
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm">
                Explorează arta frumuseții cu Ana Buda, un beauty artist renumit
                și inspiră-te din cursurile noastre profesionale. Fii parte din
                comunitatea noastră și transformă-ți pasiunea în carieră.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="space-y-2 text-sm"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={footerVariants}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base font-bold tracking-wide">Contacts</p>
            <div className="flex">
              <p className="mr-1">Phone:</p>
              <a
                href="tel:0741 926 728"
                className="transition-colors duration-300 hover:text-primary"
              >
                0741 926 728
              </a>
            </div>
            <div className="flex">
              <p className="mr-1">Email:</p>
              <a
                href="mailto:tavy_ana@yahoo.com"
                className="transition-colors duration-300 hover:text-primary"
              >
                tavy_ana@yahoo.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-primary"
              >
                Satu Mare, Romania
              </a>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={footerVariants}
            transition={{ duration: 0.6 }}
          >
            <span className="text-base font-bold tracking-wide">Social</span>
            <div className="flex items-center mt-1 space-x-3">
              <motion.a
                href="/"
                className="text-gray-400 transition-colors duration-300 hover:text-primary"
                variants={socialIconVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </motion.a>
              <motion.a
                href="/"
                className="text-gray-400 transition-colors duration-300 hover:text-primary"
                variants={socialIconVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </motion.a>
              <motion.a
                href="/"
                className="text-gray-400 transition-colors duration-300 hover:text-primary"
                variants={socialIconVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </motion.a>
            </div>
            <motion.p
              className="mt-4 text-sm text-gray-400"
              variants={footerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Rămâi conectat și inspirat de ultimele tendințe în beauty.
              Urmărește-ne pe rețelele sociale pentru actualizări și sfaturi
              exclusive.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-700 lg:flex-row"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={footerVariants}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.p
            className="text-sm text-gray-400 hover:text-primary"
            variants={footerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            © {new Date().getFullYear()} Global Development Future SRL. All
            rights reserved.
          </motion.p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <motion.a
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-primary"
                variants={footerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                F.A.Q
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-primary"
                variants={footerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Privacy Policy
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-primary"
                variants={footerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Terms &amp; Conditions
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};
