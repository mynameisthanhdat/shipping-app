import React, { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Resets the scroll position when the route changes.
 *
 * React Router keeps the window where it was on navigation, so following a
 * link from halfway down a long page lands you halfway down the next one.
 *
 * Two deliberate exceptions:
 *  - A URL with a `#fragment` is left alone, so anchor deep-links (the header's
 *    "Open account" link into the signup form, for one) keep working. Scrolling
 *    to the top here would fight ScrollToHash.
 *  - Back and forward are left alone, because the browser restores the previous
 *    scroll position itself and overriding that makes "back" feel broken.
 *
 * Named apart from `Home/ScrollToTop`, which is the floating back-to-top button.
 */
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) return;
    if (navigationType === 'POP') return;

    // Jump rather than animate: a smooth scroll on route change reads as lag.
    window.scrollTo(0, 0);
  }, [pathname, hash, navigationType]);

  return null;
};

export default ScrollToTopOnNavigate;
