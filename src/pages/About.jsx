import React from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyHistory from '../components/about/CompanyHistory';
import MissionVision from '../components/about/MissionVision';
import TeamCarousel from '../components/about/TeamCarousel';

const About = () => {
  return (
    <div>
      <AboutHero />
      <CompanyHistory />
      <MissionVision />
      <TeamCarousel />
    </div>
  );
};

export default About;