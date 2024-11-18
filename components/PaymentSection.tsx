"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPaypal } from "react-icons/fa";
import { FaStripe } from "react-icons/fa6";

interface PaymentSectionProps {
  onMethodSelect: (method: string) => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ onMethodSelect }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("online");

  useEffect(() => {
    if (selectedMethod) {
      onMethodSelect(selectedMethod);
    }
  }, [selectedMethod, onMethodSelect]);

  const handleChange = (method: string) => {
    setSelectedMethod(method);
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
        <div
          className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all duration-300 
          ${
            selectedMethod === "online"
              ? "border-primary bg-primary text-white"
              : "border-gray-300 bg-white text-gray-600"
          }`}
          onClick={() => handleChange("online")}
        >
          <FaStripe className="text-4xl mr-3" />
          <span className="text-md font-medium">Stripe</span>
        </div>

        <div
          className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all duration-300 
          ${
            selectedMethod === "pos"
              ? "border-primary bg-primary text-white"
              : "border-gray-300 bg-white text-gray-600"
          }`}
          onClick={() => handleChange("pos")}
        >
          <FaPaypal className="text-4xl mr-3" />
          <span className="text-md font-medium">Paypal</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
