import React from 'react';
import { useNavigate } from 'react-router-dom';
import PackageDetailsForm from '../../components/Quote/PackageDetailsForm';
import QuoteLocationContent from '../../components/Quote/QuoteLocationContent';
import { useQuote } from '../../components/Quote/QuoteContext';
import { QUOTE_STEPS, getQuoteStepPath } from '../../routes/quoteSteps';
import { PackageDetails } from '../../types/quote';

const PackageDetailsStep: React.FC = () => {
  const navigate = useNavigate();
  const { draft, patch } = useQuote();

  const handleSubmit = (packageDetails: PackageDetails) => {
    patch('packageDetails', packageDetails);
    navigate(getQuoteStepPath(QUOTE_STEPS[1]));
  };

  return (
    <>
      <PackageDetailsForm
        initialValue={draft.packageDetails}
        onSubmit={handleSubmit}
        submitLabel="Get a Quote"
      />

      <div className="mt-12 border-t border-black/10 pt-10">
        <div className="mx-auto max-w-4xl">
          <QuoteLocationContent />
        </div>
      </div>
    </>
  );
};

export default PackageDetailsStep;
