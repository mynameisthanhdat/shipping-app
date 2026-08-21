/**
 * Mock courier options for step 2 of the quote wizard.
 *
 * Carrier names are the real freight partners a comparison service lists, but
 * every price, transit time and warranty figure here is fabricated. Values are
 * deliberately spread out so each sort order comes back visibly different.
 *
 * Swap `CARRIER_QUOTES` for a pricing API call keyed off the step 1 package
 * details when the backend exists.
 */

import { CarrierQuote, QuoteSortId } from '../types/quote';

export const CARRIER_QUOTES: CarrierQuote[] = [
  {
    id: 'couriers-please-road',
    carrier: 'Couriers Please',
    transitDays: 4,
    collectionDayOffset: 1,
    collectionWindow: [9, 16],
    warrantyValue: 1500,
    price: 15.97,
  },
  {
    id: 'sendle-standard',
    carrier: 'Sendle',
    transitDays: 5,
    collectionDayOffset: 1,
    collectionWindow: [8, 17],
    warrantyValue: 300,
    price: 13.45,
  },
  {
    id: 'allied-express-road',
    carrier: 'Allied Express',
    transitDays: 2,
    collectionDayOffset: 0,
    collectionWindow: [13, 17],
    warrantyValue: 1500,
    price: 28.6,
  },
  {
    id: 'hunter-express-road',
    carrier: 'Hunter Express',
    transitDays: 3,
    collectionDayOffset: 1,
    collectionWindow: [10, 15],
    warrantyValue: 2000,
    price: 21.3,
  },
  {
    id: 'tnt-overnight',
    carrier: 'TNT Express',
    transitDays: 1,
    collectionDayOffset: 0,
    collectionWindow: [14, 18],
    warrantyValue: 5000,
    price: 42.75,
  },
  {
    id: 'northline-economy',
    carrier: 'Northline',
    transitDays: 6,
    collectionDayOffset: 2,
    collectionWindow: [9, 12],
    warrantyValue: 1000,
    price: 11.8,
  },
];

export type QuoteSortOption = {
  id: QuoteSortId;
  label: string;
};

export const QUOTE_SORTS: QuoteSortOption[] = [
  { id: 'lowest-price', label: 'Lowest Price' },
  { id: 'fastest-delivery', label: 'Fastest Delivery Speed' },
  { id: 'earliest-collection', label: 'Earliest Collection' },
];

export const DEFAULT_QUOTE_SORT: QuoteSortId = 'lowest-price';

/** Earliest moment a courier can collect, as a single sortable number. */
const collectionRank = (quote: CarrierQuote) =>
  quote.collectionDayOffset * 24 + quote.collectionWindow[0];

/**
 * Each comparator falls back to the other two dimensions, so rows never shuffle
 * arbitrarily when the primary key ties.
 */
const COMPARATORS: Record<QuoteSortId, (a: CarrierQuote, b: CarrierQuote) => number> = {
  'lowest-price': (a, b) => a.price - b.price || a.transitDays - b.transitDays,
  'fastest-delivery': (a, b) => a.transitDays - b.transitDays || a.price - b.price,
  'earliest-collection': (a, b) => collectionRank(a) - collectionRank(b) || a.price - b.price,
};

export const sortCarrierQuotes = (
  quotes: CarrierQuote[],
  sortId: QuoteSortId
): CarrierQuote[] => [...quotes].sort(COMPARATORS[sortId]);
