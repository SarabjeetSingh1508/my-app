import React from 'react';
import { Filter } from 'lucide-react';

const BlogCategories = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <Filter className="h-5 w-5 text-yellow-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Categories</h2>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-yellow-400 text-white'
                : 'bg-white text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;