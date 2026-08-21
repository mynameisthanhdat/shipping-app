import React from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../../components/CtaBanner';
import CartonMeasurementCard from '../../components/Education/CartonMeasurementCard';
import CategoryGrid from '../../components/Education/CategoryGrid';
import PackagingChecklist from '../../components/Education/PackagingChecklist';
import {
  MEASURING_CARTON_DESCRIPTION,
  MEASURING_CARTON_TITLE,
  PACKAGING_REQUIREMENTS_INTRO,
  PACKAGING_REQUIREMENTS_ITEMS,
  PACKAGING_REQUIREMENTS_NOTE,
  PACKAGING_REQUIREMENTS_TITLE,
} from '../../mocks/education/packagingRequirements';
import { PATHS } from '../../routes/paths';

const PackagingRequirements: React.FC = () => {
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
            / Packaging Requirements
          </span>
        </nav>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-navy">
            Packaging Requirements for Courier, Parcel &amp; Freight
          </h1>
          <p className="mt-3.5 text-lg font-bold text-navy">
            To start looking for answers, choose your category!
          </p>
        </div>

        <div className="mt-10">
          <CategoryGrid />
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">{PACKAGING_REQUIREMENTS_TITLE}</h2>
          <p className="mt-3 text-sm leading-normal text-muted">{PACKAGING_REQUIREMENTS_INTRO}</p>

          <div className="mt-6">
            <PackagingChecklist items={PACKAGING_REQUIREMENTS_ITEMS} />
          </div>

          <p className="mt-8 text-sm leading-normal text-muted">{PACKAGING_REQUIREMENTS_NOTE}</p>
        </section>

        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold text-navy">{MEASURING_CARTON_TITLE}</h2>
          <p className="mt-3 text-sm leading-normal text-muted">{MEASURING_CARTON_DESCRIPTION}</p>
          <div className="mt-4">
            <CartonMeasurementCard />
          </div>
        </section>
      </div>

      <div className="mx-auto mt-auto w-full max-w-container px-6 py-8">
        <CtaBanner />
      </div>
    </div>
  );
};

export default PackagingRequirements;
