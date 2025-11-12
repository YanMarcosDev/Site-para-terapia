import React from 'react';
import Logo from './icons/Logo';
import { InstagramIcon, WhatsappIcon as FooterWhatsappIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#C88A6B] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <a href="#" aria-label="Página inicial">
                <Logo className="h-16 w-auto mx-auto md:mx-0" color="white" />
            </a>
            <p className="mt-4 max-w-xs">
              Um caminho para o autoconhecimento e bem-estar.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <a href="#sobre" className="hover:underline">Sobre mim</a>
            <a href="#terapia-de-casal" className="hover:underline mt-2">Terapia de Casal</a>
            <a href="#depoimentos" className="hover:underline mt-2">Depoimentos</a>
            <a href="#localizacao" className="hover:underline mt-2">Contato</a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <p>contato@fernandaoliveira.com</p>
            <p className="mt-2">(11) 98765-4321</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <InstagramIcon className="h-7 w-7" />
              </a>
              <a href="#" aria-label="WhatsApp" className="hover:opacity-80 transition-opacity">
                <FooterWhatsappIcon className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Fernanda Oliveira Psicoterapia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;