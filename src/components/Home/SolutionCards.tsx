import React from 'react';
import { SOLUTIONS } from '../../mocks/home';

const iconClassName = 'h-5 w-5';

const BuildingIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={iconClassName}
  >
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-6h6v6" />
    <path d="M9 9h.01" />
    <path d="M15 9h.01" />
    <path d="M9 13h.01" />
    <path d="M15 13h.01" />
  </svg>
);

const UsersIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={iconClassName}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CartIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={iconClassName}
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const SOLUTION_ICONS: Record<string, React.ReactNode> = {
  business: <BuildingIcon />,
  individuals: <UsersIcon />,
  ecommerce: <CartIcon />,
};

const SolutionCards: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold text-navy">Solutions Built Around You</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted">
      Choose the shipping experience that fits your needs
    </p>

    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SOLUTIONS.map((item) => (
        <article
          key={item.id}
          className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-card transition-shadow hover:shadow-lg"
        >
          <div className="h-1.5 bg-brand" aria-hidden="true" />
          <div className="p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
              {SOLUTION_ICONS[item.id]}
            </span>
            <h3 className="mt-4 text-base font-bold text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default SolutionCards;
