import React from 'react';
import { Link } from 'react-router-dom';
import { QuoteStep, QUOTE_STEPS, getQuoteStepPath } from '../../routes/quoteSteps';

/**
 * Stand-in for steps whose screens are not designed yet. Swap the registry entry
 * in routes/index.tsx for the real component as each one lands.
 */
const UpcomingStep: React.FC<{ step: QuoteStep }> = ({ step }) => {
  const index = QUOTE_STEPS.findIndex((item) => item.id === step.id);
  const previous = QUOTE_STEPS[Math.max(index - 1, 0)];

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-navy">{step.label}</h2>
      <p className="mt-3 text-sm text-muted">This step is not built yet.</p>

      <Link
        to={getQuoteStepPath(previous)}
        className="mt-8 inline-block rounded-md border border-black/10 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy/30"
      >
        Back to {previous.label}
      </Link>
    </div>
  );
};

export default UpcomingStep;
