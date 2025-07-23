import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Twitter } from 'lucide-react';
import { teamMembers } from '../../data/mockData';

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, teamMembers.length - itemsPerView);

  const nextSlide = () => {
    if (isTransitioning || currentIndex >= maxIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning || currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => Math.max(prev - 1, 0));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of fitness enthusiasts, technologists, and community builders 
            work together to create the best possible experience for our users.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex <= 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition-colors duration-200 ${
              currentIndex <= 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-yellow-50'
            }`}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition-colors duration-200 ${
              currentIndex >= maxIndex 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-yellow-50'
            }`}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Team Members Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className={`flex transition-transform duration-300 ease-in-out ${
                isTransitioning ? 'transform' : ''
              }`}
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(teamMembers.length / itemsPerView) * 100}%`
              }}
            >
              {teamMembers.map((member) => (
                <div key={member.id} className="w-1/3 px-4 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                    <div className="p-8 text-center">
                      {/* Avatar */}
                      <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                        {member.image}
                      </div>
                      
                      {/* Name and Role */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-yellow-600 font-medium mb-4">
                        {member.role}
                      </p>
                      
                      {/* Bio */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {member.bio}
                      </p>
                      
                      {/* Social Links */}
                      <div className="flex justify-center space-x-4">
                        <a 
                          href="#" 
                          className="text-gray-400 hover:text-yellow-600 transition-colors duration-200"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a 
                          href="#" 
                          className="text-gray-400 hover:text-yellow-600 transition-colors duration-200"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 300);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-yellow-400' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;