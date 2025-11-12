import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
        src="https://lovable-stora-5e46f6.s3.amazonaws.com/terapeutafernanda/terapeutafernanda-1715802146460-15585.mp4"
      ></video>
      <div className="relative z-20 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight drop-shadow-lg">
          Terapia de Casal
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Reconectem-se, fortaleçam o vínculo e construam um futuro juntos. A terapia é um caminho para o reencontro.
        </p>
        <a
          href="#localizacao"
          className="mt-8 inline-block bg-white text-[#C88A6B] font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        >
          Agendar uma conversa
        </a>
      </div>
    </section>
  );
};

export default Hero;