"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonBorder from "./ButtonBorder";

const SubscribeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch("https://tavyana.activehosted.com/proc.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          EMAIL: email,
   
        }),
      });

      if (response.ok) {
        setSubmissionStatus("Abonare reușită! Verifică-ți emailul pentru confirmare.");
        setEmail("");
      } else {
        setSubmissionStatus("Ceva nu a mers bine. Te rugăm să încerci din nou.");
      }
    } catch (error) {
      setSubmissionStatus("Eroare la trimiterea formularului. Te rugăm să încerci din nou.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center py-4 px-6"
    >
      <motion.div
        className="relative flex items-center overflow-hidden justify-center font-jakarta max-w-screen-lg w-full min-h-[60vh] bg-primary p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 flex justify-between items-start p-4 pointer-events-none">
          <div className="w-32 h-32 bg-white rounded-full opacity-20 transform rotate-45 -translate-x-1/4 -translate-y-1/4"></div>
          <div className="w-32 h-32 bg-white rounded-full opacity-20 transform rotate-45 translate-x-1/4 translate-y-1/4"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <span className="bg-secondary text-primary text-xs font-semibold px-4 py-2 rounded-full mb-4">
            SUBSCRIBE
          </span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-4xl text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cum să-ți transformi visurile în realitate!
          </motion.h2>

          <motion.p
            className="text-lg mb-8 text-gray-100 text-center max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Abonează-te pentru a primi ultimele noutăți și resurse utile pentru
            a-ți atinge potențialul maxim în domeniul extensiilor de gene.
          </motion.p>

          <motion.form
            className="flex flex-col w-full max-w-md items-center"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.input
              type="email"
              placeholder="Adresa ta de email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-xs p-3 mb-4 text-black rounded-lg outline-none border border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              required
            />
            <div className="relative flex justify-center items-center gap-2">
              <ButtonBorder text={isSubmitting ? "Abonare în curs..." : "Abonează-te"} />
            </div>
          </motion.form>

          {submissionStatus && (
            <p className={`mt-4 ${submissionStatus.includes("reușită") ? "text-green-500" : "text-red-500"}`}>
              {submissionStatus}
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default SubscribeSection;
