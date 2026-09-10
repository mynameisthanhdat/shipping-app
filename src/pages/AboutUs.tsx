import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/CtaBanner';
import { LOCATION_CITIES } from '../constants/locations';
import { ABOUT_US_CONTENT, AboutUsTextSegment } from '../mocks/aboutUs';
import { PATHS } from '../routes/paths';

const RichParagraph: React.FC<{ segments: AboutUsTextSegment[] }> = ({ segments }) => (
  <p>
    {segments.map((segment, index) =>
      segment.to ? (
        <Link
          key={`${segment.text}-${index}`}
          to={segment.to}
          className="text-brand underline underline-offset-2 transition-colors hover:text-brand-hover"
        >
          {segment.text}
        </Link>
      ) : (
        <React.Fragment key={`${segment.text}-${index}`}>{segment.text}</React.Fragment>
      )
    )}
  </p>
);

const AboutUs: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const createdDescription = !description;
    const previousDescription = description?.content ?? '';

    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }

    document.title = ABOUT_US_CONTENT.seo.title;
    description.content = ABOUT_US_CONTENT.seo.description;

    return () => {
      document.title = previousTitle;
      if (createdDescription) description?.remove();
      else if (description) description.content = previousDescription;
    };
  }, []);

  const locations = ABOUT_US_CONTENT.locations
    .map((label) => LOCATION_CITIES.find((location) => location.label === label))
    .filter((location): location is NonNullable<typeof location> => Boolean(location));

  return (
    <article className="mx-auto w-full max-w-container px-6 pb-24 pt-5 text-navy sm:pt-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link to={PATHS.home} className="transition-colors hover:text-navy">
          Home
        </Link>{' '}
        / <span aria-current="page">{ABOUT_US_CONTENT.breadcrumb}</span>
      </nav>

      <div className="mx-auto mt-7 max-w-[760px] sm:mt-5">
        <h1 className="text-center text-2xl font-bold leading-tight sm:text-[26px]">
          {ABOUT_US_CONTENT.title}
        </h1>

        <section className="mt-10 text-[13px] leading-[1.65]">
          <h2 className="text-xl font-bold">{ABOUT_US_CONTENT.heading}</h2>

          <div className="mt-3 space-y-5">
            {ABOUT_US_CONTENT.paragraphs.map((paragraph, index) => (
              <RichParagraph key={index} segments={paragraph} />
            ))}

            <p>{ABOUT_US_CONTENT.locationsIntroduction}</p>

            <ul className="list-disc space-y-2 pl-7">
              {locations.map((location) => (
                <li key={location.to}>
                  <Link
                    to={location.to}
                    className="text-brand transition-colors hover:text-brand-hover"
                  >
                    {location.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-14">
        <CtaBanner />
      </div>
    </article>
  );
};

export default AboutUs;
