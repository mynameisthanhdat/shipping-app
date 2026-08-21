import React from 'react';
import { COURIER_PARTNERS } from '../../mocks/home';

const CourierNetwork: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold text-navy">Trusted Courier Network</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted">
      We partner with leading carriers to get your parcel there
    </p>

    <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
      {COURIER_PARTNERS.map((partner) => (
        <li key={partner.id} className="flex flex-col items-center">
          <div
            className="h-20 w-full max-w-[220px] bg-muted-surface"
            aria-hidden="true"
          />
          <p className="mt-3 text-center text-sm font-semibold text-navy">
            {partner.name}
          </p>
        </li>
      ))}
    </ul>
  </section>
);

export default CourierNetwork;
