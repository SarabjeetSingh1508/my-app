import React, { useState } from 'react';
import BlogGrid from '../components/blog/BlogGrid';
import NewsletterSignup from '../components/blog/NewsletterSignup';
import BlogCategories from '../components/blog/BlogCategories';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Beginner Tips', 'Training', 'Nutrition', 'Mental Health', 'Recovery', 'Equipment'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Fitness Blog
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Expert advice, tips, and inspiration to help you achieve your fitness goals. 
            From workout routines to nutrition guides, we've got you covered.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-lg border-0 focus:ring-4 focus:ring-white focus:ring-opacity-30 outline-none text-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <BlogCategories 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {/* Blog Grid */}
        <BlogGrid posts={filteredPosts} />

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </div>
    </div>
  );
};

export default Blog;