import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PackageDetailsForm from '../../components/Quote/PackageDetailsForm';
import QuoteStepper from '../../components/Quote/QuoteStepper';
import { ContentSection, OUR_SERVICES_CONTENT } from '../../mocks/ourServices';
import { PATHS } from '../../routes/paths';
import { PackageDetails } from '../../types/quote';

const { sameDay } = OUR_SERVICES_CONTENT;

const TextLink: React.FC<React.PropsWithChildren<{ to: string }>> = ({ to, children }) => (
  <Link to={to} className="underline underline-offset-2 transition-colors hover:text-brand">
    {children}
  </Link>
);

const TextSection: React.FC<{ content: ContentSection }> = ({ content }) => (
  <div>
    <h3 className="mb-4 font-bold">{content.heading}</h3>
    {content.paragraphs.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </div>
);

const SameDayCourierServices: React.FC = () => {
  const navigate = useNavigate();

  const handleQuoteSubmit = (packageDetails: PackageDetails) => {
    navigate(PATHS.quote, { state: { packageDetails } });
  };

  return (
    <article className="mx-auto w-full max-w-container px-6 pb-24 pt-5 text-navy sm:pt-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <TextLink to={PATHS.home}>Home</TextLink> /{' '}
        <TextLink to={PATHS.services}>Our services</TextLink> /{' '}
        <span aria-current="page">{sameDay.breadcrumb}</span>
      </nav>

      <div className="mx-auto mt-7 max-w-[760px] sm:mt-5">
        <h1 className="text-center text-2xl font-bold leading-tight sm:text-[26px]">
          {sameDay.title}
        </h1>

        <div className="mt-8 space-y-6 text-[13px] leading-[1.55]">
          <section className="space-y-5">
            {sameDay.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <TextLink to={PATHS.quote}>{sameDay.callToAction.quoteLabel}</TextLink> or{' '}
              <TextLink to={PATHS.quote}>{sameDay.callToAction.bookingLabel}</TextLink>{' '}
              {sameDay.callToAction.suffix}
            </p>
            <p>{sameDay.termsText}</p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold">{sameDay.whyChooseHeading}</h2>

            <div className="space-y-6">
              <TextSection content={sameDay.compareCouriers} />

              <div>
                <h3 className="mb-4 font-bold">{sameDay.australiaWide.heading}</h3>
                {sameDay.australiaWide.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="mt-5">{sameDay.australiaWide.locationsHeading}</p>
                <ul className="mt-1 list-disc pl-5">
                  {sameDay.australiaWide.locations.map((location, index) => (
                    <li key={location.label}>
                      <TextLink to={location.to}>{location.label}</TextLink>
                      {index === sameDay.australiaWide.locations.length - 1 && (
                        <>
                          {' '}and{' '}
                          <TextLink to={PATHS.locations}>
                            {sameDay.australiaWide.moreLocationsLabel}
                          </TextLink>
                          .
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-bold">{sameDay.tracking.heading}</h3>
                <p>
                  {sameDay.tracking.paragraphs[0]}{' '}
                  <TextLink to={PATHS.trackShipment}>{sameDay.tracking.linkLabel}</TextLink>.
                </p>
              </div>

              <TextSection content={sameDay.competitiveRates} />

              <TextSection content={sameDay.bookingProcess} />

              <div>
                <h3 className="mb-4 font-bold">{sameDay.howItWorks.heading}</h3>
                <ol>
                  {sameDay.howItWorks.steps.map((step) => (
                    <li key={step.label}>
                      {step.label} <strong>{step.title}</strong> {step.description}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-5 text-xl font-bold">
              {sameDay.items.heading}
            </h2>
            <p>{sameDay.items.introduction}</p>
            <ul className="mt-1 list-disc pl-5">
              {sameDay.items.values.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-5">
              {sameDay.items.requirements}{' '}
              <TextLink to={PATHS.educationPackaging}>
                {sameDay.items.requirementsLinkLabel}
              </TextLink>{' '}
              {sameDay.items.requirementsSuffix}
            </p>
          </section>

          <section>
            <h2 className="mb-5 text-xl font-bold">{sameDay.testimonials.heading}</h2>
            <div className="space-y-5">
              {sameDay.testimonials.values.map((testimonial) => (
                <blockquote key={testimonial}>“{testimonial}”</blockquote>
              ))}
            </div>
            <p className="mt-6">
              <TextLink to={PATHS.educationTestimonials}>
                {sameDay.testimonials.linkLabel}
              </TextLink>
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

export default SameDayCourierServices;
