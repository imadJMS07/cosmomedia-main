import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FEATURED_POSTS, BLOG_POSTS } from "./constants";
import BlogPost from "./components/BlogPost";
import PageTitle from "@/components/PageTitle";

const BlogDetail = () => {
  const { id } = useParams();
  const allPosts = [...FEATURED_POSTS, ...BLOG_POSTS];
  const post = allPosts.find(post => post.id.toString() === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-400">Blog post not found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#050505] min-h-[calc(100vh-60vh)]">
        <div className="relative h-full">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, #00F5CC 0%, transparent 50%),
                radial-gradient(circle at 0% 0%, #00D5AC 0%, transparent 30%),
                radial-gradient(circle at 100% 100%, #3451B2 0%, transparent 40%)`,
            }}
          />
          <div className="relative z-10 container mx-auto px-4 py-12">
            <BlogPost post={post} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail; 