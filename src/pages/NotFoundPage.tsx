import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

const NotFoundPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-container px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-navy">404 — Page not found</h1>
      <Link
        to={PATHS.home}
        className="mt-8 inline-block rounded bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
