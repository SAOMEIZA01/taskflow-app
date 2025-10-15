import React from 'react';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Testimonial from './Components/Testimonial';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
import ThemeToggle from './Components/ThemeToggle';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Pricing />
        <Testimonial />
        <Footer />
        <ThemeToggle />
        <Navbar />
    </div>
  )
}

export default App