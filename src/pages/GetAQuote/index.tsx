import React from 'react';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { QuoteProvider, useQuote } from '../../components/Quote/QuoteContext';
import QuoteStepper from '../../components/Quote/QuoteStepper';
import {
  QUOTE_STEPS,
  getCompletedStepCount,
  getQuoteStepIndex,
  getQuoteStepPath,
} from '../../routes/quoteSteps';
import { PATHS } from '../../routes/paths';
import { PackageDetails, createQuoteDraft } from '../../types/quote';

/** Data handed over by another page, e.g. the home page quote form. */
type QuoteLocationState = { packageDetails?: PackageDetails } | null;

const QuoteFlow: React.FC = () => {
  const { pathname } = useLocation();
  const { draft } = useQuote();

  const currentIndex = getQuoteStepIndex(pathname);
  const completedCount = getCompletedStepCount(draft);

  // Deep links into unfinished steps fall back to the first one still open.
  if (currentIndex > completedCount) {
    return <Navigate to={getQuoteStepPath(QUOTE_STEPS[completedCount])} replace />;
  }

  return (
    <div className="mx-auto w-full max-w-container px-6 pt-8 pb-16">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link to={PATHS.home} className="transition-colors hover:text-navy">
          Home
        </Link>
        <span> / Get a Quote</span>
      </nav>

      <h1 className="mt-6 text-center text-3xl font-bold text-navy">
        Get a Quote
      </h1>

      <div className="mt-8">
        <QuoteStepper currentIndex={currentIndex} completedCount={completedCount} />
      </div>

      <div className="mt-14">
        <Outlet />
      </div>
    </div>
  );
};

/**
 * Seeds the wizard from `location.state` so a form filled in elsewhere carries
 * its data across the navigation, then hands control to the step routes.
 */
const GetAQuote: React.FC = () => {
  const { state } = useLocation();
  const handedOver = state as QuoteLocationState;

  return (
    <QuoteProvider initialDraft={createQuoteDraft(handedOver?.packageDetails)}>
      <QuoteFlow />
    </QuoteProvider>
  );
};

export default GetAQuote;
