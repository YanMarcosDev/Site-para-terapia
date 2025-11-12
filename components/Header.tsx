import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons/Icons';
import Logo from './icons/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#sobre', text: 'Sobre mim' },
    { href: '#terapia-de-casal', text: 'Terapia de Casal' },
    { href: '#depoimentos', text: 'Depoimentos' },
    { href: '#localizacao', text: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
            <a href="#" aria-label="Página inicial">
                <Logo className="h-12 w-auto" />
            </a>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#C88A6B] font-medium hover:text-[#A66A55] transition-colors"
            >
              {link.text}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#localizacao"
            className="bg-[#C88A6B] text-white font-bold py-3 px-6 rounded-full hover:bg-[#A66A55] transition-all duration-300 transform hover:scale-105"
          >
            Agendar conversa
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            <MenuIcon className="h-8 w-8 text-[#C88A6B]" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
            <XIcon className="h-8 w-8 text-[#C88A6B]" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl text-[#C88A6B] font-playfair"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </a>
          ))}
          <a
            href="#localizacao"
            className="mt-8 bg-[#C88A6B] text-white font-bold py-3 px-8 rounded-full text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Agendar conversa
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;