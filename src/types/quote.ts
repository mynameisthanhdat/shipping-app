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

/** Who is filling in step 3 — drives which field set each side shows. */
export type PartyRole = 'sender' | 'receiver' | 'third-party';

export type PartySide = 'collectFrom' | 'deliveryTo';

export type PartyFieldName =
  | 'thirdPartyName'
  | 'thirdPartyPhone'
  | 'thirdPartyCompany'
  | 'thirdPartyEmail'
  | 'contactName'
  | 'contactPhone'
  | 'contactEmail'
  | 'deliveryOption'
  | 'addressSearch'
  | 'company'
  | 'unitStreetNumber'
  | 'streetName'
  | 'streetType';

/** Partial because the field set differs per role; see collectionFields.ts. */
export type PartyDetails = Partial<Record<PartyFieldName, string>>;

/** Step 3 — collection details, addresses and handling instructions. */
export type CollectionDetails = {
  /** The declaration itself — the shipment carries none of the listed goods. */
  dangerousGoodsAccepted: boolean;
  productDescription: string;
  role: PartyRole;
  collectFrom: PartyDetails;
  deliveryTo: PartyDetails;
  collectionDate: string;
  pickupFrontDoorIfUnattended: boolean;
  pickupInstructions: string;
  authorityToLeave: boolean;
  authorityToLeaveLocation: string;
  deliveryInstructions: string;
};

export const createCollectionDetails = (): CollectionDetails => ({
  dangerousGoodsAccepted: false,
  productDescription: '',
  role: 'sender',
  collectFrom: {},
  deliveryTo: {},
  collectionDate: '',
  pickupFrontDoorIfUnattended: true,
  pickupInstructions: '',
  authorityToLeave: true,
  authorityToLeaveLocation: '',
  deliveryInstructions: '',
});

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

/** Step 4 — the consents a booking cannot proceed without. */
export type AdditionalInformation = {
  transitWarrantyAccepted: boolean;
  termsAccepted: boolean;
  consignmentNoteAccepted: boolean;
};

export const createAdditionalInformation = (): AdditionalInformation => ({
  transitWarrantyAccepted: false,
  termsAccepted: false,
  consignmentNoteAccepted: false,
});

export const isAdditionalInformationComplete = (value: AdditionalInformation): boolean =>
  value.transitWarrantyAccepted && value.termsAccepted && value.consignmentNoteAccepted;

/** Step 5 — payment method only. */
export type PaymentMethod = 'paypal' | 'credit-card';

export type PaymentSelection = {
  method: PaymentMethod;
};

export const createPaymentSelection = (): PaymentSelection => ({ method: 'credit-card' });

/**
 * The whole wizard state. Add `collectionDetails`, `additionalInformation` and
 * `payment` slices here as steps 3–5 are built, then widen
 * `getCompletedStepCount` in routes/quoteSteps.ts to match.
 */
export type QuoteDraft = {
  packageDetails: PackageDetails;
  /** Set by step 2 once the courier options screen exists. */
  selectedQuoteId: string | null;
  collectionDetails: CollectionDetails;
  additionalInformation: AdditionalInformation;
  /**
   * Method only. Card details are NEVER stored here — they stay in the payment
   * form's local state and go straight to the payment provider, so they never
   * travel through shared wizard state that other steps can read or log.
   */
  payment: PaymentSelection;
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
  collectionDetails: createCollectionDetails(),
  additionalInformation: createAdditionalInformation(),
  payment: createPaymentSelection(),
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
