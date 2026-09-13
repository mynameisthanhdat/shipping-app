import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LocationLinkList from '../../components/Locations/LocationLinkList';
import PackageDetailsForm from '../../components/Quote/PackageDetailsForm';
import QuoteStepper from '../../components/Quote/QuoteStepper';
import { LOCATION_CITIES } from '../../constants/locations';
import { PATHS } from '../../routes/paths';
import { QUOTE_STEPS, getQuoteStepPath } from '../../routes/quoteSteps';
import { PackageDetails } from '../../types/quote';

const Locations: React.FC = () => {
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
        <span> / Locations</span>
      </nav>

      <h1 className="mt-6 text-center text-3xl font-bold text-navy">
        Courier Locations Australia
      </h1>

      <div className="mx-auto mt-10 max-w-4xl text-sm leading-relaxed">
        <p>
          Parcelio offers our premier{' '}
          <Link
            to={PATHS.couriers}
            className="underline underline-offset-2 transition-colors hover:text-brand"
          >
            courier services
          </Link>{' '}
          right across Australia, to provide you with the ultimate in convenience.
          Our services are offered in various locations, including:
        </p>

        <LocationLinkList items={LOCATION_CITIES} />

        <p>
          And beyond! Find out more about our locations today, or get a quick quote
          online to find out how affordable we make freight shipping.
        </p>
      </div>

      <section aria-label="Get a Quote" className="mt-12 border-t border-black/10 pt-10">
        <QuoteStepper currentIndex={0} completedCount={0} />
        <div className="mx-auto mt-12 max-w-4xl">
          <PackageDetailsForm
            onSubmit={handleQuoteSubmit}
            submitLabel="Get a Quote"
          />
        </div>
      </section>
    </article>
  );
};

export default Locations;
