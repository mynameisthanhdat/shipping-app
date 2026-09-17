import React from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import CtaBanner from '../components/CtaBanner';
import CategoryGrid from '../components/Education/CategoryGrid';
import { PATHS } from '../routes/paths';

const Education: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto w-full max-w-container px-6 pt-8 mb-4">
        <Breadcrumb
          items={[
            { label: 'Home', to: PATHS.home },
            { label: 'Education Centre' },
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
      </div>

      <div className="mx-auto mt-auto w-full max-w-container px-6 py-8">
        <CtaBanner />
      </div>
    </div>
  );
};

export default Education;
