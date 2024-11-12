import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ContactCardProps {
  title: string;
  content: { type: 'link' | 'text'; href?: string; text: string }[];
  icon: IconDefinition;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, content, icon }) => {
  return (
    <motion.div
      className="bg-secondary rounded-xl text-center shadow-md cursor-pointer flex flex-col items-center justify-center relative group p-6 max-w-xs mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, backgroundColor: "#DE968D" }}
      whileTap={{ scale: 0.95, backgroundColor: "#DE968D" }} 
      style={{ width: '300px', height: '400px' }}
    >
      <div className="bg-primary p-4 rounded-xl mb-4 w-24 h-24 flex items-center justify-center group-hover:bg-white group-hover:rounded-full transition-colors duration-300">
        <FontAwesomeIcon
          icon={icon}
          className="text-white text-4xl group-hover:text-primary transition-colors duration-300"
        />
      </div>

      <h3 className="text-xl font-bold mb-4 text-gray-600 group-hover:text-white transition-colors duration-300">
        {title}
      </h3>

      <div className="text-center">
        {content.map((item, index) => (
          <p key={index} className="text-gray-600 group-hover:text-white transition-colors duration-300">
            {item.type === 'link' ? (
              <a href={item.href} className="hover:underline">
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactCard;
