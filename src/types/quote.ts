/**
 * Data model for the Get a Quote wizard.
 *
 * `QuoteDraft` holds one slice per step so each screen owns its own shape and
 * later steps can be added without touching the earlier ones.
 */

export type AddressType = 'commercial' | 'residential';

export type ItemTypeId =
  | 'carton-box'
  | 'satchel'
  | 'crate'
  | 'pallet'
  | 'tube'
  | 'other';

/**
 * Measurements stay as strings because they are bound straight to text inputs —
 * a half-typed "1." must survive a re-render. Parse with `Number()` on submit.
 */
export type QuoteItem = {
  id: string;
  quantity: number;
  itemType: ItemTypeId;
  weight: string;
  length: string;
  width: string;
  height: string;
};

/** Step 1 — the slice that the reusable PackageDetailsForm produces. */
export type PackageDetails = {
  originPostcode: string;
  originAddressType: AddressType;
  destinationPostcode: string;
  destinationAddressType: AddressType;
  items: QuoteItem[];
};

/** Step 2 — one courier option returned for the shipment. */
export type CarrierQuote = {
  id: string;
  carrier: string;
  /** Business days in transit. */
  transitDays: number;
  /** Days from today the courier can collect: 0 = today, 1 = tomorrow. */
  collectionDayOffset: number;
  /** Collection window as 24h hours, e.g. [9, 16] renders as "9am-4pm". */
  collectionWindow: [number, number];
  /** Included transit warranty, in dollars. */
  warrantyValue: number;
  price: number;
};

export type QuoteSortId = 'lowest-price' | 'fastest-delivery' | 'earliest-collection';

/**
 * The whole wizard state. Add `collectionDetails`, `additionalInformation` and
 * `payment` slices here as steps 3–5 are built, then widen
 * `getCompletedStepCount` in routes/quoteSteps.ts to match.
 */
export type QuoteDraft = {
  packageDetails: PackageDetails;
  /** Set by step 2 once the courier options screen exists. */
  selectedQuoteId: string | null;
};

let itemSequence = 0;

/** Ids only need to be stable within a session, so a counter beats a uuid here. */
export const createQuoteItem = (): QuoteItem => {
  itemSequence += 1;

  return {
    id: `item-${itemSequence}`,
    quantity: 1,
    itemType: 'carton-box',
    weight: '',
    length: '',
    width: '',
    height: '',
  };
};

export const createEmptyPackageDetails = (): PackageDetails => ({
  originPostcode: '',
  originAddressType: 'commercial',
  destinationPostcode: '',
  destinationAddressType: 'commercial',
  items: [createQuoteItem()],
});

export const createQuoteDraft = (packageDetails?: PackageDetails): QuoteDraft => ({
  packageDetails: packageDetails ?? createEmptyPackageDetails(),
  selectedQuoteId: null,
});

/** True once step 1 holds enough to price a shipment. */
export const isPackageDetailsComplete = (details: PackageDetails): boolean =>
  Boolean(details.originPostcode && details.destinationPostcode) &&
  details.items.every(
    (item) =>
      item.quantity > 0 &&
      [item.weight, item.length, item.width, item.height].every(
        (field) => field !== '' && Number(field) > 0
      )
  );
