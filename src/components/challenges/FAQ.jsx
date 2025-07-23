import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I join a challenge?",
      answer: "Simply browse our challenge library, click on any challenge that interests you, and hit the 'Join Challenge' button. You'll be added to the participant list and can start tracking your progress immediately."
    },
    {
      question: "How is timing tracked and verified?",
      answer: "We support multiple tracking methods including manual entry with photo proof, automatic sync with popular fitness apps like Strava and Fitbit, or GPS tracking through our mobile app. All submissions are timestamped and verified."
    },
    {
      question: "Can I create my own challenges?",
      answer: "Absolutely! Click the 'Create New Challenge' button, fill in the details including title, description, goal criteria, and difficulty level. Once submitted, other users can join your custom challenge."
    },
    {
      question: "What happens if I don't complete a challenge on time?",
      answer: "No worries! There's no penalty for not completing a challenge. You can continue working towards your goal at your own pace, and you're always welcome to join new challenges or retry existing ones."
    },
    {
      question: "How does the leaderboard ranking work?",
      answer: "Rankings are based on completion time for time-based challenges, or completion date for habit-based challenges. The leaderboard updates in real-time as participants submit their results."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! Our mobile app is available for both iOS and Android. It includes GPS tracking, photo uploads, progress notifications, and seamless sync with popular fitness trackers."
    },
    {
      question: "Can I compete with friends in private groups?",
      answer: "Yes! You can create private challenges and invite specific friends using their usernames or email addresses. Private challenges work the same as public ones but are only visible to invited participants."
    },
    {
      question: "What fitness tracking devices are supported?",
      answer: "We integrate with Strava, Fitbit, Garmin, Apple Health, Google Fit, and many other popular fitness platforms. More integrations are added regularly based on user requests."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="h-8 w-8 text-yellow-500 mr-2" />
          <h2 className="text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Got questions about challenges? Here are the most common questions 
          and answers from our community.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-6 text-left hover:bg-yellow-50 transition-colors duration-200 focus:outline-none focus:bg-yellow-50"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-8 pb-6">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Still have questions? We're here to help!
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
          Contact Support
        </button>
      </div>
    </section>
  );
};

export default FAQ;