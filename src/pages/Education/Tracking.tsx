import React from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../../components/CtaBanner';
import CategoryGrid from '../../components/Education/CategoryGrid';
import TrackingForm from '../../components/Education/TrackingForm';
import TrackingHelpLinks from '../../components/Education/TrackingHelpLinks';
import { PATHS } from '../../routes/paths';
import { TrackingLookup } from '../../types/tracking';

const Tracking: React.FC = () => {

  const handleSubmit = (trackingLookup: TrackingLookup) => alert('Tracking lookup submitted');

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto mb-4 w-full max-w-container px-6 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to={PATHS.home} className="transition-colors hover:text-navy">
            Home
          </Link>
          <span> / </span>
          <Link to={PATHS.education} className="transition-colors hover:text-navy">
            Education Centre
          </Link>
          <span> / Tracking</span>
        </nav>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-navy">Tracking your consignments</h1>
          <p className="mt-3.5 text-lg font-bold text-navy">
            To start looking for answers, choose your category!
          </p>
        </div>

        <div className="mt-10">
          <CategoryGrid />
        </div>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-bold text-navy">
            How to Track your consignment
          </h2>
          <p className="mt-4 text-center text-sm leading-relaxed text-muted">
            To track your consignments, simply enter your consignment number below and
            press &apos;Track&apos;.
          </p>
          <div className="mt-8">
            <TrackingForm onSubmit={handleSubmit} />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            If your order status isn&apos;t here yet, don&apos;t worry, we&apos;re working
            to get your order into the shipping process.
          </p>
          <div className="mt-10">
            <TrackingHelpLinks />
          </div>
        </section>
      </div>

      <div className="mx-auto mt-auto w-full max-w-container px-6 py-8">
        <CtaBanner />
      </div>
    </div>
  );
};

export default Tracking;
