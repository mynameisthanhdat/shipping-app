import React from 'react';
import { Link } from 'react-router-dom';
import { TRACKED_SHIPMENTS } from '../../mocks/tracking';
import { PATHS } from '../../routes/paths';
import { TRACKING_STAGE_LABELS, TrackedShipment } from '../../types/tracking';

/** An exception outranks the stage label — that is the state being demonstrated. */
const stateLabel = (shipment: TrackedShipment) =>
  shipment.exception ? 'On hold' : TRACKING_STAGE_LABELS[shipment.stage];

/**
 * Tracking runs on hardcoded consignments, so there is no way to guess a valid
 * number. This lists them, and each one links straight through.
 *
 * Delete this component once a real tracking API is wired up — it is the only
 * place that leaks the fixture data into the UI.
 */
const TrackingDemoHint: React.FC<{ className?: string }> = ({ className = '' }) => (
  <aside
    className={`rounded-lg border border-brand-deep/25 bg-brand-soft p-5 ${className}`}
  >
    <h3 className="text-sm font-bold text-ink">Demo consignment numbers</h3>
    <p className="mt-1 text-sm text-muted">
      Tracking is not connected to a carrier yet, so only these sample numbers return
      results. Pick one to see it.
    </p>

    <ul className="mt-4 flex flex-wrap gap-2.5">
      {TRACKED_SHIPMENTS.map((shipment) => (
        <li key={shipment.consignmentNumber}>
          <Link
            to={`${PATHS.educationTracking}/${shipment.consignmentNumber}`}
            className="inline-flex items-center gap-2 rounded-full border border-brand-deep/25 bg-white px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-brand-deep hover:bg-brand/10"
          >
            <span className="font-bold">{shipment.consignmentNumber}</span>
            <span className="text-muted">{stateLabel(shipment)}</span>
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);

export default TrackingDemoHint;
