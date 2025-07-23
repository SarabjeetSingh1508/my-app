import React from 'react';
import { Users, Target, BarChart3, Trophy } from 'lucide-react';

const KeyFeatures = () => {
  const features = [
    {
      icon: Users,
      title: "Track Fitness with Friends",
      description: "Connect with your workout buddies, create groups, and motivate each other to reach new fitness milestones together.",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600",
      benefits: ["Real-time progress sharing", "Group challenges", "Social motivation", "Achievement celebrations"]
    },
    {
      icon: Target,
      title: "Stay Consistent, Stay Fit",
      description: "Build lasting habits with our smart tracking system that keeps you accountable and helps maintain your fitness routine.",
      image: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=600",
      benefits: ["Daily habit tracking", "Streak counters", "Reminder notifications", "Progress analytics"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose FitChallenge?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience fitness like never before with our community-driven approach 
            that makes working out fun, social, and sustainable.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <feature.icon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Get Started
                  </button>
                  <button className="border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  
                  {/* Floating Stats Card */}
                  <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        {index === 0 ? (
                          <BarChart3 className="h-6 w-6 text-yellow-600" />
                        ) : (
                          <Trophy className="h-6 w-6 text-yellow-600" />
                        )}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">
                          {index === 0 ? '95%' : '21 days'}
                        </div>
                        <div className="text-sm text-gray-600">
                          {index === 0 ? 'Success Rate' : 'Avg. Streak'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;