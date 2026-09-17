import React from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import { TERMS_AND_CONDITIONS_CONTENT } from '../mocks/termsAndConditions';
import { PATHS } from '../routes/paths';

const TermsAndConditions: React.FC = () => (
  <article className="mx-auto w-full max-w-container px-6 pb-24 pt-5 text-ink sm:pt-8">
    <Breadcrumb
      items={[
        { label: 'Home', to: PATHS.home },
        { label: TERMS_AND_CONDITIONS_CONTENT.breadcrumb },
      ]}
    />

    <div className="mx-auto mt-7 max-w-[760px] sm:mt-5">
      <h1 className="text-center text-2xl font-bold leading-tight sm:text-[26px]">
        {TERMS_AND_CONDITIONS_CONTENT.title}
      </h1>
      <p className="mt-4 text-right text-xs text-muted">
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
