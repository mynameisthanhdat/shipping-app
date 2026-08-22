import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PackageDetailsForm from '../../components/Quote/PackageDetailsForm';
import QuoteStepper from '../../components/Quote/QuoteStepper';
import { OUR_SERVICES_CONTENT } from '../../mocks/ourServices';
import { PATHS } from '../../routes/paths';
import { PackageDetails } from '../../types/quote';

const { interstate } = OUR_SERVICES_CONTENT;

const ExpertInterStateCouriersInAus: React.FC = () => {
  const navigate = useNavigate();

  const handleQuoteSubmit = (packageDetails: PackageDetails) => {
    navigate(PATHS.quote, { state: { packageDetails } });
  };

  return (
    <article className="mx-auto w-full max-w-container px-6 pb-24 pt-5 text-navy sm:pt-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link to={PATHS.home} className="transition-colors hover:text-brand">
          Home
        </Link>{' '}
        /{' '}
        <Link to={PATHS.services} className="transition-colors hover:text-brand">
          Our services
        </Link>{' '}
        / <span aria-current="page">{interstate.breadcrumb}</span>
      </nav>

      <div className="mx-auto mt-7 max-w-[760px] sm:mt-5">
        <h1 className="text-center text-2xl font-bold leading-tight text-navy sm:text-[26px]">
          {interstate.title}
        </h1>

        <div className="mt-10 space-y-5 text-[13px] leading-[1.55] sm:mt-11">
          <section>
            <h2 className="mb-3 text-[15px] font-bold">{interstate.introduction.heading}</h2>
            {interstate.introduction.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section>
            <h2 className="mb-3 text-[15px] font-bold">{interstate.trust.heading}</h2>
            <div className="space-y-4">
              {interstate.trust.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-[15px] font-bold">{interstate.shipping.heading}</h2>
            {interstate.shipping.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="mt-3 list-disc space-y-0.5 pl-5">
              {interstate.shipping.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </section>

          <details className="group">
            <summary className="inline-flex cursor-pointer list-none items-center gap-10 rounded bg-brand px-3 py-2 text-sm text-white transition-colors hover:bg-brand-hover [&::-webkit-details-marker]:hidden">
              <span>{interstate.moreInformation.label}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform group-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>

            <div className="mt-7 space-y-6">
              {interstate.moreInformation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </details>
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

export default ExpertInterStateCouriersInAus;
