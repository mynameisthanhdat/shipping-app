import React from 'react';
import { Link } from 'react-router-dom';
import { SOLUTIONS } from '../../mocks/home';
import { PATHS } from '../../routes/paths';

const SOLUTION_PATHS: Record<string, string> = {
  business: PATHS.business,
  individuals: PATHS.individuals,
  ecommerce: PATHS.ecommerce,
};

const SolutionCards: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold text-navy">Solutions Built Around You</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted">
      Choose the shipping experience that fits your needs
    </p>

    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SOLUTIONS.map((item) => (
        <Link
          key={item.id}
          to={SOLUTION_PATHS[item.id]}
          className="rounded-xl border border-black/10 bg-white p-6 shadow-card transition-colors hover:border-navy/20"
        >
          <h3 className="text-base font-bold text-navy">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
        </Link>
      ))}
    </div>
  </section>
);

export default SolutionCards;
