import React from 'react';
import { Calendar, Users, Target, Trophy, User, Clock } from 'lucide-react';

const ChallengeDetails = ({ challenge, onJoinChallenge }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Challenge Image */}
      <div className="relative h-64">
        <img
          src={challenge.image}
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
            {challenge.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
          <Trophy className="h-6 w-6 text-yellow-500" />
        </div>
      </div>

      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-yellow-600 font-medium">{challenge.category}</span>
            <span className="text-gray-500 text-sm">{challenge.createdAt}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {challenge.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {challenge.description}
          </p>
        </div>

        {/* Challenge Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <Users className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{challenge.participants}</div>
            <div className="text-sm text-gray-600">Participants</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <Target className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{challenge.goal}</div>
            <div className="text-sm text-gray-600">Goal</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <User className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-gray-800">{challenge.creator}</div>
            <div className="text-sm text-gray-600">Creator</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <Calendar className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">30</div>
            <div className="text-sm text-gray-600">Days Left</div>
          </div>
        </div>

        {/* Challenge Rules */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Challenge Rules</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Complete the challenge within the specified time goal</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Submit proof of completion (photo, fitness tracker data, or video)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Times are recorded and displayed on the leaderboard</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Follow all safety guidelines and listen to your body</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Encourage and support fellow participants</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onJoinChallenge}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
          >
            <Trophy className="h-5 w-5" />
            <span>Join Challenge</span>
          </button>
          <button className="flex-1 border-2 border-gray-300 text-gray-600 hover:bg-gray-50 py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200">
            <Clock className="h-5 w-5" />
            <span>Start Timer</span>
          </button>
        </div>

        {/* Ready to integrate with fitness APIs */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="text-sm font-semibold text-blue-800 mb-2">
            🔗 API Integration Ready
          </h4>
          <p className="text-sm text-blue-700">
            This challenge is ready to integrate with Strava, Fitbit, or other fitness tracking APIs 
            for automatic progress tracking and verification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;