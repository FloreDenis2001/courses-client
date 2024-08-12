import React from 'react';

interface ButtonProps {
  children: React.ReactNode; 
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="p-2 bg-primary text-white rounded w-1/3">
      {children}
    </button>
  );
};

export default Button;
