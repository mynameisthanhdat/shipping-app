import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../../components/CtaBanner';
import BlogPagination from '../../components/Education/BlogPagination';
import BlogPostList from '../../components/Education/BlogPostList';
import BlogTopicFilter from '../../components/Education/BlogTopicFilter';
import CategoryGrid from '../../components/Education/CategoryGrid';
import { BLOG_POSTS, BLOG_TOPICS } from '../../mocks/education/blog';
import { PATHS } from '../../routes/paths';

const TOTAL_PAGES = 5;

const Blog: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState(BLOG_TOPICS[0].id);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    if (activeTopicId === 'all') return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.categoryId === activeTopicId);
  }, [activeTopicId]);

  const handleTopicChange = (topicId: string) => {
    setActiveTopicId(topicId);
    setCurrentPage(1);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto mb-4 w-full max-w-container px-6 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to={PATHS.home} className="transition-colors hover:text-navy">
            Home
          </Link>
          <span> / </span>
          <Link to={PATHS.education} className="transition-colors hover:text-navy">
            Education Centre
          </Link>
          <span> / Blog</span>
        </nav>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-navy">The Parcelio Blog</h1>
          <p className="mt-3.5 text-lg font-bold text-navy">
            Shipping tips, ecommerce know-how and courier news for Australian sellers
          </p>
        </div>

        <div className="mt-10">
          <CategoryGrid />
        </div>

        <section className="mt-12">
          <h2 className="text-center text-xl font-bold text-navy md:text-2xl">
            Browse by Topic
          </h2>
          <div className="mt-6">
            <BlogTopicFilter
              topics={BLOG_TOPICS}
              activeId={activeTopicId}
              onChange={handleTopicChange}
            />
          </div>
        </section>

        <section className="mt-12">
          <BlogPostList posts={filteredPosts} />
          <div className="mt-12">
            <BlogPagination
              currentPage={currentPage}
              totalPages={TOTAL_PAGES}
              onChange={setCurrentPage}
            />
          </div>
        </section>
      </div>

      <div className="mx-auto mt-auto w-full max-w-container px-6 py-8">
        <CtaBanner
          title="Ready to automate your store's shipping? Connect Parcelio and start selling smarter today!"
          primaryAction={{ label: 'Connect My Store', to: "#" }}
          secondaryAction={{ label: 'See Plans & Pricing', to: "#" }}
        />
      </div>
    </div>
  );
};

export default Blog;
