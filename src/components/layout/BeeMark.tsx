import React from 'react';

/**
 * Bee Direct mark: a honeycomb cell carrying the bee's stripes.
 *
 * Drawn inline rather than loaded as an image so it stays crisp at any size
 * and picks up the brand tokens. Swap this for a supplied asset when one
 * exists — `Logo` is the only caller.
 */
const BeeMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 48 48" role="img" aria-hidden="true" className={className}>
    {/* Honeycomb cell */}
    <path
      d="M24 2.5 43.5 13.75v22.5L24 47.5 4.5 36.25v-22.5L24 2.5Z"
      className="fill-brand"
    />
    {/* Bee stripes, clipped to the cell so they follow its edges */}
    <clipPath id="bee-mark-cell">
      <path d="M24 2.5 43.5 13.75v22.5L24 47.5 4.5 36.25v-22.5L24 2.5Z" />
    </clipPath>
    <g clipPath="url(#bee-mark-cell)" className="fill-ink">
      <rect x="0" y="16" width="48" height="6" />
      <rect x="0" y="27" width="48" height="6" />
    </g>
  </svg>
);

export default BeeMark;
