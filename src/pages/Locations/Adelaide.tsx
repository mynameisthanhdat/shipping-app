import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdelaideLocationContent from '../../components/Locations/AdelaideLocationContent';
import PackageDetailsForm from '../../components/Quote/PackageDetailsForm';
import QuoteStepper from '../../components/Quote/QuoteStepper';
import { PATHS } from '../../routes/paths';
import { QUOTE_STEPS, getQuoteStepPath } from '../../routes/quoteSteps';
import { PackageDetails } from '../../types/quote';

/**
 * City landing for Adelaide: quote step 1 entry + city marketing copy.
 * Submitting hands package details into Get a Quote at step 2.
 */
const Adelaide: React.FC = () => {
  const navigate = useNavigate();

  const handleQuoteSubmit = (packageDetails: PackageDetails) => {
    navigate(getQuoteStepPath(QUOTE_STEPS[1]), { state: { packageDetails } });
  };

  return (
    <article className="mx-auto w-full max-w-container px-6 pb-24 pt-8 text-navy">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link to={PATHS.home} className="transition-colors hover:text-navy">
          Home
        </Link>
        <span> / </span>
        <Link to={PATHS.locations} className="transition-colors hover:text-navy">
          Locations
        </Link>
        <span> / Couriers in Adelaide, SA</span>
      </nav>

      <section aria-label="Get a Quote" className="mt-10">
        <QuoteStepper currentIndex={0} completedCount={0} />
        <div className="mx-auto mt-12 max-w-4xl">
          <PackageDetailsForm
            onSubmit={handleQuoteSubmit}
            submitLabel="Get a Quote"
          />
        </div>
      </section>

      <div className="mt-12 border-t border-black/10 pt-10">
        <div className="mx-auto max-w-4xl">
          <AdelaideLocationContent />
        </div>
      </div>
    </article>
  );
};

export default Adelaide;
