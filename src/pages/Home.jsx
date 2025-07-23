import React from 'react';
import Hero from '../components/home/Hero';
import TrendingChallenges from '../components/home/TrendingChallenges';
import KeyFeatures from '../components/home/KeyFeatures';
import TestimonialCarousel from '../components/home/TestimonialCarousel';

const Home = () => {
  return (
    <div>
      <Hero />
      <TrendingChallenges />
      <KeyFeatures />
      <TestimonialCarousel />
    </div>
  );
};

export default Home;