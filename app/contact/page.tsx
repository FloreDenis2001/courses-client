"use client";
import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

const ContactSection: React.FC = () => {
  return (
    <>
      <ContactForm />
      <ContactInfo />
    </>
  );
};

export default ContactSection;
