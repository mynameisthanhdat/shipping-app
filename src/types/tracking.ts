export type TrackingLookup = {
  consignmentNumber: string;
};

export const createEmptyTrackingLookup = (): TrackingLookup => ({
  consignmentNumber: '',
});

export const isTrackingLookupComplete = (lookup: TrackingLookup): boolean =>
  Boolean(lookup.consignmentNumber.trim());
