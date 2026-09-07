import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

type CtaAction = {
  label: string;
  to: string;
};

type CtaBannerProps = {
  title?: string;
  primaryAction?: CtaAction;
  secondaryAction?: CtaAction;
};

const CtaBanner: React.FC<CtaBannerProps> = ({
  title = "We've got you covered. Send with Transdirect and start saving today!",
  primaryAction = { label: 'Get a Quote', to: PATHS.quote },
  secondaryAction = { label: 'Compare Rates', to: PATHS.compareRates },
}) => {
  return (
    <section className="rounded-xl bg-navy px-6 py-7 text-center">
      <p className="text-xl font-bold text-white">{title}</p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-5">
        <Link
          to={secondaryAction.to}
          className="inline-flex items-center justify-center rounded-md bg-white px-8 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-white/90"
        >
          {secondaryAction.label}
        </Link>
        <Link
          to={primaryAction.to}
          className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
        >
          {primaryAction.label}
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
