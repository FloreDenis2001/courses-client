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
import PaymentService from "@/modules/payment/services/PaymentService";

const CheckoutPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    country: "",
    address: "",
  });

  const selectedCourses: Course[] = courses;
  const paymentService = new PaymentService();
  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
  };

  const handleDeliveryInfoChange = (info: typeof deliveryInfo) => {
    setDeliveryInfo(info);
  };

  const handleFinalizePayment = async () => {
    setIsProcessing(true);
    try {
      const paymentRequest = {
        paymentInfoData: {
          name: deliveryInfo.name,
          phone: deliveryInfo.phone,
          email: deliveryInfo.email,
          city: deliveryInfo.city,
          country: deliveryInfo.country,
          address: deliveryInfo.address,
        },
        paymentDetailsDTO: selectedCourses.map((course) => ({
          name: course.name,
          price: course.price,
          currency: "usd",
          quantity: 1,
        })),
      };
  
      const response = await paymentService.createCheckoutSession(paymentRequest);
  
      console.log("Payment response:", response);
  
      if (response.url) {
        window.location.href = response.url;
      } else {
        throw new Error("Failed to retrieve Stripe Checkout URL");
      }
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
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
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
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
                  text={isProcessing ? "Processing..." : "Finalizeaza"}
                  onClick={handleFinalizePayment}
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
