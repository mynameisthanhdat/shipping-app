import React, { useId } from 'react';

/** Body outline, reused by both the fill and the stripe clip. */
const BODY =
  'M24.5 45.2C27 35.6 33 27.2 42 23.2c9-4 17.6-1.2 18.6 6.4 1 8-7.6 15.4-18 16.4-7.6.6-14.6.4-18.1-.8Z';

const WING =
  'M20.5 21.4C25 7.4 37 0 48 1.1c8.5.8 12 7.4 10 19.9-10-6-26-6-37.5.4Z';

export type BeeMarkProps = {
  className?: string;
};

/**
 * The BEE DIRECT mark: speed lines, a striped body, a wing and the head.
 *
 * Hand-traced from the supplied logo artwork rather than loaded as a bitmap, so
 * it stays sharp at every size and picks up the brand tokens. If the designer's
 * original vector turns up, replacing the paths here is the only change needed
 * — `Logo` is the sole caller.
 */
const BeeMark: React.FC<BeeMarkProps> = ({ className = '' }) => {
  // Ids must be unique per instance: the header and footer both render a mark,
  // and duplicate gradient ids would make one of them reference the other's.
  const uid = useId().replace(/:/g, '');
  const wingGradient = `bee-wing-${uid}`;
  const lineGradient = `bee-line-${uid}`;
  const bodyClip = `bee-body-${uid}`;

  return (
    <svg
      viewBox="0 0 78 47"
      role="img"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id={wingGradient} x1="20" y1="2" x2="56" y2="22">
          <stop offset="0%" stopColor="#ffc93c" />
          <stop offset="100%" stopColor="#f5861e" />
        </linearGradient>
        <linearGradient id={lineGradient} x1="0" y1="0" x2="36" y2="0">
          <stop offset="0%" stopColor="#f5a623" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f5a623" />
        </linearGradient>
        <clipPath id={bodyClip}>
          <path d={BODY} />
        </clipPath>
      </defs>

      {/* Motion trails, longest in the middle, as in the artwork. */}
      <g fill={`url(#${lineGradient})`}>
        <rect x="12" y="20.6" width="25" height="3.6" rx="1.8" />
        <rect x="1" y="27" width="31" height="3.6" rx="1.8" />
        <rect x="11.5" y="33.4" width="17" height="3.6" rx="1.8" />
      </g>

      <path d={WING} fill={`url(#${wingGradient})`} />

      <path d={BODY} fill="#f5a623" />
      {/* Stripes run across the body, so they are drawn upright then rotated
          onto the body axis and clipped to its silhouette. */}
      <g clipPath={`url(#${bodyClip})`}>
        <g transform="rotate(-26 42 34)" fill="#1c1c22">
          <rect x="24" y="4" width="5.4" height="58" />
          <rect x="35.5" y="4" width="6.2" height="58" />
          <rect x="47.5" y="4" width="6" height="58" />
        </g>
      </g>

      {/* Head, with a highlight where the eye catches the light. */}
      <ellipse cx="66" cy="21.5" rx="8.4" ry="11" transform="rotate(-18 66 21.5)" fill="#1c1c22" />
      <ellipse cx="64.6" cy="22.4" rx="2.6" ry="4.4" transform="rotate(-22 64.6 22.4)" fill="#ffffff" fillOpacity="0.92" />

      {/* Antennae */}
      <g stroke="#1c1c22" strokeWidth="2.4" strokeLinecap="round">
        <path d="M63.6 10.4C63.4 5.6 65.6 2.4 69 1.6" />
        <path d="M69.4 11.2C71 7.2 73.4 5.2 76 5" />
      </g>
      <circle cx="69.6" cy="1.5" r="2" fill="#1c1c22" />
      <circle cx="76.2" cy="5" r="1.8" fill="#1c1c22" />
    </svg>
  );
};

export default BeeMark;
