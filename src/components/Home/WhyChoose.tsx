import React from 'react';
import { WHY_CHOOSE_FEATURES } from '../../mocks/home';

const WhyChoose: React.FC = () => {
  const midpoint = Math.ceil(WHY_CHOOSE_FEATURES.length / 2);
  const leftColumn = WHY_CHOOSE_FEATURES.slice(0, midpoint);
  const rightColumn = WHY_CHOOSE_FEATURES.slice(midpoint);

  return (
    <section className="rounded-xl bg-navy px-6 pt-7 pb-12 text-center">
        <h2 className="text-2xl font-bold text-white">
          Why Businesses Choose Parcelio
        </h2>
        <div className="mt-10 grid gap-x-12 gap-y-4 sm:grid-cols-2">
          {[leftColumn, rightColumn].map((column, columnIndex) => (
            <ul key={columnIndex} className="space-y-4">
              {column.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-base leading-relaxed text-white/70"
                >
                  <span aria-hidden="true">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
    </section>
  );
};

export default WhyChoose;
