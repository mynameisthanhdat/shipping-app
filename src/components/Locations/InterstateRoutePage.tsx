import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InterstateRouteContent from './InterstateRouteContent';
import PackageDetailsForm from '../Quote/PackageDetailsForm';
import QuoteStepper from '../Quote/QuoteStepper';
import { PATHS } from '../../routes/paths';
import { QUOTE_STEPS, getQuoteStepPath } from '../../routes/quoteSteps';
import { InterstateRouteData } from '../../types/locations';
import { PackageDetails } from '../../types/quote';

type InterstateRoutePageProps = {
  /** Origin city page path (e.g. PATHS.locationsMelbourne). */
  fromPath: string;
  data: InterstateRouteData;
};

const InterstateRoutePage: React.FC<InterstateRoutePageProps> = ({ fromPath, data }) => {
  const navigate = useNavigate();
  const corridor = `${data.from} to ${data.to}`;

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
        <span> / </span>
        <Link to={fromPath} className="transition-colors hover:text-navy">
          {data.from}
        </Link>
        <span>{` / Courier Deliveries from ${corridor}`}</span>
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
          <InterstateRouteContent data={data} />
        </div>
      </div>
    </article>
  );
};

export default InterstateRoutePage;
