import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const MembershipCta: React.FC = () => (
  <section className="text-center">
    <h2 className="text-2xl font-bold text-navy">
      Save on Courier Prices with Parcelio Membership
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted">
      At Parcelio, we offer our members discounted shipping rates based on their weekly
      freight volume. The more you ship, the more you save — with member pricing already
      reflected in the rates above.
    </p>

    <Link
      to={PATHS.openAccount}
      className="mt-8 inline-block rounded bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
    >
      Become a Member
    </Link>
  </section>
);

export default MembershipCta;
