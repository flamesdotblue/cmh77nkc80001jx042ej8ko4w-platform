import React from 'react';
import Hero from './components/Hero';
import FeaturedRings from './components/FeaturedRings';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <FeaturedRings />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;
