import React from 'react';
import { TrackedShipment, TrackingParty } from '../../types/tracking';

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between gap-4 py-1.5">
    <dt className="text-sm text-muted">{label}</dt>
    <dd className="text-right text-sm font-semibold text-ink">{value}</dd>
  </div>
);

const Address: React.FC<{ title: string; party: TrackingParty }> = ({ title, party }) => (
  <div>
    <h3 className="text-sm font-bold uppercase tracking-wide text-muted">{title}</h3>
    <p className="mt-2 text-sm font-semibold text-ink">{party.name}</p>
    {party.company && <p className="text-sm text-ink">{party.company}</p>}
    <p className="text-sm text-muted">
      {`${party.suburb}, ${party.state} ${party.postcode}`}
    </p>
  </div>
);

const TrackingSummary: React.FC<{ shipment: TrackedShipment }> = ({ shipment }) => (
  <aside className="space-y-6 rounded-2xl border border-black/10 bg-white p-6 shadow-card">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
      <Address title="From" party={shipment.sender} />
      <Address title="To" party={shipment.receiver} />
    </div>

    <div className="border-t border-black/10 pt-4">
      <h3 className="text-sm font-bold uppercase tracking-wide text-muted">Shipment</h3>
      <dl className="mt-2 divide-y divide-black/5">
        <Row label="Carrier" value={shipment.carrier} />
        <Row label="Service" value={shipment.service} />
        <Row label="Item type" value={shipment.itemType} />
        <Row label="Quantity" value={String(shipment.quantity)} />
        <Row label="Weight" value={`${shipment.weightKg} kg`} />
        <Row label="Dimensions" value={`${shipment.dimensionsCm} cm`} />
      </dl>
    </div>
  </aside>
);

export default TrackingSummary;
