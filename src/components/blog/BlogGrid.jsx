import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const BlogGrid = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 text-6xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
        <p className="text-gray-500">Try adjusting your search or category filter.</p>
      </div>
    );
  }

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Meta Info */}
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <div className="flex items-center mr-4">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {post.description}
              </p>

              {/* Read More Button */}
              <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-medium group-hover:gap-2 transition-all duration-200">
                <span>Read More</span>
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;