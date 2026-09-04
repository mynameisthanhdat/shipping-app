import React from 'react';
import { TestimonialItem } from '../../mocks/education/testimonials';

type TestimonialCardProps = {
  testimonial: TestimonialItem;
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="text-sm font-bold text-brand" aria-label={`${rating} out of 5 stars`}>
    {'★'.repeat(rating)}
    {'☆'.repeat(5 - rating)}
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <article className="flex flex-col rounded-lg border border-muted-surface/60 bg-white p-6">
    <StarRating rating={testimonial.rating} />

    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
      {testimonial.content}
    </p>

    <footer className="mt-5">
      <p className="text-sm font-bold text-navy">{testimonial.authorName}</p>
      <p className="mt-1 text-xs text-muted">{testimonial.authorRole}</p>
    </footer>
  </article>
);

export default TestimonialCard;
