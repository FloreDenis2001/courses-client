import React from "react";
import ContactCard from "./ContactCard";
import {
  faEnvelope,
  faPhone,
  faClock,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface ContactSection {
  title: string;
  content: { type: "link" | "text"; href?: string; text: string }[];
  icon: IconDefinition;
}

const contactData: ContactSection[] = [
  {
    title: "Trimite-ne un e-mail 24/7",
    content: [
      {
        type: "link",
        href: "mailto:tavy_ana@yahoo.com",
        text: "tavy_ana@yahoo.com",
      },
    ],
    icon: faEnvelope,
  },
  {
    title: "Sună-ne 24/7",
    content: [
      { type: "link", href: "tel:+40751389111", text: "Telefon: 0751 389 111" },
      { type: "link", href: "tel:+40741926728", text: "Mobil: 0741 926 728" },
    ],
    icon: faPhone,
  },
  {
    title: "Program de lucru",
    content: [
      { type: "text", text: "Luni - Vineri: 09:00 am - 06:00 pm" },
      { type: "text", text: "Sâmbătă - Duminică: Închis" },
    ],
    icon: faClock,
  },
];

const ContactInfo: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-4 mx-4">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl md:text-4xl text-primary mb-4">
          Contactează-ne
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {contactData.map((contact, index) => (
          <ContactCard
            key={index}
            title={contact.title}
            content={contact.content}
            icon={contact.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
