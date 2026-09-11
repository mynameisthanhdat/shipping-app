import React from 'react';
import { Link } from 'react-router-dom';
import { TERMS_AND_CONDITIONS_CONTENT } from '../mocks/termsAndConditions';
import { PATHS } from '../routes/paths';

const TermsAndConditions: React.FC = () => (
  <article className="mx-auto w-full max-w-container px-6 pb-24 pt-5 text-navy sm:pt-8">
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <Link to={PATHS.home} className="transition-colors hover:text-navy">
        Home
      </Link>{' '}
      / <span aria-current="page">{TERMS_AND_CONDITIONS_CONTENT.breadcrumb}</span>
    </nav>

    <div className="mx-auto mt-7 max-w-[760px] sm:mt-5">
      <h1 className="text-center text-2xl font-bold leading-tight sm:text-[26px]">
        {TERMS_AND_CONDITIONS_CONTENT.title}
      </h1>
      <p className="mt-4 text-right text-xs text-slate-500">
        {TERMS_AND_CONDITIONS_CONTENT.lastUpdated}
      </p>

      <section className="mt-9 text-[13px] leading-[1.55]">
        <p>{TERMS_AND_CONDITIONS_CONTENT.introduction}</p>

        <h2 className="mt-5 text-base font-bold">
          {TERMS_AND_CONDITIONS_CONTENT.definitionsHeading}
        </h2>
        <div className="mt-2 space-y-4">
          {TERMS_AND_CONDITIONS_CONTENT.definitions.map((definition) => (
            <p key={definition}>{definition}</p>
          ))}
        </div>
      </section>
    </div>
  </article>
);

export default TermsAndConditions;
