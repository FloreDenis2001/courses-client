"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DeliveryInformation from "@/components/DeliveryInformation";
import PaymentSection from "@/components/PaymentSection";
import OrderSummary from "@/components/OrderSummary";
import ButtonFull from "@/components/ButtonFull";
import background from "@/assets/background.jpg";
import { Course, courses } from "@/modules/lessons/data";

const CheckoutPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const selectedCourses: Course[] = courses;

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <section
      ref={ref}
      className="flex items-center justify-center min-h-screen py-10 px-4 mt-20 overflow-hidden"
    >
      <motion.div
        className="relative font-jakarta flex flex-col md:flex-row gap-8 w-full max-w-screen-lg mx-auto px-4 md:px-6 bg-white rounded-xl p-8 shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 col-span-1 p-6 rounded-lg shadow-lg border border-gray-200 bg-white">
          <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
          <DeliveryInformation />
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <PaymentSection onMethodSelect={handlePaymentMethodSelect} />
          </div>
        </div>

        <div className="relative min-h-full flex flex-col justify-between z-10 col-span-1 border border-gray-200 bg-white p-4 rounded-lg shadow-lg">
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <OrderSummary courses={selectedCourses} />
          </div>

          {paymentMethod && (
            <div className="flex flex-col mt-4">
              <div className="flex justify-between font-bold border-t pt-4">
                <span>Subtotal</span>
                <span>
                  {selectedCourses
                    .reduce((acc, course) => acc + course.price, 0)
                    .toFixed(2)}{" "}
                  USD
                </span>
              </div>

              <div className="mt-8 self-center">
                <ButtonFull
                  text="Finalizeaza"
                  redirectTo="/order-confirmation"
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CheckoutPage;
