import { RateCard } from '../compareRates';
import { createMelbourneRouteData } from './createMelbourneRouteData';

/** Indicative Mel→Sydney rates (GST + fuel levy). Demo figures; swap for API later. */
const RATE_CARDS: RateCard[] = [
  {
    destinationId: 'sydney',
    title: 'Parcels / Satchels',
    rows: [
      { weight: '250g', itemType: 'Parcel', member: 7.52, frequentUser: 8.18 },
      { weight: '1kg', itemType: 'Parcel', member: 9.58, frequentUser: 8.38 },
      { weight: '5kg', itemType: 'Parcel', member: 11.02, frequentUser: 9.64 },
      { weight: '15kg', itemType: 'Parcel', member: 20.37, frequentUser: 17.81 },
      { weight: '20kg', itemType: 'Parcel', member: 24.07, frequentUser: 21.05 },
      { weight: '25kg', itemType: 'Parcel', member: 27.77, frequentUser: 22.65 },
    ],
  },
  {
    destinationId: 'sydney',
    title: 'Parcels / Crates',
    rows: [
      { weight: '26kg', itemType: 'Crate', member: 43.66, frequentUser: 43.66 },
      { weight: '50kg', itemType: 'Crate', member: 56.79, frequentUser: 56.79 },
      { weight: '150kg', itemType: 'Crate', member: 111.49, frequentUser: 111.49 },
      { weight: '250kg', itemType: 'Crate', member: 166.13, frequentUser: 166.13 },
    ],
  },
  {
    destinationId: 'sydney',
    title: 'Pallets',
    rows: [
      { weight: '251kg', itemType: 'Pallet', member: 166.65, frequentUser: 166.65 },
      { weight: '350kg', itemType: 'Pallet', member: 206.31, frequentUser: 206.31 },
      { weight: '500kg', itemType: 'Pallet', member: 206.31, frequentUser: 206.31 },
      { weight: '750kg', itemType: 'Pallet', member: 256.34, frequentUser: 256.34 },
    ],
  },
];

export const MELBOURNE_TO_SYDNEY_DATA = createMelbourneRouteData(
  'Sydney',
  'sydney',
  RATE_CARDS,
  [
    'Parcelio offers reliable and affordable shipping from Melbourne to Sydney. Compare trusted national courier providers, book online in minutes, and track your parcel for the whole journey — whether you are shipping for business or personally.',
  ]
);
