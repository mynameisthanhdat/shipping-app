import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router does not scroll to `#fragment` targets on navigation, so links
 * that deep-link into a section need this. Mounted once in the layout, it runs
 * after the routed page has rendered, so the target element already exists.
 */
const ScrollToHash: React.FC = () => {
  // `key` changes even when the same URL is pushed again, so repeat clicks on
  // the same deep link scroll again instead of doing nothing.
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });

    // Move focus too, so keyboard and screen-reader users land in the section
    // rather than continuing from wherever they were.
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }, [hash, key]);

  return null;
};

export default ScrollToHash;
