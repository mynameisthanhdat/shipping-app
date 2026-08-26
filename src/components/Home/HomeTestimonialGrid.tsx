import React from 'react';
import { HOME_TESTIMONIALS } from '../../mocks/home';

const HomeTestimonialGrid: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold text-navy">Trusted by Businesses Everywhere</h2>

    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {HOME_TESTIMONIALS.map((item) => (
        <article
          key={item.id}
          className="flex flex-col rounded-xl border border-black/10 bg-white p-6 shadow-card"
        >
          <p className="flex-1 text-sm leading-relaxed text-navy">&ldquo;{item.quote}&rdquo;</p>
          <p className="mt-5 text-sm font-semibold text-muted">{item.attribution}</p>
        </article>
      ))}
    </div>
  </section>
);

export default HomeTestimonialGrid;
