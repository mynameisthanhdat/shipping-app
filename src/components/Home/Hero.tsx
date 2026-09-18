import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

/** The service list from the logo lockup, rendered with the same pipe rule. */
const SERVICES = ['Parcel', 'Freight', 'Courier', 'Delivery'];

const Hero: React.FC = () => (
  <section className="bg-ink">
    <div className="mx-auto w-full max-w-container px-6 pb-20 pt-14 md:pb-32 md:pt-14">
      {/*
        The chip used `text-brand-deep`, which is the dark amber meant for light
        surfaces — on this charcoal it sat at 2.1:1. The bright brand reads 6.2:1.
      */}
      <span className="inline-flex rounded-full bg-ink-light px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand">
        TRUSTED BY 50,000+ BUSINESSES
      </span>

      <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-brand">
        Australia-wide logistics platform
      </p>

      <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">
        <span className="block">Ship Anything.</span>
        <span className="block">Anywhere. Fast.</span>
      </h1>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
        Compare rates from top couriers and book online in seconds. No account required, no
        hidden fees.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to={PATHS.quote}
          className="inline-flex items-center justify-center rounded bg-brand px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-brand-hover"
        >
          Get Instant Quote
        </Link>
        <Link
          to={PATHS.educationTracking}
          className="inline-flex items-center justify-center rounded-md border border-white px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
        >
          Track a Shipment
        </Link>
      </div>

      <ul
        aria-label="Services we cover"
        className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/15 pt-6 text-sm font-bold uppercase tracking-[0.18em] text-white"
      >
        {SERVICES.map((service, index) => (
          <React.Fragment key={service}>
            {index > 0 && (
              <li aria-hidden="true" className="text-brand">
                |
              </li>
            )}
            <li>{service}</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
