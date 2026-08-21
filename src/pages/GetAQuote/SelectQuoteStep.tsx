import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarrierQuoteTable from '../../components/Quote/CarrierQuoteTable';
import QuoteSortBar from '../../components/Quote/QuoteSortBar';
import { useQuote } from '../../components/Quote/QuoteContext';
import {
  CARRIER_QUOTES,
  DEFAULT_QUOTE_SORT,
  sortCarrierQuotes,
} from '../../mocks/carrierQuotes';
import { QUOTE_STEPS, getQuoteStepPath } from '../../routes/quoteSteps';
import { CarrierQuote, QuoteSortId } from '../../types/quote';

const SelectQuoteStep: React.FC = () => {
  const navigate = useNavigate();
  const { draft, patch } = useQuote();
  const [sort, setSort] = useState<QuoteSortId>(DEFAULT_QUOTE_SORT);

  const quotes = useMemo(() => sortCarrierQuotes(CARRIER_QUOTES, sort), [sort]);

  const handleSelect = (quote: CarrierQuote) => {
    patch('selectedQuoteId', quote.id);
    navigate(getQuoteStepPath(QUOTE_STEPS[2]));
  };

  return (
    <div className="space-y-6">
      <QuoteSortBar value={sort} onChange={setSort} />

      <CarrierQuoteTable
        quotes={quotes}
        selectedId={draft.selectedQuoteId}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default SelectQuoteStep;
