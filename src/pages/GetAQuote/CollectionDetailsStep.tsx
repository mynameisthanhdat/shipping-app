import React from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionDetailsForm from '../../components/Quote/CollectionDetailsForm';
import QuoteSummaryBar from '../../components/Quote/QuoteSummaryBar';
import { useQuote } from '../../components/Quote/QuoteContext';
import { CARRIER_QUOTES } from '../../mocks/carrierQuotes';
import { QUOTE_STEPS, getQuoteStepPath } from '../../routes/quoteSteps';
import { CollectionDetails } from '../../types/quote';

const CollectionDetailsStep: React.FC = () => {
  const navigate = useNavigate();
  const { draft, patch } = useQuote();

  const quote = CARRIER_QUOTES.find((option) => option.id === draft.selectedQuoteId);

  const handleSubmit = (collectionDetails: CollectionDetails) => {
    patch('collectionDetails', collectionDetails);
    navigate(getQuoteStepPath(QUOTE_STEPS[3]));
  };

  return (
    <div className="space-y-8">
      <QuoteSummaryBar draft={draft} />

      <CollectionDetailsForm
        initialValue={draft.collectionDetails}
        quote={quote}
        onBack={() => navigate(getQuoteStepPath(QUOTE_STEPS[1]))}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CollectionDetailsStep;
