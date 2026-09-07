import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentForm from '../../components/Quote/PaymentForm';
import QuoteSummaryBar from '../../components/Quote/QuoteSummaryBar';
import { useQuote } from '../../components/Quote/QuoteContext';
import { QUOTE_STEPS, getQuoteStepPath } from '../../routes/quoteSteps';
import { PaymentMethod } from '../../types/quote';

const PaymentStep: React.FC = () => {
  const navigate = useNavigate();
  const { draft, patch } = useQuote();
  const [submitted, setSubmitted] = useState(false);

  const changeMethod = (method: PaymentMethod) => patch('payment', { method });

  return (
    <div className="space-y-8">
      <QuoteSummaryBar draft={draft} variant="full" />

      {submitted ? (
        <div className="border-t border-black/10 pt-8">
          <div className="rounded-lg border border-black/10 bg-muted-surface/20 p-6">
            <h2 className="text-[15px] font-bold text-navy">Booking details captured</h2>
            <p className="mt-2 text-sm text-navy">
              Card details validated and the booking is ready to submit. No charge has been
              made — the payment provider and booking API are not connected yet.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-5 rounded-md bg-muted-surface/40 px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-muted-surface/70"
            >
              Back to payment
            </button>
          </div>
        </div>
      ) : (
        <PaymentForm
          method={draft.payment.method}
          onMethodChange={changeMethod}
          onBack={() => navigate(getQuoteStepPath(QUOTE_STEPS[3]))}
          onSubmit={() => setSubmitted(true)}
        />
      )}
    </div>
  );
};

export default PaymentStep;
