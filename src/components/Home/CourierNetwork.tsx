import React from 'react';
import { Link } from 'react-router-dom';
import { COURIER_PARTNERS } from '../../mocks/home';
import { PATHS } from '../../routes/paths';

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

    <div className="mt-8 flex justify-center">
      <Link
        to={PATHS.couriers}
        className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
      >
        Show more
      </Link>
    </div>
  </section>
);

export default CourierNetwork;
