import React from 'react';

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const BlogPagination: React.FC<BlogPaginationProps> = ({
  currentPage,
  totalPages,
  onChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Blog pagination"
      className="flex flex-wrap items-center justify-center gap-4 text-sm text-navy"
    >
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onChange(currentPage - 1)}
        className="font-bold transition-colors hover:text-brand disabled:cursor-not-allowed disabled:text-muted-placeholder"
      >
        ‹ Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => onChange(page)}
          className={`min-w-6 font-bold transition-colors hover:text-brand ${
            page === currentPage ? 'text-navy' : 'text-muted'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onChange(currentPage + 1)}
        className="font-bold transition-colors hover:text-brand disabled:cursor-not-allowed disabled:text-muted-placeholder"
      >
        Next ›
      </button>
    </nav>
  );
};

export default BlogPagination;
