import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PackageDetailsForm from '../../components/Quote/PackageDetailsForm';
import QuoteStepper from '../../components/Quote/QuoteStepper';
import { OUR_SERVICES_CONTENT } from '../../mocks/ourServices';
import { PATHS } from '../../routes/paths';
import { PackageDetails } from '../../types/quote';

const { parcelDelivery } = OUR_SERVICES_CONTENT;

const TextLink: React.FC<React.PropsWithChildren<{ to: string }>> = ({ to, children }) => (
  <Link to={to} className="underline underline-offset-2 transition-colors hover:text-brand">
    {children}
  </Link>
);

const ParcelDelivery: React.FC = () => {
  const navigate = useNavigate();

  const handleQuoteSubmit = (packageDetails: PackageDetails) => {
    navigate(PATHS.quote, { state: { packageDetails } });
  };

  return (
    <article className="mx-auto w-full max-w-container px-6 pb-24 pt-5 text-navy sm:pt-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <TextLink to={PATHS.home}>Home</TextLink> /{' '}
        <TextLink to={PATHS.services}>Our services</TextLink> /{' '}
        <span aria-current="page">{parcelDelivery.breadcrumb}</span>
      </nav>

      <div className="mx-auto mt-7 max-w-[760px] sm:mt-5">
        <h1 className="text-center text-2xl font-bold leading-tight sm:text-[26px]">
          {parcelDelivery.title}
        </h1>

        <div className="mt-8 space-y-6 text-[13px] leading-[1.55]">
          <section className="space-y-5">
            <p>{parcelDelivery.lead}</p>
            <p>
              {parcelDelivery.courierNetwork.prefix}{' '}
              <TextLink to={PATHS.courierNetwork}>
                {parcelDelivery.courierNetwork.linkLabel}
              </TextLink>
              , {parcelDelivery.courierNetwork.suffix}
            </p>
          </section>

          <section>
            <h2 className="mb-5 text-xl font-bold">{parcelDelivery.savings.heading}</h2>
            <div className="space-y-5">
              <p>
                {parcelDelivery.savings.average.prefix}{' '}
                <span className="underline underline-offset-2">
                  {parcelDelivery.savings.average.highlightedText}
                </span>{' '}
                {parcelDelivery.savings.average.suffix}
              </p>
              <p>
                {parcelDelivery.savings.membership.prefix}{' '}
                <TextLink to={PATHS.openAccount}>
                  {parcelDelivery.savings.membership.linkLabel}
                </TextLink>
                , {parcelDelivery.savings.membership.suffix}
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-5 text-xl font-bold">{parcelDelivery.quote.heading}</h2>
            <p>
              {parcelDelivery.quote.prefix}{' '}
              <TextLink to={PATHS.quote}>{parcelDelivery.quote.linkLabel}</TextLink>{' '}
              {parcelDelivery.quote.suffix}
            </p>
          </section>
        </div>
      </div>

      <section aria-label="Get a Quote" className="mt-12 border-t border-black/10 pt-10">
        <QuoteStepper currentIndex={0} completedCount={0} />
        <div className="mx-auto mt-12 max-w-4xl">
          <PackageDetailsForm onSubmit={handleQuoteSubmit} submitLabel="Get a Quote" />
        </div>
      </section>
    </article>
  );
};

export default ParcelDelivery;
