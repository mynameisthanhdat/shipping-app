import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

/** Marketing sections for the Hobart city landing (no rate tables). */
const HobartLocationContent: React.FC = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-navy">
        Let Parcelio handle your shipping needs throughout Hobart and the surrounds
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        Parcelio is proud to provide premium courier services across Hobart, with a focus
        on reliability, cost-efficiency, and timely turnarounds. We specialise in assisting
        residents and commercial clients right across Australia with their custom shipping
        needs, including throughout Tasmania.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">Our courier services include:</p>

      <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-relaxed text-navy">
        <li>Interstate Delivery to states and territories across Australia</li>
        <li>Same Day Delivery to help you stick with your speedy timeframe</li>
        <li>Overnight Delivery for slightly less demanding turnaround times</li>
        <li>
          Standard Package Delivery with the same reliability and competitive prices you
          expect from all of our services
        </li>
      </ul>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        Contact the couriers at Parcelio today and find out more about how we can assist
        you in Hobart or in one of our many other locations throughout Australia.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        <Link
          to={PATHS.quote}
          className="underline underline-offset-2 transition-colors hover:text-brand"
        >
          Get an instant quote
        </Link>
        {' or '}
        <Link
          to={PATHS.compareRates}
          className="underline underline-offset-2 transition-colors hover:text-brand"
        >
          compare rates
        </Link>
        .
      </p>
    </section>
  </div>
);

export default HobartLocationContent;
