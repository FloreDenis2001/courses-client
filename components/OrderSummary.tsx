"use client";

import React from "react";

interface Course {
  code: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderSummaryProps {
  courses: Course[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ courses }) => {
  const totalAmount = courses.reduce(
    (total, course) => total + course.price * course.quantity,
    0
  );

  return (
    <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="flex flex-col gap-3">
        {courses.map((course) => (
          <div key={course.code} className="grid grid-cols-2 gap-2 items-center border-b py-2">
            <div>
              <span className="font-medium text-gray-800">{course.name}</span>
              <span className="block text-sm text-gray-500">x{course.quantity}</span>
            </div>
            <div className="text-right font-medium text-gray-800">
              {(course.price * course.quantity).toFixed(2)} USD
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between font-semibold text-gray-900 border-t pt-4">
        <span>Total:</span>
        <span>{totalAmount.toFixed(2)} USD</span>
      </div>
    </div>
  );
};

export default OrderSummary;
