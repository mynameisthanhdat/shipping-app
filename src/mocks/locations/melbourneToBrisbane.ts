import { RateCard } from '../compareRates';
import { createMelbourneRouteData } from './createMelbourneRouteData';

/** Indicative Mel→Brisbane rates (GST + fuel levy). Demo figures; swap for API later. */
const RATE_CARDS: RateCard[] = [
  {
    destinationId: 'brisbane',
    title: 'Parcels / Satchels',
    rows: [
      { weight: '250g', itemType: 'Parcel', member: 7.52, frequentUser: 8.18 },
      { weight: '1kg', itemType: 'Parcel', member: 9.87, frequentUser: 8.64 },
      { weight: '5kg', itemType: 'Parcel', member: 12.92, frequentUser: 11.3 },
      { weight: '15kg', itemType: 'Parcel', member: 24.96, frequentUser: 21.09 },
      { weight: '20kg', itemType: 'Parcel', member: 26.96, frequentUser: 22.65 },
      { weight: '25kg', itemType: 'Parcel', member: 32.97, frequentUser: 22.65 },
    ],
  },
  {
    destinationId: 'brisbane',
    title: 'Parcels / Crates',
    rows: [
      { weight: '26kg', itemType: 'Crate', member: 58.32, frequentUser: 58.32 },
      { weight: '50kg', itemType: 'Crate', member: 83.7, frequentUser: 83.7 },
      { weight: '150kg', itemType: 'Crate', member: 189.34, frequentUser: 189.34 },
      { weight: '250kg', itemType: 'Crate', member: 291.31, frequentUser: 291.31 },
    ],
  },
  {
    destinationId: 'brisbane',
    title: 'Pallets',
    rows: [
      { weight: '251kg', itemType: 'Pallet', member: 295.97, frequentUser: 295.97 },
      { weight: '350kg', itemType: 'Pallet', member: 369.21, frequentUser: 369.21 },
      { weight: '500kg', itemType: 'Pallet', member: 369.21, frequentUser: 369.21 },
      { weight: '750kg', itemType: 'Pallet', member: 469.97, frequentUser: 469.97 },
    ],
  },
];

export const MELBOURNE_TO_BRISBANE_DATA = createMelbourneRouteData(
  'Brisbane',
  'brisbane',
  RATE_CARDS,
  [
    'Shipping from Melbourne to Brisbane is simple with Parcelio. Compare quotes from trusted courier providers in one place and book your delivery within minutes.',
    'Whether you are sending a one-off parcel or managing ongoing interstate freight, find an option that suits your budget and timeframe — with tracking from dispatch to delivery.',
  ]
);
