import React from 'react';
import { RATE_HIGHLIGHTS } from '../../mocks/home';
import RateHighlightCard from './RateHighlightCard';

const CompareInstantRates: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold text-navy">Compare Instant Shipping Rates</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted">
      Real examples from our most popular shipping routes
    </p>

    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {RATE_HIGHLIGHTS.map((item) => (
        <RateHighlightCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default CompareInstantRates;
