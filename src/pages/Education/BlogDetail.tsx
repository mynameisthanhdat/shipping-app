import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import CtaBanner from '../../components/CtaBanner';
import BlogArticleBody from '../../components/Education/BlogArticleBody';
import { getBlogPostBySlug } from '../../mocks/education/blog';
import { PATHS } from '../../routes/paths';

const BlogDetail: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to={PATHS.educationBlog} replace />;
  }

  const shortTitle = post.title.split(':')[0].trim();
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto mb-4 w-full max-w-container px-6 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to={PATHS.home} className="transition-colors hover:text-navy">
            Home
          </Link>
          <span> / </span>
          <Link to={PATHS.educationBlog} className="transition-colors hover:text-navy">
            Blog
          </Link>
          <span> / {shortTitle}</span>
        </nav>

        <article className="mt-6">
          <header className="text-center">
            <h1 className="text-3xl font-bold text-navy">{post.title}</h1>
            <p className="mt-3.5 text-xs font-bold uppercase tracking-wide text-brand">
              {post.categoryLabel}
              <span className="mx-2" aria-hidden="true">
                •
              </span>
              {post.date}
              <span className="mx-2" aria-hidden="true">
                •
              </span>
              {post.readTime}
            </p>
          </header>

          <div className="mt-10">
            <BlogArticleBody
              blocks={post.content}
              closingTitle={post.closingTitle}
              closingBody={post.closingBody}
            />
          </div>
        </article>
      </div>

      <div className="mx-auto mt-auto w-full max-w-container px-6 py-8">
        <CtaBanner
          title="Ready to automate your store's shipping? Connect Parcelio and start selling smarter today!"
          primaryAction={{ label: 'Connect My Store', to: PATHS.ecommerce }}
          secondaryAction={{ label: 'See Plans & Pricing', to: PATHS.pricing }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
