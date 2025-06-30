import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiCalendar, FiUser, FiTag } from "react-icons/fi";

const BlogPost = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="aspect-[21/9]  mb-6"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[450px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
            <span className="px-3 py-1 rounded-full bg-[#00F5CC]/10 text-[#00F5CC] font-medium">
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
            <div className="flex items-center gap-1">
              <FiClock className="text-[#00F5CC]" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-1">
              <FiCalendar className="text-[#00F5CC]" />
              {post.date}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full border-2 border-[#00F5CC]/20"
            />
            <div>
              <p className="font-medium text-white">{post.author.name}</p>
              <p className="text-sm text-gray-400">{post.author.role}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="prose prose-invert prose-cyan max-w-none"
      >
        <div className="mb-8 text-lg text-gray-300 leading-relaxed">
          {post.excerpt}
        </div>
        
        {post.content && (
          <div 
            className="mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.03] text-gray-400 text-sm"
            >
              <FiTag className="text-[#00F5CC]" />
              {tag}
            </div>
          ))}
        </div>
      </motion.div>
    </article>
  );
};

export default BlogPost; 