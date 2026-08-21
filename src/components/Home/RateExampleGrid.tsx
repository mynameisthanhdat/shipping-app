import React from 'react';
import { RATE_EXAMPLES } from '../../mocks/home';

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
  </section>
);

export default RateExampleGrid;
