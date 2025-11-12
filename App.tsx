
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

function App() {
  return (
    <div className="bg-[#F2EFE5]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;
