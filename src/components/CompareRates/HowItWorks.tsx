import React from 'react';
import { CALCULATOR_STEPS } from '../../mocks/compareRatesContent';

const HowItWorks: React.FC = () => (
  <section>
    <h2 className="text-center text-2xl font-bold text-navy">
      How Our Shipping Rate Calculator Works
    </h2>

    <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {CALCULATOR_STEPS.map((step, index) => (
        <li
          key={step.title}
          className="rounded-xl border border-black/10 bg-white p-6 shadow-card"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white"
          >
            {index + 1}
          </span>
          <h3 className="mt-4 text-center text-sm font-bold text-navy">{step.title}</h3>
          <p className="mt-2 text-center text-xs leading-relaxed text-muted">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  </section>
);

export default HowItWorks;
