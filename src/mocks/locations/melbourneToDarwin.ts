import { RateCard } from '../compareRates';
import { createMelbourneRouteData } from './createMelbourneRouteData';

/** Indicative Mel→Darwin rates (GST + fuel levy). Demo figures; swap for API later. */
const RATE_CARDS: RateCard[] = [
  {
    destinationId: 'darwin',
    title: 'Parcels / Satchels',
    rows: [
      { weight: '250g', itemType: 'Parcel', member: 8.1, frequentUser: 8.9 },
      { weight: '1kg', itemType: 'Parcel', member: 12.4, frequentUser: 10.85 },
      { weight: '5kg', itemType: 'Parcel', member: 20.5, frequentUser: 17.3 },
      { weight: '15kg', itemType: 'Parcel', member: 33.2, frequentUser: 28.1 },
      { weight: '20kg', itemType: 'Parcel', member: 41.6, frequentUser: 35.2 },
      { weight: '25kg', itemType: 'Parcel', member: 46.8, frequentUser: 39.5 },
    ],
  },
  {
    destinationId: 'darwin',
    title: 'Parcels / Crates',
    rows: [
      { weight: '26kg', itemType: 'Crate', member: 92.4, frequentUser: 92.4 },
      { weight: '50kg', itemType: 'Crate', member: 118.6, frequentUser: 118.6 },
      { weight: '150kg', itemType: 'Crate', member: 225.3, frequentUser: 225.3 },
      { weight: '250kg', itemType: 'Crate', member: 338.9, frequentUser: 338.9 },
    ],
  },
  {
    destinationId: 'darwin',
    title: 'Pallets',
    rows: [
      { weight: '251kg', itemType: 'Pallet', member: 340.2, frequentUser: 340.2 },
      { weight: '350kg', itemType: 'Pallet', member: 455.8, frequentUser: 455.8 },
      { weight: '500kg', itemType: 'Pallet', member: 620.4, frequentUser: 620.4 },
      { weight: '750kg', itemType: 'Pallet', member: 840.1, frequentUser: 840.1 },
    ],
  },
];

export const MELBOURNE_TO_DARWIN_DATA = createMelbourneRouteData(
  'Darwin',
  'darwin',
  RATE_CARDS,
  [
    'Parcelio makes interstate shipping from Melbourne to Darwin simple. Compare courier quotes instantly, book online, and track your freight across Australia — for one-off parcels or ongoing business shipments.',
  ]
);
