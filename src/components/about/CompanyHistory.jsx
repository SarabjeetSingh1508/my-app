import React from 'react';
import { Calendar, TrendingUp, Globe, Award } from 'lucide-react';

const CompanyHistory = () => {
  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded by a team of fitness enthusiasts and tech experts who wanted to make fitness social and engaging.',
      icon: Calendar,
      stats: '1K users'
    },
    {
      year: '2021',
      title: 'Community Growth',
      description: 'Reached 100K active users and launched our first major feature: group challenges and leaderboards.',
      icon: TrendingUp,
      stats: '100K users'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded to 50+ countries and introduced multilingual support to serve our diverse community.',
      icon: Globe,
      stats: '500K users'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Won "Best Fitness App" award and integrated with major fitness platforms like Strava and Fitbit.',
      icon: Award,
      stats: '1M+ users'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a simple idea to a global fitness community, here's how we've grown 
            to help millions of people achieve their fitness goals together.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-200 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-400">
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                        <milestone.icon className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-yellow-600">
                          {milestone.year}
                        </div>
                        <div className="text-sm text-gray-500">
                          {milestone.stats}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>

                {/* Spacer */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;