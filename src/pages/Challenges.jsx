import React, { useState } from 'react';
import ChallengeCarousel from '../components/challenges/ChallengeCarousel';
import ChallengeDetails from '../components/challenges/ChallengeDetails';
import Leaderboard from '../components/challenges/Leaderboard';
import FAQ from '../components/challenges/FAQ';
import CreateChallengeModal from '../components/modals/CreateChallengeModal';
import JoinChallengeModal from '../components/modals/JoinChallengeModal';
import { challenges } from '../data/mockData';

const Challenges = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  const handleChallengeSelect = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleJoinChallenge = (challenge) => {
    setSelectedChallenge(challenge);
    setShowJoinModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Fitness Challenges
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Take on exciting fitness challenges, compete with friends, and track your progress. 
            Choose from hundreds of challenges or create your own!
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors duration-200"
          >
            Create New Challenge
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Challenge Carousel */}
        <ChallengeCarousel 
          challenges={challenges}
          onChallengeSelect={handleChallengeSelect}
          onChallengeJoin={handleJoinChallenge}
        />

        {/* Challenge Details and Leaderboard */}
        {selectedChallenge && (
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ChallengeDetails 
                challenge={selectedChallenge}
                onJoinChallenge={() => handleJoinChallenge(selectedChallenge)}
              />
            </div>
            <div>
              <Leaderboard challenge={selectedChallenge} />
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <FAQ />
      </div>

      {/* Modals */}
      {showCreateModal && (
        <CreateChallengeModal onClose={() => setShowCreateModal(false)} />
      )}
      
      {showJoinModal && selectedChallenge && (
        <JoinChallengeModal 
          challenge={selectedChallenge}
          onClose={() => setShowJoinModal(false)} 
        />
      )}
    </div>
  );
};

export default Challenges;