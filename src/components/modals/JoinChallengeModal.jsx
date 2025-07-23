import React, { useState } from 'react';
import { X, Trophy, Users, Target, AlertCircle } from 'lucide-react';

const JoinChallengeModal = ({ challenge, onClose }) => {
  const [agreed, setAgreed] = useState(false);
  const [motivation, setMotivation] = useState('');

  const handleJoin = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to the challenge terms to continue.');
      return;
    }
    
    // Handle joining the challenge
    console.log('Joining challenge:', challenge.id, { motivation });
    alert(`You've successfully joined "${challenge.title}"! Good luck with your fitness journey.`);
    onClose();
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Trophy className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Join Challenge</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Challenge Preview */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-start space-x-4">
            <img
              src={challenge.image}
              alt={challenge.title}
              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-yellow-600 font-medium text-sm">{challenge.category}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                  {challenge.difficulty}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {challenge.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {challenge.description}
              </p>
            </div>
          </div>

          {/* Challenge Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Users className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
              <div className="text-lg font-bold text-gray-800">{challenge.participants}</div>
              <div className="text-xs text-gray-600">Participants</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Target className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
              <div className="text-lg font-bold text-gray-800">{challenge.goal}</div>
              <div className="text-xs text-gray-600">Goal</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Trophy className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
              <div className="text-lg font-bold text-gray-800">{challenge.leaderboard[0]?.time || 'N/A'}</div>
              <div className="text-xs text-gray-600">Best Time</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleJoin} className="p-6 space-y-6">
          {/* Motivation */}
          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
              What motivates you to take on this challenge? (Optional)
            </label>
            <textarea
              id="motivation"
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none resize-none"
              placeholder="Share your motivation with the community..."
            ></textarea>
          </div>

          {/* Important Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Before You Start</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Make sure you're physically able to complete this challenge</li>
                  <li>• Consult with a healthcare provider if you have any concerns</li>
                  <li>• Listen to your body and stop if you feel any pain or discomfort</li>
                  <li>• You can submit your results anytime during the challenge period</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="agreed"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-5 h-5 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400 mt-0.5"
            />
            <label htmlFor="agreed" className="text-sm text-gray-700">
              I agree to the challenge terms and understand that I participate at my own risk. 
              I confirm that I am physically capable of completing this challenge safely.
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-gray-300 text-gray-600 hover:bg-gray-50 py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!agreed}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                agreed
                  ? 'bg-yellow-400 hover:bg-yellow-500 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Join Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinChallengeModal;