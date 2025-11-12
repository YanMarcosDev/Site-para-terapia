
import React from 'react';
import { WhatsappIcon } from './icons/Icons';

const WhatsappButton: React.FC = () => {
  return (
    <a
      href="#" // Replace with your WhatsApp link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-40"
      aria-label="Fale comigo no WhatsApp"
    >
      <WhatsappIcon className="h-8 w-8" />
    </a>
  );
};

export default WhatsappButton;
