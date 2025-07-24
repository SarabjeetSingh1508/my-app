import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">FitChallenge</span>
            </div>
            <p className="text-gray-300 mb-4">
              Challenge your friends, track your progress, and achieve your fitness goals together. 
              Join the community of fitness enthusiasts pushing their limits every day.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="/challenges" className="text-gray-300 hover:text-yellow-400 transition-colors">Challenges</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: sahab@fitchallenge.com</li>
              <li>Phone: +91 1234567890</li>
              <li>Stay fit!</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 FitChallenge. All rights reserved. Built with passion for fitness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;