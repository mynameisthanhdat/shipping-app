import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PackageDetailsForm from '../../components/Quote/PackageDetailsForm';
import QuoteStepper from '../../components/Quote/QuoteStepper';
import { ContentSection, OUR_SERVICES_CONTENT } from '../../mocks/ourServices';
import { PATHS } from '../../routes/paths';
import { PackageDetails } from '../../types/quote';

const { nextDay } = OUR_SERVICES_CONTENT;

const TextLink: React.FC<React.PropsWithChildren<{ to: string }>> = ({ to, children }) => (
  <Link to={to} className="underline underline-offset-2 transition-colors hover:text-brand">
    {children}
  </Link>
);

const TextSection: React.FC<{ content: ContentSection }> = ({ content }) => (
  <section>
    <h2 className="mb-5 text-xl font-bold">{content.heading}</h2>
    <div className="space-y-5">
      {content.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </section>
);

const NextDayOvernightDelivery: React.FC = () => {
  const navigate = useNavigate();

  const handleQuoteSubmit = (packageDetails: PackageDetails) => {
    navigate(PATHS.quote, { state: { packageDetails } });
  };

  return (
    <article className="mx-auto w-full max-w-container px-6 pb-24 pt-5 text-navy sm:pt-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <TextLink to={PATHS.home}>Home</TextLink> /{' '}
        <TextLink to={PATHS.services}>Our services</TextLink> /{' '}
        <span aria-current="page">{nextDay.breadcrumb}</span>
      </nav>

      <div className="mx-auto mt-7 max-w-[760px] sm:mt-5">
        <h1 className="text-center text-2xl font-bold leading-tight sm:text-[26px]">
          {nextDay.title}
        </h1>

        <div className="mt-8 space-y-6 text-[13px] leading-[1.55]">
          <section className="space-y-5">
            <p>{nextDay.introduction.question}</p>
            <p>
              {nextDay.introduction.prefix}{' '}
              <TextLink to={PATHS.courierNetwork}>
                {nextDay.introduction.courierNetworkLabel}
              </TextLink>{' '}
              {nextDay.introduction.suffix}
            </p>
          </section>

          <TextSection content={nextDay.trustedDelivery} />

          <section>
            <h2 className="mb-5 text-xl font-bold">
              {nextDay.savings.heading}
            </h2>
            <div className="space-y-5">
              <p>
                {nextDay.savings.parcelPost.prefix}{' '}
                <span className="underline underline-offset-2">
                  {nextDay.savings.parcelPost.highlightedText}
                </span>{' '}
                {nextDay.savings.parcelPost.suffix}
              </p>
              <p>
                {nextDay.savings.memberDiscount.prefix}{' '}
                <TextLink to={PATHS.openAccount}>
                  {nextDay.savings.memberDiscount.linkLabel}
                </TextLink>
                , {nextDay.savings.memberDiscount.suffix}
              </p>
              <p>
                {nextDay.savings.finalParagraph}
              </p>
            </div>
          </section>

          <TextSection content={nextDay.quotes} />
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

export default NextDayOvernightDelivery;
