import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#F2EFE5]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/3 w-full flex justify-center">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-[#E3DCD2] rounded-full transform -rotate-6"></div>
              <img
                src="https://lovable-stora-5e46f6.s3.amazonaws.com/terapeutafernanda/terapeutafernanda-1715799797042-491708.jpeg"
                alt="Fernanda, a terapeuta"
                className="relative w-full h-full rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="lg:w-2/3 w-full text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#C88A6B]">
              Olá, sou a Fernanda Oliveira
            </h2>
            <div className="w-24 h-1 bg-[#C88A6B] mx-auto lg:mx-0 mt-4 mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Acredito que cada pessoa possui uma força interior capaz de superar desafios e criar uma vida mais plena e significativa. Minha missão como terapeuta é ser uma facilitadora nesse processo, oferecendo um ambiente de escuta, empatia e sem julgamentos.
            </p>
            <p className="text-gray-600 leading-relaxed">
             Sou psicóloga com especialização em terapia de casal e família, com foco na abordagem sistêmica. Meu objetivo é ajudar casais a navegarem pelos desafios da vida a dois, melhorando a comunicação, resolvendo conflitos e fortalecendo a conexão emocional. Acredito que, com as ferramentas certas, todo relacionamento pode encontrar um novo equilíbrio.
            </p>
             <a
                href="#localizacao"
                className="mt-8 inline-block bg-[#C88A6B] text-white font-bold py-3 px-8 rounded-full hover:bg-[#A66A55] transition-all duration-300 transform hover:scale-105"
            >
                Vamos conversar?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;