import React from 'react';
import Hero from '../components/home/Hero';

import KeyFeatures from '../components/home/KeyFeatures';
import TestimonialCarousel from '../components/home/TestimonialCarousel';


const Home = () => {
  return (
    <div>
      <Hero />
      <KeyFeatures />
      <TestimonialCarousel />
    </div>
  );
};

export default Home;