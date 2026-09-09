import { RateCard } from '../compareRates';
import { createMelbourneRouteData } from './createMelbourneRouteData';

/** Indicative Mel→Canberra rates (GST + fuel levy). Demo figures; swap for API later. */
const RATE_CARDS: RateCard[] = [
  {
    destinationId: 'canberra',
    title: 'Parcels / Satchels',
    rows: [
      { weight: '250g', itemType: 'Parcel', member: 7.52, frequentUser: 8.18 },
      { weight: '1kg', itemType: 'Parcel', member: 9.45, frequentUser: 8.28 },
      { weight: '5kg', itemType: 'Parcel', member: 11.4, frequentUser: 9.95 },
      { weight: '15kg', itemType: 'Parcel', member: 21.1, frequentUser: 18.4 },
      { weight: '20kg', itemType: 'Parcel', member: 24.6, frequentUser: 21.5 },
      { weight: '25kg', itemType: 'Parcel', member: 28.4, frequentUser: 22.65 },
    ],
  },
  {
    destinationId: 'canberra',
    title: 'Parcels / Crates',
    rows: [
      { weight: '26kg', itemType: 'Crate', member: 46.8, frequentUser: 46.8 },
      { weight: '50kg', itemType: 'Crate', member: 61.2, frequentUser: 61.2 },
      { weight: '150kg', itemType: 'Crate', member: 128.5, frequentUser: 128.5 },
      { weight: '250kg', itemType: 'Crate', member: 188.9, frequentUser: 188.9 },
    ],
  },
  {
    destinationId: 'canberra',
    title: 'Pallets',
    rows: [
      { weight: '251kg', itemType: 'Pallet', member: 190.2, frequentUser: 190.2 },
      { weight: '350kg', itemType: 'Pallet', member: 235.6, frequentUser: 235.6 },
      { weight: '500kg', itemType: 'Pallet', member: 235.6, frequentUser: 235.6 },
      { weight: '750kg', itemType: 'Pallet', member: 295.4, frequentUser: 295.4 },
    ],
  },
];

export const MELBOURNE_TO_CANBERRA_DATA = createMelbourneRouteData(
  'Canberra',
  'canberra',
  RATE_CARDS,
  [
    'Shipping from Melbourne to Canberra is straightforward with Parcelio. Compare trusted courier providers, book in minutes, and track your delivery from pickup through to the ACT.',
  ]
);
