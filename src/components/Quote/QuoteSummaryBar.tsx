import React from 'react';
import { CARRIER_QUOTES } from '../../mocks/carrierQuotes';
import { ITEM_TYPES } from '../../mocks/quoteOptions';
import { QuoteDraft } from '../../types/quote';

const COLUMN_TITLE = 'text-sm font-bold text-navy';
const ROW = 'text-sm text-navy';
const KEY = 'font-bold';

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <p className={ROW}>
    <span className={KEY}>{label}:</span> {value}
  </p>
);

/** Recap of the choices made in steps 1 and 2, shown above the step 3 form. */
const QuoteSummaryBar: React.FC<{ draft: QuoteDraft }> = ({ draft }) => {
  const { packageDetails, selectedQuoteId } = draft;
  const [item] = packageDetails.items;
  const itemType = ITEM_TYPES.find((option) => option.id === item?.itemType);
  const quote = CARRIER_QUOTES.find((option) => option.id === selectedQuoteId);
  const extraItems = packageDetails.items.length - 1;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <section className="space-y-1.5">
        <h2 className={COLUMN_TITLE}>Package Details</h2>
        <Row label="Package type" value={itemType?.label ?? '—'} />
        <Row label="Weight" value={item ? `${item.weight} kg` : '—'} />
        <Row
          label="Dimensions"
          value={
            item
              ? `(L) ${item.length}cm x (W) ${item.width}cm x (H) ${item.height}cm`
              : '—'
          }
        />
        <Row label="Quantity" value={String(item?.quantity ?? 0)} />
        {extraItems > 0 && (
          <p className="text-sm text-muted">
            {`+ ${extraItems} more item${extraItems === 1 ? '' : 's'}`}
          </p>
        )}
      </section>

      <section className="space-y-1.5 md:border-l md:border-black/10 md:pl-6">
        <h2 className={COLUMN_TITLE}>Quote</h2>
        <Row label="Carrier" value={quote?.carrier ?? '—'} />
        <Row
          label="Est. delivery"
          value={quote ? `${quote.transitDays} business days` : '—'}
        />
        <Row label="Price" value={quote ? `$${quote.price.toFixed(2)}` : '—'} />
      </section>

      <section className="space-y-1.5 md:border-l md:border-black/10 md:pl-6">
        <h2 className={COLUMN_TITLE}>Address Details</h2>
        <p className={ROW}>
          <span className={KEY}>From:</span>{' '}
          {`(${packageDetails.originAddressType === 'commercial' ? 'Commercial' : 'Residential'})`}
        </p>
        <p className="pl-4 text-sm text-navy">
          {packageDetails.originPostcode ? `${packageDetails.originPostcode}, Australia` : '—'}
        </p>
        <p className={ROW}>
          <span className={KEY}>To:</span>{' '}
          {`(${packageDetails.destinationAddressType === 'commercial' ? 'Commercial' : 'Residential'})`}
        </p>
        <p className="pl-4 text-sm text-navy">
          {packageDetails.destinationPostcode
            ? `${packageDetails.destinationPostcode}, Australia`
            : '—'}
        </p>
      </section>
    </div>
  );
};

export default QuoteSummaryBar;
