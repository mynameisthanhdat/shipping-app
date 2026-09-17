import React from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import CtaBanner from '../../components/CtaBanner';
import CategoryGrid from '../../components/Education/CategoryGrid';
import FaqAccordion from '../../components/Education/FaqAccordion';
import { FAQ_SECTION } from '../../mocks/education/faqs';
import { PATHS } from '../../routes/paths';

const Faqs: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto mb-4 w-full max-w-container px-6 pt-8">
        <Breadcrumb
          items={[
            { label: 'Home', to: PATHS.home },
            { label: 'Education Centre', to: PATHS.education },
            { label: "FAQ's" },
          ]}
        />

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-ink">
            Looking for answers? You&apos;re in the right place.
          </h1>
          <p className="mt-3.5 text-lg font-bold text-ink">
            To start looking for answers, choose your category!
          </p>
        </div>

        <div className="mt-10">
          <CategoryGrid />
        </div>

        <section className="mt-12">
          <h2 className="text-start text-2xl font-bold text-ink">
            {FAQ_SECTION.title}
          </h2>
          <p className="mt-4 text-sm leading-normal text-[#5a6472]">
            {FAQ_SECTION.description}
          </p>

          <div className="mt-6">
            <FaqAccordion items={FAQ_SECTION.items} />
          </div>
        </section>
      </div>

      <div className="mx-auto mt-auto w-full max-w-container px-6 py-8">
        <CtaBanner />
      </div>
    </div>
  );
};

export default Faqs;
