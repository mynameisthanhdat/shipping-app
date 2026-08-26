import React from 'react';
import { ACCOUNT_STEPS } from '../../mocks/education/accountEnquiries';

const AccountHowToSteps: React.FC = () => (
  <ol className="space-y-5">
    {ACCOUNT_STEPS.map((step) => (
      <li key={step.id}>
        <h3 className="text-base font-bold text-navy">{step.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
      </li>
    ))}
  </ol>
);

export default AccountHowToSteps;
