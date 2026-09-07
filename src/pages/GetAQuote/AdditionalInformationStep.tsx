import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdditionalInformationForm from '../../components/Quote/AdditionalInformationForm';
import QuoteSummaryBar from '../../components/Quote/QuoteSummaryBar';
import { useQuote } from '../../components/Quote/QuoteContext';
import { CARRIER_QUOTES } from '../../mocks/carrierQuotes';
import { QUOTE_STEPS, getQuoteStepPath } from '../../routes/quoteSteps';
import { AdditionalInformation } from '../../types/quote';

const AdditionalInformationStep: React.FC = () => {
  const navigate = useNavigate();
  const { draft, patch } = useQuote();

  const quote = CARRIER_QUOTES.find((option) => option.id === draft.selectedQuoteId);

  const handleSubmit = (additionalInformation: AdditionalInformation) => {
    patch('additionalInformation', additionalInformation);
    navigate(getQuoteStepPath(QUOTE_STEPS[4]));
  };

  return (
    <div className="space-y-8">
      <QuoteSummaryBar draft={draft} variant="full" />

      <AdditionalInformationForm
        initialValue={draft.additionalInformation}
        carrier={quote?.carrier}
        onBack={() => navigate(getQuoteStepPath(QUOTE_STEPS[2]))}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AdditionalInformationStep;
