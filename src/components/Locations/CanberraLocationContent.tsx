import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

/** Marketing sections for the Canberra city landing (no rate tables). */
const CanberraLocationContent: React.FC = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-xl font-bold text-ink">
        Providing premium freight delivery throughout Canberra and beyond for residential
        and commercial clients
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-ink">
        At Bee Direct, we understand that each of our clients have different requirements for
        their courier needs. That is why we specialise in a diverse spectrum of services,
        ensuring we can assist with your freight delivery specifications no matter what
        they are.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-ink">
        Through our courier services offered across Canberra and ACT, you can enjoy:
      </p>

      <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-relaxed text-ink">
        <li>Reliable, cost effective standard package delivery</li>
        <li>Speedy same day delivery</li>
        <li>Equally time efficient next day/overnight delivery</li>
        <li>Delivery to outside of the ACT through our interstate deliveries</li>
      </ul>

      <p className="mt-4 text-sm leading-relaxed text-ink">
        Find out more about the courier Canberra trusts for reliability, affordability, and
        time efficiency by contacting Bee Direct today. You can also learn more about the
        various locations around Australia we service.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-ink">
        <Link
          to={PATHS.quote}
          className="underline underline-offset-2 transition-colors hover:text-brand-deep"
        >
          Get an instant quote
        </Link>
        {' or '}
        <Link
          to={PATHS.compareRates}
          className="underline underline-offset-2 transition-colors hover:text-brand-deep"
        >
          compare rates
        </Link>
        .
      </p>
    </section>
  </div>
);

export default CanberraLocationContent;
