import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import { COURIERS_CONTENT, CourierTextSegment } from '../mocks/couriers';
import { PATHS } from '../routes/paths';

const RichParagraph: React.FC<{ segments: CourierTextSegment[] }> = ({ segments }) => (
  <p>
    {segments.map((segment, index) =>
      segment.to ? (
        <Link
          key={`${segment.text}-${index}`}
          to={segment.to}
          className="underline underline-offset-2 transition-colors hover:text-brand-deep"
        >
          {segment.text}
        </Link>
      ) : (
        <React.Fragment key={`${segment.text}-${index}`}>{segment.text}</React.Fragment>
      )
    )}
  </p>
);

const Couriers: React.FC = () => (
  <article className="mx-auto w-full max-w-container px-6 pb-24 pt-5 text-ink sm:pt-8">
    <Breadcrumb
      items={[
        { label: 'Home', to: PATHS.home },
        { label: COURIERS_CONTENT.breadcrumb },
      ]}
    />

    <div className="mx-auto mt-7 max-w-[760px] sm:mt-5">
      <h1 className="text-center text-2xl font-bold leading-tight sm:text-[26px]">
        {COURIERS_CONTENT.title}
      </h1>

      <div className="mt-8 space-y-6 text-[13px] leading-[1.55]">
        <section>
          <h2 className="text-xl font-bold">{COURIERS_CONTENT.introduction.heading}</h2>
          <div className="space-y-0.5">
            {COURIERS_CONTENT.introduction.paragraphs.map((paragraph, index) => (
              <RichParagraph key={index} segments={paragraph} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold">{COURIERS_CONTENT.providers.heading}</h2>
          <p>{COURIERS_CONTENT.providers.introduction}</p>

          <div className="mx-auto my-10 grid max-w-[500px] grid-cols-2 gap-x-7 gap-y-4 sm:grid-cols-5">
            {COURIERS_CONTENT.providers.items.map((provider) => {
              const [label, number] = provider.name.split(' ');

              return (
                <Link
                  key={provider.name}
                  to={provider.to}
                  className="flex aspect-square flex-col items-center justify-center bg-[#ff7478] px-2 text-center text-sm font-bold leading-tight text-ink transition-colors hover:bg-brand"
                >
                  <span>{label}</span>
                  <span>{number}</span>
                </Link>
              );
            })}
          </div>

          <p>{COURIERS_CONTENT.providers.description}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold">{COURIERS_CONTENT.cheapestServices.heading}</h2>
          <div className="space-y-5">
            {COURIERS_CONTENT.cheapestServices.paragraphs.map((paragraph, index) => (
              <RichParagraph key={index} segments={paragraph} />
            ))}
          </div>
        </section>
      </div>
    </div>
  </article>
);

export default Couriers;
