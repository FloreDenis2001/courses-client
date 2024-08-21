"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ButtonFull from "@/components/ButtonFull";
import trainer from "@/assets/loginbackground.jpg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const LoginPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <motion.section
      className="flex items-center justify-center md:py-4 mt-20 mx-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-start font-jakarta bg-secondary p-10 max-w-screen-lg max-h-[80vh] w-full relative z-10 rounded-xl mx-auto shadow-md flex flex-row mt-8 md:mt-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mt-12 flex flex-col items-center w-1/2">
          <motion.h1
            className="text-2xl xl:text-3xl font-extrabold"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Logare
          </motion.h1>
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center">
              <button
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 border border-primary text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow-lg"
                onClick={() =>
                  window.open("https://accounts.google.com/signin", "_blank")
                }
              >
                <div className="bg-white p-2 rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-4">Logare cu Google</span>
              </button>
            </div>

            <div className="my-8 border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Sau loghează-te cu email
              </div>
            </div>

            <motion.form
              onSubmit={handleLogin}
              className="mx-auto max-w-xs flex flex-col gap-3 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:bg-white"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-primary focus:bg-white mt-5"
                type="password"
                placeholder="Parolă"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <ButtonFull text="Logare" />

              <p className="mt-6 text-xs text-gray-600 text-center">
                Sunt de acord cu
                <a
                  href="#"
                  className="border-b border-gray-500 hover:text-primary hover:border-primary border-dotted"
                >
                  {" "}
                  Termenii și condițiile{" "}
                </a>
                și cu
                <a
                  href="#"
                  className="border-b border-gray-500 hover:text-primary hover:border-primary border-dotted"
                >
                  {" "}
                  Politica de confidențialitate{" "}
                </a>
              </p>

              <div className="mt-4 text-sm text-gray-600 text-center">
                <a
                  href="#reset-password"
                  className="text-primary hover:underline"
                >
                  Ați uitat parola?
                </a>
              </div>

              <div className="mt-2 text-sm text-gray-600 text-center">
                Nu aveți un cont? <Link href="/register" className="text-primary hover:underline ">Creați unul acum</Link>
              </div>
            </motion.form>
          </div>
        </div>

        <motion.div
          className="p-8 w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={trainer}
            className="w-full h-full object-cover rounded-xl"
            alt="Ana Buda"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LoginPage;
