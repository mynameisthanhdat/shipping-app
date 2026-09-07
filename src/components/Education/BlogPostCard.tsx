import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../mocks/education/blog';
import { PATHS } from '../../routes/paths';

type BlogPostCardProps = {
  post: BlogPost;
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => (
  <article>
    <p className="text-xs font-bold uppercase tracking-wide text-brand">
      {post.categoryLabel}
      <span className="mx-2" aria-hidden="true">
        •
      </span>
      {post.date}
    </p>
    <h3 className="mt-2 text-xl font-bold text-navy md:text-2xl">{post.title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
    <Link
      to={`${PATHS.educationBlog}/${post.slug}`}
      className="mt-4 inline-block text-sm font-bold text-brand transition-colors hover:text-brand-hover"
    >
      Read More
    </Link>
  </article>
);

export default BlogPostCard;
