import React from 'react';
import {
  TRACKING_STAGES,
  TRACKING_STAGE_LABELS,
  TrackingStage,
  stageIndex,
} from '../../types/tracking';

/**
 * Milestone bar for the five stages a consignment passes through.
 *
 * Reached milestones fill with the brand yellow; the connecting line fills only
 * as far as the parcel has actually travelled, so the shape alone answers
 * "where is it".
 */
const TrackingProgress: React.FC<{ stage: TrackingStage; onHold?: boolean }> = ({
  stage,
  onHold = false,
}) => {
  const current = stageIndex(stage);

  return (
    <ol className="flex items-start">
      {TRACKING_STAGES.map((item, index) => {
        const reached = index <= current;
        const isCurrent = index === current;

        return (
          <React.Fragment key={item}>
            {index > 0 && (
              <li
                aria-hidden="true"
                className={`mt-[15px] h-1 flex-1 rounded-full ${
                  index <= current ? 'bg-brand' : 'bg-muted-surface'
                }`}
              />
            )}

            <li
              className="flex w-24 shrink-0 flex-col items-center sm:w-28"
              aria-current={isCurrent ? 'step' : undefined}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  reached
                    ? onHold && isCurrent
                      ? 'bg-danger text-white'
                      : 'bg-brand text-ink'
                    : 'bg-muted-surface text-muted'
                }`}
              >
                {reached && !isCurrent ? '✓' : index + 1}
              </span>
              <span
                className={`mt-2 block text-center text-sm leading-tight ${
                  reached ? 'font-bold text-ink' : 'text-muted'
                }`}
              >
                {TRACKING_STAGE_LABELS[item]}
              </span>
            </li>
          </React.Fragment>
        );
      })}
    </ol>
  );
};

export default TrackingProgress;
