import React from 'react';
import { Link } from 'react-router-dom';
import { RATE_EXAMPLES } from '../../mocks/home';
import { PATHS } from '../../routes/paths';

const RateExampleGrid: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold text-navy">
      Examples of our Domestic and International Rates
    </h2>
    <p className="mt-2 text-sm leading-relaxed text-muted">
      Real rates for local, interstate, and international shipments
    </p>

    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {RATE_EXAMPLES.map((item) => (
        <article key={item.id} className="rounded-xl bg-muted-surface/30 p-6">
          <p className="text-3xl font-bold text-navy">{item.price}</p>
          <h3 className="mt-2 text-sm font-bold text-navy">{item.label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
        </article>
      ))}
    </div>

    <div className="mt-8 flex justify-center">
      <Link
        to={PATHS.compareRates}
        className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
      >
        See more
      </Link>
    </div>
  </section>
);

export default RateExampleGrid;
