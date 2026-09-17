import React from 'react';
import { Link } from 'react-router-dom';

const TrackingHelpLinks: React.FC = () => (
  <ul className="list-disc space-y-1.5 pl-6 text-sm leading-relaxed text-ink">
    <li>
      <Link
        to={'#'}
        className="font-semibold text-brand-deep transition-colors hover:text-brand-deep-hover"
      >
        How to connect your store for automatic order syncing
      </Link>
    </li>
  </ul>
);

export default TrackingHelpLinks;
