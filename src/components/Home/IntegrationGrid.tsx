import React from 'react';
import { INTEGRATIONS } from '../../mocks/home';

const IntegrationGrid: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold text-navy">Sell Anywhere You List</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted">
      Connect your store and sync orders automatically
    </p>

    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {INTEGRATIONS.map((item) => (
        <article
          key={item.id}
          className="flex flex-col justify-end rounded-xl bg-muted-surface/30 px-8 py-12"
        >
          <h3 className="text-base font-semibold text-navy">{item.name}</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default IntegrationGrid;
