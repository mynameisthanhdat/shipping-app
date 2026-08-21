import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const ReferralBanner: React.FC = () => (
  <section className="flex flex-col items-start justify-between gap-6 rounded-xl bg-muted-surface/30 px-6 py-8 sm:flex-row sm:items-center md:px-8">
    <div>
      <h2 className="text-2xl font-bold text-navy">Refer a Friend, Get $20 Credit</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Share Parcelio with your network and earn credit on every referral
      </p>
    </div>

    <Link
      to={PATHS.openAccount}
      className="inline-flex shrink-0 items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
    >
      Get Your Referral Link
    </Link>
  </section>
);

export default ReferralBanner;
