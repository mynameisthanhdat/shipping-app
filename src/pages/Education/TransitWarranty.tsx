import React from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../../components/CtaBanner';
import CategoryGrid from '../../components/Education/CategoryGrid';
import WarrantySection from '../../components/Education/WarrantySection';
import { TRANSIT_WARRANTY_SECTIONS } from '../../mocks/education/transitWarranty';
import { PATHS } from '../../routes/paths';

const TransitWarranty: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto mb-4 w-full max-w-container px-6 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to={PATHS.home} className="transition-colors hover:text-navy">
            Home
          </Link>
          <span>
            {' '}
            /{' '}
            <Link to={PATHS.education} className="transition-colors hover:text-navy">
              Education Centre
            </Link>
            {' '}
            / Transit Warranty Options
          </span>
        </nav>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-navy">Transit Warranty Options</h1>
          <p className="mt-3.5 text-lg font-bold text-navy">
            To start looking for answers, choose your category!
          </p>
        </div>

        <div className="mt-10">
          <CategoryGrid />
        </div>

        <div className="mt-12 space-y-10">
          {TRANSIT_WARRANTY_SECTIONS.map((section) => (
            <WarrantySection key={section.id} section={section} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-auto w-full max-w-container px-6 py-8">
        <CtaBanner />
      </div>
    </div>
  );
};

export default TransitWarranty;
