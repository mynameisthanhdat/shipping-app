import React from 'react';
import { TestimonialItem } from '../../mocks/education/testimonials';
import TestimonialCard from './TestimonialCard';

type TestimonialGridProps = {
  testimonials: TestimonialItem[];
};

const TestimonialGrid: React.FC<TestimonialGridProps> = ({ testimonials }) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {testimonials.map((testimonial) => (
      <TestimonialCard key={testimonial.id} testimonial={testimonial} />
    ))}
  </div>
);

export default TestimonialGrid;
