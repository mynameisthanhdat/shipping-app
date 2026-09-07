import React from 'react';
import { Link } from 'react-router-dom';
import { QUOTE_STEPS, getQuoteStepPath } from '../../routes/quoteSteps';

export type QuoteStepperProps = {
  currentIndex: number;
  /** Steps up to this index are unlocked; the rest are not yet reachable. */
  completedCount: number;
};

const QuoteStepper: React.FC<QuoteStepperProps> = ({ currentIndex, completedCount }) => (
  <nav aria-label="Quote progress" className="overflow-x-auto">
    <ol className="flex min-w-max items-start justify-center">
      {QUOTE_STEPS.map((step, index) => {
        const isCurrent = index === currentIndex;
        const isReached = index <= currentIndex;
        const isUnlocked = index <= completedCount;

        const circle = (
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold text-white ${
              isReached ? 'bg-success' : 'bg-step'
            }`}
          >
            {index + 1}
          </span>
        );

        const label = (
          <span
            className={`mt-2.5 block text-center text-sm leading-tight ${
              isReached ? 'font-bold text-navy' : 'text-muted'
            }`}
          >
            {step.label}
          </span>
        );

        return (
          <React.Fragment key={step.id}>
            {index > 0 && (
              <li aria-hidden="true" className="mt-[22px] h-px w-10 shrink-0 bg-black/15" />
            )}

            <li
              className="flex w-[120px] shrink-0 flex-col items-center"
              aria-current={isCurrent ? 'step' : undefined}
            >
              {isUnlocked && !isCurrent ? (
                <Link
                  to={getQuoteStepPath(step)}
                  className="flex flex-col items-center transition-opacity hover:opacity-80"
                >
                  {circle}
                  {label}
                </Link>
              ) : (
                <>
                  {circle}
                  {label}
                </>
              )}
            </li>
          </React.Fragment>
        );
      })}
    </ol>
  </nav>
);

export default QuoteStepper;
