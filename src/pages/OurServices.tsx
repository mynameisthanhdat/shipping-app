import React from 'react';
import { Link } from 'react-router-dom';
import { OUR_SERVICES_CONTENT, ServiceItem } from '../mocks/ourServices';
import { PATHS } from '../routes/paths';

const { hub } = OUR_SERVICES_CONTENT;

const ServiceTitle: React.FC<Pick<ServiceItem, 'title' | 'to'>> = ({ title, to }) => {
  if (!to) return <strong>{title}:</strong>;

  return (
    <Link to={to} className="underline underline-offset-2 hover:text-brand">
      {title}:
    </Link>
  );
};

const HighlightedText: React.FC<{ text: string; highlightedText?: string }> = ({
  text,
  highlightedText,
}) => {
  if (!highlightedText || !text.includes(highlightedText)) return <>{text}</>;

  const [before, after] = text.split(highlightedText);

  return (
    <>
      {before}
      <span className="underline underline-offset-2">{highlightedText}</span>
      {after}
    </>
  );
};

const OurServices: React.FC = () => {
  return (
    <article className="mx-auto w-full max-w-container px-6 pb-24 pt-3 text-navy sm:pt-5">
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
        <Link to={PATHS.home} className="transition-colors hover:text-brand">
          Home
        </Link>{' '}
        / <span aria-current="page">{hub.breadcrumb}</span>
      </nav>

      <div className="mx-auto mt-7 max-w-[760px] sm:mt-5">
        <h1 className="text-center text-2xl font-bold leading-tight text-navy sm:text-[26px]">
          {hub.title}
        </h1>

        <div className="mt-7 text-[13px] leading-[1.55] sm:mt-8">
          <p>
            <HighlightedText
              text={hub.introduction}
              highlightedText={hub.introductionHighlightedText}
            />
          </p>

          <p className="mt-5 font-bold">{hub.servicesHeading}</p>

          <ul className="list-disc space-y-0.5 pl-5">
            {hub.serviceItems.map((service) => (
              <li key={service.title}>
                <ServiceTitle title={service.title} to={service.to} />{' '}
                <HighlightedText
                  text={service.description}
                  highlightedText={service.highlightedText}
                />
              </li>
            ))}
          </ul>

          <p className="mt-6">{hub.closingText}</p>
        </div>
      </div>
    </article>
  );
};

export default OurServices;
