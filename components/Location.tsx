import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ArrowUpRightIcon } from './icons/Icons';

const Location: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const address = 'Av. Paulista, 1234 - Bela Vista, São Paulo - SP';
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here (e.g., API call)
    alert('Obrigado pelo seu contato! Formulário enviado com sucesso (simulação).');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#C88A6B]">
            Localização e Contato
          </h2>
          <div className="w-24 h-1 bg-[#C88A6B] mx-auto mt-4"></div>
           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Dê o primeiro passo. Entre em contato para agendar sua conversa ou tirar dúvidas.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Side: Info and Form */}
            <div className="lg:w-1/2">
                 <div className="space-y-6 text-gray-700 mb-10">
                    <div className="flex items-start">
                        <MapPinIcon className="h-6 w-6 text-[#C88A6B] mr-4 flex-shrink-0 mt-1" />
                        <div>
                            <span>{address}</span>
                            <a 
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center mt-2 text-sm font-semibold text-[#C88A6B] hover:underline"
                            >
                                Como chegar
                                <ArrowUpRightIcon className="h-4 w-4 ml-1" />
                            </a>
                        </div>
                    </div>
                     <div className="flex items-center">
                        <PhoneIcon className="h-6 w-6 text-[#C88A6B] mr-4 flex-shrink-0" />
                        <span>(11) 98765-4321</span>
                    </div>
                     <div className="flex items-center">
                        <MailIcon className="h-6 w-6 text-[#C88A6B] mr-4 flex-shrink-0" />
                        <span>contato@fernandaoliveira.com</span>
                    </div>
                 </div>

                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#C88A6B] focus:border-[#C88A6B]"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#C88A6B] focus:border-[#C88A6B]"
                    />
                    </div>
                    <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">Qual serviço você tem interesse?</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#C88A6B] focus:border-[#C88A6B] bg-white"
                    >
                        <option value="">Selecione um serviço</option>
                        <option value="casal-avulsa">Terapia de Casal - Sessão Avulsa</option>
                        <option value="casal-pacote">Terapia de Casal - Pacote 4 sessões</option>
                        <option value="outro">Outro (especificar na mensagem)</option>
                    </select>
                    </div>
                    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#C88A6B] focus:border-[#C88A6B]"
                    ></textarea>
                    </div>
                    <div className="text-left">
                    <button
                        type="submit"
                        className="inline-block bg-[#C88A6B] text-white font-bold py-3 px-10 rounded-full hover:bg-[#A66A55] transition-all duration-300 transform hover:scale-105"
                    >
                        Enviar Mensagem
                    </button>
                    </div>
                </form>
            </div>

            {/* Right Side: Map */}
            <div className="lg:w-1/2 h-96 lg:h-auto">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.145833483963!2d-46.65882638487101!3d-23.56312486754435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x242403e74e4b5313!2sAv.%20Paulista%2C%201234%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1683488426173!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Endereço do consultório no Google Maps"
                    className="rounded-lg shadow-lg"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Location;