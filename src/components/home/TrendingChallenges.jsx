import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Clock, Trophy } from 'lucide-react';
import { challenges } from '../../data/mockData';

const TrendingChallenges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % challenges.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + challenges.length) % challenges.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Trending Challenges
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of users taking on these popular fitness challenges. 
            Find your next goal and start competing with friends!
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-yellow-50 transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-yellow-50 transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className={`flex transition-transform duration-300 ease-in-out ${
                isTransitioning ? 'transform' : ''
              }`}
              style={{ 
                transform: `translateX(-${currentIndex * (100 / Math.min(challenges.length, 3))}%)`,
                width: `${(challenges.length / Math.min(challenges.length, 3)) * 100}%`
              }}
            >
              {challenges.map((challenge) => (
                <div key={challenge.id} className="w-1/3 px-4 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                    <div className="relative">
                      <img
                        src={challenge.image}
                        alt={challenge.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-yellow-600 font-medium">
                          {challenge.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {challenge.createdAt}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                        {challenge.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {challenge.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {challenge.participants} participants
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            Goal: {challenge.goal}
                          </span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                        Join Challenge
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {challenges.map((_, index) => (
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

export default TrendingChallenges;