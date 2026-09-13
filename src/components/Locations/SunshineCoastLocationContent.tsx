import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

/** Marketing sections for the Sunshine Coast city landing (no rate tables). */
const SunshineCoastLocationContent: React.FC = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-navy">
        The reliable Sunshine Coast courier company for deliveries large and small
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        The team at Parcelio understands the importance of having your freight delivered
        safely, in a timely manner, and at a competitive cost. That&apos;s why we offer a
        premium courier service right across the Sunshine Coast, designed to meet the
        varying needs of both individuals and businesses.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">By hiring us, you can choose from:</p>

      <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-relaxed text-navy">
        <li>Speedy, same day delivery</li>
        <li>Timely next day/overnight delivery</li>
        <li>Reliable standard package delivery</li>
        <li>Delivery outside of QLD through interstate deliveries</li>
      </ul>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        Find out more about Parcelio&apos;s Sunshine Coast courier services today, or check
        out the various other locations around Australia that we service.
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

export default SunshineCoastLocationContent;
