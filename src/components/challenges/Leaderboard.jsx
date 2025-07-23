import React from 'react';
import { Trophy, Medal, Award, Clock } from 'lucide-react';

const Leaderboard = ({ challenge }) => {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Award className="h-6 w-6 text-orange-600" />;
      default: return <div className="w-6 h-6 flex items-center justify-center text-gray-500 font-bold">#{rank}</div>;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200';
      case 2: return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200';
      case 3: return 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200';
      default: return 'bg-white border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Leaderboard</h3>
        <div className="flex items-center text-yellow-600">
          <Trophy className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">Top Performers</span>
        </div>
      </div>

      <div className="space-y-3">
        {challenge.leaderboard.map((participant, index) => {
          const rank = index + 1;
          return (
            <div
              key={index}
              className={`flex items-center p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${getRankColor(rank)}`}
            >
              {/* Rank */}
              <div className="flex-shrink-0 mr-4">
                {getRankIcon(rank)}
              </div>

              {/* Avatar and Name */}
              <div className="flex items-center flex-1 mr-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  {participant.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    {participant.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    Rank #{rank}
                  </div>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-gray-400 mr-2" />
                <span className="font-bold text-gray-800">
                  {participant.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Join Leaderboard CTA */}
      <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
        <div className="text-center">
          <h4 className="font-semibold text-gray-800 mb-2">
            Join the Competition!
          </h4>
          <p className="text-sm text-gray-600 mb-3">
            Complete the challenge to see your name on this leaderboard
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
            Start Challenge
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-xl font-bold text-gray-800">
            {challenge.leaderboard[0]?.time || 'N/A'}
          </div>
          <div className="text-sm text-gray-600">Best Time</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-xl font-bold text-gray-800">
            {challenge.participants}
          </div>
          <div className="text-sm text-gray-600">Total Attempts</div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;