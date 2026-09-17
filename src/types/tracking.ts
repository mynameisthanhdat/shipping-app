export type TrackingLookup = {
  consignmentNumber: string;
};

export const createEmptyTrackingLookup = (): TrackingLookup => ({
  consignmentNumber: '',
});

export const isTrackingLookupComplete = (lookup: TrackingLookup): boolean =>
  Boolean(lookup.consignmentNumber.trim());

/**
 * The five milestones every consignment passes through. Order matters: the
 * progress bar and the "how far along is it" logic both read this array.
 */
export const TRACKING_STAGES = [
  'booked',
  'picked-up',
  'in-transit',
  'out-for-delivery',
  'delivered',
] as const;

export type TrackingStage = (typeof TRACKING_STAGES)[number];

export const TRACKING_STAGE_LABELS: Record<TrackingStage, string> = {
  booked: 'Booked',
  'picked-up': 'Picked up',
  'in-transit': 'In transit',
  'out-for-delivery': 'Out for delivery',
  delivered: 'Delivered',
};

/** One carrier scan. */
export type TrackingEvent = {
  id: string;
  /** ISO timestamp — formatted for display, never stored pre-formatted. */
  timestamp: string;
  status: string;
  location: string;
  description?: string;
};

export type TrackingParty = {
  name: string;
  company?: string;
  suburb: string;
  state: string;
  postcode: string;
};

export type TrackedShipment = {
  consignmentNumber: string;
  carrier: string;
  service: string;
  stage: TrackingStage;
  /** Present when the consignment is held up; rendered as a warning callout. */
  exception?: string;
  /** Where the parcel was last scanned. */
  currentLocation: string;
  /** ISO timestamp of the promised delivery window start. */
  estimatedDelivery: string;
  deliveryWindow: string;
  deliveredAt?: string;
  signedBy?: string;
  sender: TrackingParty;
  receiver: TrackingParty;
  itemType: string;
  quantity: number;
  weightKg: number;
  dimensionsCm: string;
  /** Newest scan first — the order the timeline renders in. */
  events: TrackingEvent[];
};

export const stageIndex = (stage: TrackingStage): number =>
  TRACKING_STAGES.indexOf(stage);
