import React, { useEffect, useState } from 'react';

const SCROLL_THRESHOLD_PX = 400;

const ArrowToTopIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <path d="M11.25 20.25V8.56l-3.72 3.72a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72v11.69a.75.75 0 0 1-1.5 0Z" />
    <path d="M5.25 4.5h13.5a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5Z" />
  </svg>
);

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-card transition-colors hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:bottom-8 md:right-8"
    >
      <ArrowToTopIcon />
    </button>
  );
};

export default ScrollToTop;
