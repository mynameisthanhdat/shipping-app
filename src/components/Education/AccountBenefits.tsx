import React from 'react';
import { ACCOUNT_BENEFITS } from '../../mocks/education/accountEnquiries';

const AccountBenefits: React.FC = () => (
  <div className="space-y-6">
    {ACCOUNT_BENEFITS.map((benefit) => (
      <article key={benefit.id}>
        <h3 className="text-base font-bold text-navy">{benefit.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{benefit.body}</p>
      </article>
    ))}
  </div>
);

export default AccountBenefits;
