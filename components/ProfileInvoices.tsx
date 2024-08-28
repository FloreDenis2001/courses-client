"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Invoice {
  id: string;
  date: string;
  amount: string;
}

const ProfileInvoices: React.FC<{ invoices: Invoice[] }> = ({ invoices }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="p-6 bg-white rounded-xl shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold mb-4">Facturi</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Invoice ID</th>
            <th className="py-2">Date</th>
            <th className="py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-b">
              <td className="py-2">{invoice.id}</td>
              <td className="py-2">{invoice.date}</td>
              <td className="py-2">{invoice.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default ProfileInvoices;
