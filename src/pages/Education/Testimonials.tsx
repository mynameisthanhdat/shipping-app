import React from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../../components/CtaBanner';
import CategoryGrid from '../../components/Education/CategoryGrid';
import TestimonialGrid from '../../components/Education/TestimonialGrid';
import { TESTIMONIALS } from '../../mocks/education/testimonials';
import { PATHS } from '../../routes/paths';

const Testimonials: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto mb-4 w-full max-w-container px-6 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to={PATHS.home} className="transition-colors hover:text-navy">
            Home
          </Link>
          <span>
            {' '}
            /{' '}
            <Link to={PATHS.education} className="transition-colors hover:text-navy">
              Education Centre
            </Link>
            {' '}
            / Testimonials
          </span>
        </nav>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-navy">
            What Our Customers Say
          </h1>
          <p className="mt-3.5 text-lg font-bold text-navy">
            Real feedback from businesses and individuals shipping with Parcelio
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
