import React from 'react';
import { CheckIcon } from './icons/Icons';

const topics = [
    "Comunicação",
    "Conflitos",
    "Intimidade",
    "Confiança",
    "Planos futuros",
    "Família"
];

const pricing = [
    {
        title: "Sessão avulsa",
        price: "R$ 200",
        description: "Sessão de 50 minutos para o casal. Ideal para quem quer conhecer a terapia ou tratar questões pontuais.",
    },
    {
        title: "Pacote 4 sessões",
        price: "R$ 720",
        description: "Um pacote para um acompanhamento mais próximo, com um desconto especial. Sessões semanais de 50 minutos.",
    }
]

const Services: React.FC = () => {
  return (
    <section id="terapia-de-casal" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#C88A6B]">
          Terapia de Casal
        </h2>
        <div className="w-24 h-1 bg-[#C88A6B] mx-auto mt-4 mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-12">
            A terapia de casal é um espaço seguro e neutro para que ambos possam expressar seus sentimentos, preocupações e desejos. Juntos, vamos identificar padrões de comportamento, melhorar a comunicação e encontrar soluções para os desafios que a vida a dois apresenta.
        </p>

        <div className="bg-[#F2EFE5] p-8 md:p-12 rounded-lg text-left max-w-4xl mx-auto mb-20">
            <h3 className="text-2xl font-playfair font-semibold text-[#C88A6B] text-center mb-8">Alguns temas que podemos abordar:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                {topics.map(topic => (
                    <div key={topic} className="flex items-center">
                        <CheckIcon className="h-6 w-6 text-[#C88A6B] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                    </div>
                ))}
            </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[#C88A6B] mb-12">
          Valores
        </h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200 flex flex-col"
            >
              <h4 className="text-2xl font-playfair font-semibold text-gray-800 mb-2">
                {plan.title}
              </h4>
              <p className="text-4xl font-lato font-bold text-[#C88A6B] my-4">{plan.price}</p>
              <p className="text-gray-600 flex-grow">{plan.description}</p>
               <a
                href="#localizacao"
                className="mt-8 inline-block bg-[#C88A6B] text-white font-bold py-3 px-8 rounded-full hover:bg-[#A66A55] transition-all duration-300 transform hover:scale-105"
                >
                    Agendar
                </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;