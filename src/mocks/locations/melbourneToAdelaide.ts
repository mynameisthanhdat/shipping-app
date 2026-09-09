import { RateCard } from '../compareRates';
import { createMelbourneRouteData } from './createMelbourneRouteData';

/** Indicative Mel→Adelaide rates (GST + fuel levy). Demo figures; swap for API later. */
const RATE_CARDS: RateCard[] = [
  {
    destinationId: 'adelaide',
    title: 'Parcels / Satchels',
    rows: [
      { weight: '250g', itemType: 'Parcel', member: 7.52, frequentUser: 8.18 },
      { weight: '1kg', itemType: 'Parcel', member: 9.72, frequentUser: 8.5 },
      { weight: '5kg', itemType: 'Parcel', member: 12.1, frequentUser: 10.58 },
      { weight: '15kg', itemType: 'Parcel', member: 22.8, frequentUser: 19.4 },
      { weight: '20kg', itemType: 'Parcel', member: 25.9, frequentUser: 22.0 },
      { weight: '25kg', itemType: 'Parcel', member: 29.8, frequentUser: 22.65 },
    ],
  },
  {
    destinationId: 'adelaide',
    title: 'Parcels / Crates',
    rows: [
      { weight: '26kg', itemType: 'Crate', member: 51.2, frequentUser: 51.2 },
      { weight: '50kg', itemType: 'Crate', member: 70.4, frequentUser: 70.4 },
      { weight: '150kg', itemType: 'Crate', member: 150.8, frequentUser: 150.8 },
      { weight: '250kg', itemType: 'Crate', member: 228.5, frequentUser: 228.5 },
    ],
  },
  {
    destinationId: 'adelaide',
    title: 'Pallets',
    rows: [
      { weight: '251kg', itemType: 'Pallet', member: 231.4, frequentUser: 231.4 },
      { weight: '350kg', itemType: 'Pallet', member: 288.0, frequentUser: 288.0 },
      { weight: '500kg', itemType: 'Pallet', member: 288.0, frequentUser: 288.0 },
      { weight: '750kg', itemType: 'Pallet', member: 363.2, frequentUser: 363.2 },
    ],
  },
];

export const MELBOURNE_TO_ADELAIDE_DATA = createMelbourneRouteData(
  'Adelaide',
  'adelaide',
  RATE_CARDS,
  [
    'Parcelio offers reliable and affordable shipping from Melbourne to Adelaide. Compare trusted national courier providers, book online in minutes, and track your parcel for the whole journey — whether you are shipping for business or personally.',
  ]
);
