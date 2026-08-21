import React from 'react';
import { CarrierQuote } from '../../types/quote';

const HEAD_CELL = 'whitespace-nowrap px-3 py-2.5 text-left text-xs font-normal text-navy';
const BODY_CELL = 'px-3 py-3 text-left text-xs text-navy';

const formatHour = (hour: number) => {
  const suffix = hour < 12 ? 'am' : 'pm';
  const display = hour % 12 === 0 ? 12 : hour % 12;

  return `${display}${suffix}`;
};

const formatTransit = (days: number) =>
  `${days} Business Day${days === 1 ? '' : 's'}`;

const formatCollection = (quote: CarrierQuote) => {
  const [from, to] = quote.collectionWindow;
  const day =
    quote.collectionDayOffset === 0
      ? 'Today'
      : quote.collectionDayOffset === 1
        ? 'Tomorrow'
        : `In ${quote.collectionDayOffset} days`;

  return `${day} ${formatHour(from)}-${formatHour(to)}`;
};

const formatWarranty = (value: number) =>
  `Warranty included up to $${value.toLocaleString('en-AU')}`;

export type CarrierQuoteTableProps = {
  quotes: CarrierQuote[];
  /** Highlights the row the user already picked, when returning to this step. */
  selectedId?: string | null;
  onSelect: (quote: CarrierQuote) => void;
};

const CarrierQuoteTable: React.FC<CarrierQuoteTableProps> = ({
  quotes,
  selectedId,
  onSelect,
}) => (
  <div className="overflow-x-auto border-t border-black/10 pt-4">
    <table className="w-full min-w-[720px] border-collapse">
      <caption className="mb-2 text-left text-base font-bold text-navy">
        Select a carrier for shipping
      </caption>

      <thead>
        <tr className="border-b border-black/10">
          <th scope="col" className={HEAD_CELL}>
            Carrier
          </th>
          <th scope="col" className={HEAD_CELL}>
            Estimated Delivery Time
          </th>
          <th scope="col" className={HEAD_CELL}>
            Earliest Pickup/Parcel Drop
          </th>
          <th scope="col" className={HEAD_CELL}>
            Transit Warranty Value
          </th>
          <th scope="col" className={HEAD_CELL}>
            Price
          </th>
          <th scope="col" className={HEAD_CELL}>
            Action
          </th>
        </tr>
      </thead>

      <tbody>
        {quotes.map((quote) => (
          <tr
            key={quote.id}
            className={`border-b border-black/10 ${
              quote.id === selectedId ? 'bg-brand/5' : ''
            }`}
          >
            <th
              scope="row"
              className={`${BODY_CELL} whitespace-nowrap font-bold uppercase tracking-wide`}
            >
              {quote.carrier}
            </th>
            <td className={`${BODY_CELL} whitespace-nowrap`}>
              {formatTransit(quote.transitDays)}
            </td>
            <td className={`${BODY_CELL} whitespace-nowrap`}>{formatCollection(quote)}</td>
            <td className={BODY_CELL}>{formatWarranty(quote.warrantyValue)}</td>
            <td className={`${BODY_CELL} whitespace-nowrap`}>${quote.price.toFixed(2)}</td>
            <td className={BODY_CELL}>
              <button
                type="button"
                onClick={() => onSelect(quote)}
                className="whitespace-nowrap rounded-md bg-brand px-4 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-hover"
              >
                Book Now
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CarrierQuoteTable;
