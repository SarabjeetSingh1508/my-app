import React from 'react';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const MissionVision = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe fitness is better together. Building strong, supportive communities is at the heart of everything we do.'
    },
    {
      icon: Target,
      title: 'Goal Achievement',
      description: 'We help people set, track, and achieve their fitness goals through structured challenges and friendly competition.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate to make fitness more engaging, accessible, and fun for everyone.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To make fitness social, engaging, and accessible for everyone by creating 
              a platform where people can challenge themselves and their friends, track 
              their progress, and celebrate achievements together.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">We strive to:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Break down barriers to fitness participation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Foster healthy competition and motivation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Build lasting fitness habits through community
                </li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Eye className="h-8 w-8 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To become the world's leading fitness community platform where millions 
              of people support each other in achieving their health and wellness goals, 
              creating a healthier and more connected world.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">We envision:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  A global community of fitness enthusiasts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Technology that makes fitness accessible to all
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  A world where staying fit is fun and social
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values guide everything we do and help us stay true to our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <value.icon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;