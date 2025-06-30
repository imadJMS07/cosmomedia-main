import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../constants";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const BlogCard = ({ post }) => {
  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/blogs/${post.id}`} className="block h-full">
        <div className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#00F5CC]/20 transition-all duration-300 h-full">
          <div className="aspect-[16/10] overflow-hidden">
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#00F5CC]/10 text-[#00F5CC]">
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </span>
              <span className="text-gray-400 text-xs">{post.readTime}</span>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#00F5CC] transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full border border-[#00F5CC]/20"
                />
                <div>
                  <p className="text-xs font-medium text-white">{post.author.name}</p>
                  <p className="text-xs text-gray-400">{post.author.role}</p>
                </div>
              </div>
              <motion.div
                className="text-[#00F5CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
                whileHover={{ x: 3 }}
              >
                <span className="text-xs">Read More</span>
                <FiArrowRight className="text-sm" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const CategoryButton = ({ category, isActive, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm transition-all duration-300 ${
      isActive
        ? 'bg-[#00F5CC] text-black font-medium'
        : 'bg-white/[0.03] text-gray-400 hover:bg-white/[0.05]'
    }`}
  >
    {category.icon && <category.icon className="text-base" />}
    <span>{category.label}</span>
  </motion.button>
);

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(BLOG_POSTS);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const filtered = categoryId === "all" 
      ? BLOG_POSTS 
      : BLOG_POSTS.filter(post => post.category === categoryId);
    setFilteredPosts(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl min-h-[calc(100vh-60vh-6rem)]">
      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-2 justify-center mb-10"
      >
        {BLOG_CATEGORIES.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            onClick={() => handleCategoryChange(category.id)}
          />
        ))}
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <p className="text-xl text-gray-400 mb-2">No posts found</p>
          <p className="text-sm text-gray-500">Try selecting a different category</p>
        </motion.div>
      )}
    </div>
  );
}
