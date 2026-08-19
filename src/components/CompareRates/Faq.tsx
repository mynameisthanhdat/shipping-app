import React from 'react';
import { FAQS } from '../../mocks/compareRatesContent';

const Faq: React.FC = () => (
  <section>
    <h2 className="text-center text-2xl font-bold text-navy">Frequently Asked Questions</h2>

    <dl className="mt-8 grid gap-6 md:grid-cols-2">
      {FAQS.map((faq) => (
        <div
          key={faq.question}
          className="rounded-xl border border-black/10 bg-white p-6 shadow-card"
        >
          <dt className="text-center text-base font-bold text-navy">{faq.question}</dt>
          <dd className="mt-2 text-center text-xs leading-relaxed text-muted">{faq.answer}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Faq;
