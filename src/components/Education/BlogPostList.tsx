import React from 'react';
import { BlogPost } from '../../mocks/education/blog';
import BlogPostCard from './BlogPostCard';

type BlogPostListProps = {
  posts: BlogPost[];
};

const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <p className="text-center text-sm leading-relaxed text-muted">
        No posts in this topic yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostList;
