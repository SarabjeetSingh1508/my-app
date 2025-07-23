import React from 'react';
import { Target, Users, Heart } from 'lucide-react';

const AboutHero = () => {
  return (
    <div className="relative min-h-96 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Empowering Your
            <span className="block text-yellow-200">Fitness Journey</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-12 text-yellow-100 max-w-4xl mx-auto">
            We believe fitness is more fun with friends. Our platform connects people, 
            creates healthy competition, and builds lasting fitness habits through community support.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <Target className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <div className="text-3xl font-bold mb-2">50M+</div>
              <div className="text-yellow-500">Challenges Completed</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <Users className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-yellow-500">Active Community</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <Heart className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-yellow-500">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;