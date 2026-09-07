import React from 'react';
import { CARRIER_QUOTES } from '../../mocks/carrierQuotes';
import { ITEM_TYPES } from '../../mocks/quoteOptions';
import { CollectionDetails, PartyDetails, QuoteDraft } from '../../types/quote';

const ROW = 'text-sm text-navy';
const KEY = 'font-bold';
const INDENT = 'pl-4 text-sm text-navy';

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <p className={ROW}>
    <span className={KEY}>{label}:</span> {value}
  </p>
);

const formatWindow = (window?: [number, number]) => {
  if (!window) return '';
  const label = (hour: number) =>
    `${hour % 12 === 0 ? 12 : hour % 12}:00${hour < 12 ? 'am' : 'pm'}`;

  return `${label(window[0])}-${label(window[1])}`;
};

/** Street line assembled from the step 3 fields, falling back to the postcode. */
const formatAddress = (party: PartyDetails, postcode: string) => {
  const street = [party.unitStreetNumber, party.streetName, party.streetType]
    .filter(Boolean)
    .join(' ');

  return [street, postcode, 'Australia'].filter(Boolean).join(', ');
};

const listInstructions = (details: CollectionDetails): string[] => {
  const lines: string[] = [];

  if (details.pickupFrontDoorIfUnattended) {
    lines.push('Pickup from front door if unattended');
  }
  if (details.authorityToLeave) {
    lines.push(
      details.authorityToLeaveLocation
        ? `Authority to leave at ${details.authorityToLeaveLocation.toLowerCase()}`
        : 'Authority to leave'
    );
  }
  if (details.pickupInstructions.trim()) lines.push(details.pickupInstructions.trim());
  if (details.deliveryInstructions.trim()) lines.push(details.deliveryInstructions.trim());

  return lines;
};

export type QuoteSummaryBarProps = {
  draft: QuoteDraft;
  /**
   * `compact` recaps steps 1–2 only. `full` adds everything captured in step 3,
   * so later steps can show the complete booking at a glance.
   */
  variant?: 'compact' | 'full';
};

const QuoteSummaryBar: React.FC<QuoteSummaryBarProps> = ({ draft, variant = 'compact' }) => {
  const { packageDetails, selectedQuoteId, collectionDetails } = draft;
  const [item] = packageDetails.items;
  const itemType = ITEM_TYPES.find((option) => option.id === item?.itemType);
  const quote = CARRIER_QUOTES.find((option) => option.id === selectedQuoteId);
  const extraItems = packageDetails.items.length - 1;
  const isFull = variant === 'full';

  const columnTitle = `text-sm font-bold text-navy${isFull ? ' uppercase tracking-wide' : ''}`;
  const instructions = isFull ? listInstructions(collectionDetails) : [];
  const addressType = (type: string) => (type === 'commercial' ? 'Commercial' : 'Residential');

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <section className="space-y-1.5">
        <h2 className={columnTitle}>Package Details</h2>
        <Row label="Package type" value={itemType?.label ?? '—'} />
        <Row label="Weight" value={item ? `${item.weight} kg` : '—'} />
        <Row
          label="Dimensions"
          value={
            item ? `(L) ${item.length}cm x (W) ${item.width}cm x (H) ${item.height}cm` : '—'
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
        <h2 className={columnTitle}>Quote</h2>
        <Row label="Carrier" value={quote?.carrier ?? '—'} />
        <Row
          label="Est. delivery"
          value={quote ? `${quote.transitDays} business days` : '—'}
        />
        <Row label="Price" value={quote ? `$${quote.price.toFixed(2)}` : '—'} />

        {isFull && collectionDetails.collectionDate && (
          <>
            <Row label="Pickup" value={collectionDetails.collectionDate} />
            <p className={INDENT}>{formatWindow(quote?.collectionWindow)}</p>
          </>
        )}
      </section>

      <section className="space-y-1.5 md:border-l md:border-black/10 md:pl-6">
        <h2 className={columnTitle}>Address Details</h2>

        <p className={ROW}>
          <span className={KEY}>From:</span>{' '}
          {`(${addressType(packageDetails.originAddressType)})`}
        </p>
        <p className={INDENT}>
          {isFull
            ? formatAddress(collectionDetails.collectFrom, packageDetails.originPostcode)
            : packageDetails.originPostcode || '—'}
        </p>

        <p className={ROW}>
          <span className={KEY}>To:</span>{' '}
          {`(${addressType(packageDetails.destinationAddressType)})`}
        </p>
        <p className={INDENT}>
          {isFull
            ? formatAddress(collectionDetails.deliveryTo, packageDetails.destinationPostcode)
            : packageDetails.destinationPostcode || '—'}
        </p>

        {instructions.length > 0 && (
          <>
            <p className={`${ROW} ${KEY}`}>Special instruction:</p>
            {instructions.map((line) => (
              <p key={line} className={INDENT}>
                {line}
              </p>
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default QuoteSummaryBar;
