import React from 'react';
import { TRACKING_STAGE_LABELS, TrackedShipment } from '../../types/tracking';
import TrackingProgress from './TrackingProgress';
import { formatDate, formatDateTime } from './trackingFormat';

const AlertIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

/** Headline answer to "where is my parcel and when does it arrive". */
const TrackingStatusCard: React.FC<{ shipment: TrackedShipment }> = ({ shipment }) => {
  const onHold = Boolean(shipment.exception);
  const isDelivered = shipment.stage === 'delivered';

  return (
    <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-card sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">Consignment</p>
          <p className="text-2xl font-bold text-ink">{shipment.consignmentNumber}</p>
        </div>

        <span
          className={`rounded-full px-4 py-1.5 text-sm font-bold ${
            onHold ? 'bg-danger text-white' : 'bg-brand text-ink'
          }`}
        >
          {onHold ? 'On hold' : TRACKING_STAGE_LABELS[shipment.stage]}
        </span>
      </div>

      <dl className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-muted">
            {isDelivered ? 'Delivered to' : 'Currently at'}
          </dt>
          <dd className="mt-1 text-base font-bold text-ink">{shipment.currentLocation}</dd>
        </div>

        <div>
          <dt className="text-sm text-muted">
            {isDelivered ? 'Delivered on' : 'Estimated delivery'}
          </dt>
          <dd className="mt-1 text-base font-bold text-ink">
            {isDelivered && shipment.deliveredAt
              ? formatDateTime(shipment.deliveredAt)
              : `${formatDate(shipment.estimatedDelivery)}, ${shipment.deliveryWindow}`}
          </dd>
          {isDelivered && shipment.signedBy && (
            <dd className="text-sm text-muted">{`Signed for by ${shipment.signedBy}`}</dd>
          )}
        </div>
      </dl>

      {shipment.exception && (
        <p className="mt-6 flex items-start gap-3 rounded-lg border border-danger-border border-l-4 border-l-danger bg-danger-surface p-4 text-sm text-ink">
          <span className="text-danger">
            <AlertIcon />
          </span>
          {shipment.exception}
        </p>
      )}

      {/* Horizontal scroll rather than squeezing five milestones onto a phone. */}
      <div className="mt-8 overflow-x-auto pb-1">
        <div className="min-w-[520px]">
          <TrackingProgress stage={shipment.stage} onHold={onHold} />
        </div>
      </div>
    </section>
  );
};

export default TrackingStatusCard;
