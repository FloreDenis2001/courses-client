"use client";
import React, {  useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DeliveryInformation from "@/components/DeliveryInformation";
import PaymentSection from "@/components/PaymentSection";
import OrderSummary from "@/components/OrderSummary";
import ButtonFull from "@/components/ButtonFull";
import background from "@/assets/background.jpg";


const CheckoutPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const courses = [
    {
      code: "T0AS8-25",
      name: "Portable Stereo Speaker",
      price: 230.49,
      quantity: 1,
    },
    {
      code: "JCC09-S8",
      name: "i-Type Instant Camera",
      price: 630.2,
      quantity: 1,
    },
    {
      code: "JH515-SB",
      name: "Positive Vibration ANC",
      price: 330.0,
      quantity: 1,
    },
  ];

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <section
      ref={ref}
      className="flex items-center justify-center min-h-screen py-10 px-4 mt-20 overflow-hidden"
    >
      <motion.div
        className="relative font-jakarta flex flex-col md:flex-row gap-8 w-full  max-w-screen-lg mx-auto px-4 md:px-6 bg-white rounded-xl p-8 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 col-span-1  p-6 rounded-lg shadow-lg border border-gray-200 bg-white">
          <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
          <DeliveryInformation />
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <PaymentSection onMethodSelect={handlePaymentMethodSelect} />
          
          </div>
        </div>

        <div className="relative min-h-full flex flex-col justify-between z-10 col-span-1 border border-gray-200 bg-white p-4 rounded-lg shadow-lg">
          <OrderSummary courses={courses} />
          {paymentMethod && (
              <div className="flex flex-col">
                <div className="flex justify-between font-bold  border-t pt-4">
                  <span>Subtotal</span>
                  <span>1000 USD</span>
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
