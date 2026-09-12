import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

/** Marketing sections for the Geelong city landing (no rate tables). */
const GeelongLocationContent: React.FC = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-navy">
        Trust the team at Parcelio for all your Geelong courier needs
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        Parcelio has years of experience within the courier industry, providing
        cost-effective, reliable and timely freight deliveries throughout Geelong and the
        surrounds. We work with both individuals and businesses on tasks of all scales,
        ensuring that each of our clients receives the very best level of service.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        Our Geelong courier team can provide you:
      </p>

      <ul className="mt-1 list-disc space-y-2 pl-5 text-sm leading-relaxed text-navy">
        <li>
          <span className="font-bold">Same Day or Next Day/Overnight Delivery</span> – for
          those needing to fit within a certain timeframe
        </li>
        <li>
          <span className="font-bold">Standard Package Delivery</span> – less of an urgency
          in terms of time, but still requiring the competitive prices and reliability we
          can offer
        </li>
        <li>
          <span className="font-bold">Interstate Courier Services</span> – for all
          deliveries leaving or coming in from a state or territory other than Victoria
        </li>
      </ul>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        Want to learn more about how our Geelong couriers can help you? Get in contact with
        our team today. Make sure you also check out the many other Australian locations
        that we service.
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

export default GeelongLocationContent;
