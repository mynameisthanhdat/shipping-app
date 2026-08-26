import React from 'react';
import { Link } from 'react-router-dom';
import { ACCOUNT_REVIEWS } from '../../mocks/education/accountEnquiries';
import { PATHS } from '../../routes/paths';

const AccountMemberReviews: React.FC = () => (
  <div>
    <div className="space-y-5">
      {ACCOUNT_REVIEWS.map((review) => (
        <blockquote
          key={review.id}
          className="text-sm leading-relaxed text-muted"
        >
          &ldquo;{review.quote}&rdquo;
        </blockquote>
      ))}
    </div>
    <p className="mt-4">
      <Link
        to={PATHS.educationTestimonials}
        className="text-sm font-bold text-brand transition-colors hover:text-brand-hover"
      >
        See more member feedback
      </Link>
    </p>
  </div>
);

export default AccountMemberReviews;
