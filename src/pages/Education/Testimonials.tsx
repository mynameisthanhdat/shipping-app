import React from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import CtaBanner from '../../components/CtaBanner';
import CategoryGrid from '../../components/Education/CategoryGrid';
import TestimonialGrid from '../../components/Education/TestimonialGrid';
import { TESTIMONIALS } from '../../mocks/education/testimonials';
import { PATHS } from '../../routes/paths';

const Testimonials: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto mb-4 w-full max-w-container px-6 pt-8">
        <Breadcrumb
          items={[
            { label: 'Home', to: PATHS.home },
            { label: 'Education Centre', to: PATHS.education },
            { label: 'Testimonials' },
          ]}
        />

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-ink">
            What Our Customers Say
          </h1>
          <p className="mt-3.5 text-lg font-bold text-ink">
            Real feedback from businesses and individuals shipping with BEE DIRECT
          </p>
        </div>

        <div className="mt-10">
          <CategoryGrid />
        </div>

        <section className="mt-12">
          <TestimonialGrid testimonials={TESTIMONIALS} />
        </section>
      </div>

      <div className="mx-auto mt-auto w-full max-w-container px-6 py-8">
        <CtaBanner />
      </div>
    </div>
  );
};

export default Testimonials;
