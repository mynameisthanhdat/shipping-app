import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const Hero: React.FC = () => (
  <section className="bg-navy">
    <div className="mx-auto w-full max-w-container px-6 pb-20 pt-14 md:pb-32 md:pt-14">
      <span className="inline-flex rounded-full bg-navy-light px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand">
        TRUSTED BY 50,000+ BUSINESSES
      </span>

      <h1 className="mt-6 text-3xl font-bold text-white md:text-4xl">
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
          className="inline-flex items-center justify-center rounded bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
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
    </div>
  </section>
);

export default Hero;
