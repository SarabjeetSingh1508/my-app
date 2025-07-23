import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg p-8 md:p-12 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Icon */}
        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <Mail className="h-8 w-8 text-white" />
        </div>

        {/* Content */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with Fitness Tips
        </h2>
        <p className="text-xl text-yellow-100 mb-8">
          Get the latest fitness articles, workout tips, and nutrition advice 
          delivered straight to your inbox. Join thousands of fitness enthusiasts!
        </p>

        {/* Newsletter Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg border-0 focus:ring-4 focus:ring-white focus:ring-opacity-30 outline-none text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>Subscribe</span>
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 rounded-lg py-4 px-6 max-w-md mx-auto">
            <CheckCircle className="h-6 w-6 text-white" />
            <span className="text-white font-semibold">Thanks for subscribing!</span>
          </div>
        )}

        {/* Benefits */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-yellow-100">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
            <span className="text-sm">Weekly Tips</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
            <span className="text-sm">No Spam</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
            <span className="text-sm">Unsubscribe Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;