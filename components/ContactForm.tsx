import React from 'react';
import ButtonFull from './ButtonFull';
import { motion } from 'framer-motion';
import background from "@/assets/footerbg.png";
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative flex items-center justify-center py-16 mx-4 mt-20">
      <motion.div
        className="relative z-10 w-full max-w-screen-lg px-4 md:px-8 lg:px-12 py-8 bg-secondary rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        ref={ref}
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: 'relative',
        }}
      >
        <div className="text-center mb-6">
          <h1 className="font-bold uppercase text-4xl md:text-5xl text-primary">
            Trimite-ne un mesaj
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-5">
          <input
            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Prenume"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Nume"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Telefon"
          />
        </div>

        <div className="my-4">
          <textarea
            placeholder="Mesaj"
            className="w-full h-56 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="my-4 flex justify-center">
          <ButtonFull text="Trimite" />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
