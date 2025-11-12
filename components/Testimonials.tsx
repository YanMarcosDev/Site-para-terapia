import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/Icons';

const testimonialsData = [
  {
    quote: 'A terapia de casal nos deu ferramentas para conversar sem brigar. Aprendemos a ouvir um ao outro de verdade. Foi um divisor de águas no nosso casamento.',
    author: 'G. e M.',
  },
  {
    quote: 'Estávamos quase desistindo, mas a Fernanda nos ajudou a reencontrar o caminho. Com paciência e profissionalismo, ela nos guiou para reconstruir a confiança.',
    author: 'A. C.',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="depoimentos" className="py-20 bg-[#F2EFE5]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#C88A6B]">
          O que dizem sobre o nosso trabalho
        </h2>
        <div className="w-24 h-1 bg-[#C88A6B] mx-auto mt-4 mb-12"></div>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-lg text-gray-700 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <p className="mt-6 font-bold text-gray-800">- {testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
            aria-label="Depoimento anterior"
          >
            <ChevronLeftIcon className="h-6 w-6 text-[#C88A6B]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
            aria-label="Próximo depoimento"
          >
            <ChevronRightIcon className="h-6 w-6 text-[#C88A6B]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;