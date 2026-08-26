import React from 'react';
import { ACCOUNT_FAQS } from '../../mocks/education/accountEnquiries';

const AccountFaqList: React.FC = () => (
  <dl className="space-y-6">
    {ACCOUNT_FAQS.map((faq) => (
      <div key={faq.id} className="text-center">
        <dt className="text-base font-bold text-navy">{faq.question}</dt>
        <dd className="mt-1.5 text-sm leading-relaxed text-muted">{faq.answer}</dd>
      </div>
    ))}
  </dl>
);

export default AccountFaqList;
