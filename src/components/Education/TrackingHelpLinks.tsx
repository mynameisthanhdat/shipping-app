import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const TrackingHelpLinks: React.FC = () => (
  <ul className="list-disc space-y-1.5 pl-6 text-sm leading-relaxed text-navy">
    <li>
      <Link
        to={'#'}
        className="font-semibold text-brand transition-colors hover:text-brand-hover"
      >
        How to connect your store for automatic order syncing
      </Link>
    </li>
  </ul>
);

export default TrackingHelpLinks;
