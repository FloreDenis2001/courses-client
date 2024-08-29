"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faCreditCard,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FaPaypal } from "react-icons/fa";

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
      <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all duration-300 
          ${
            selectedMethod === "cod"
              ? "border-primary bg-primary text-white"
              : "border-gray-300 bg-white text-gray-600"
          }`}
          onClick={() => handleChange("cod")}
        >
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl mr-3" />
          <span className="text-sm font-medium">Cash</span>
        </div>
        <div
          className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all duration-300 
          ${
            selectedMethod === "online"
              ? "border-primary bg-primary text-white"
              : "border-gray-300 bg-white text-gray-600"
          }`}
          onClick={() => handleChange("online")}
        >
          <FontAwesomeIcon icon={faCreditCard} className="text-2xl mr-3" />
          <span className="text-sm font-medium">Online Payment</span>
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
          <FaPaypal className="text-2xl mr-3" />
          <span className="text-sm font-medium">Paypal</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
