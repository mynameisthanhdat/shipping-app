import { RateCard } from '../compareRates';
import { createMelbourneRouteData } from './createMelbourneRouteData';

/** Indicative Mel→Perth rates (GST + fuel levy). Demo figures; swap for API later. */
const RATE_CARDS: RateCard[] = [
  {
    destinationId: 'perth',
    title: 'Parcels / Satchels',
    rows: [
      { weight: '250g', itemType: 'Parcel', member: 7.52, frequentUser: 8.33 },
      { weight: '1kg', itemType: 'Parcel', member: 11.66, frequentUser: 10.19 },
      { weight: '5kg', itemType: 'Parcel', member: 19.12, frequentUser: 16.13 },
      { weight: '15kg', itemType: 'Parcel', member: 30.69, frequentUser: 25.97 },
      { weight: '20kg', itemType: 'Parcel', member: 38.88, frequentUser: 32.89 },
      { weight: '25kg', itemType: 'Parcel', member: 43.12, frequentUser: 36.46 },
    ],
  },
  {
    destinationId: 'perth',
    title: 'Parcels / Crates',
    rows: [
      { weight: '26kg', itemType: 'Crate', member: 84.29, frequentUser: 84.29 },
      { weight: '50kg', itemType: 'Crate', member: 107.2, frequentUser: 107.2 },
      { weight: '150kg', itemType: 'Crate', member: 200.76, frequentUser: 200.76 },
      { weight: '250kg', itemType: 'Crate', member: 306.71, frequentUser: 306.71 },
    ],
  },
  {
    destinationId: 'perth',
    title: 'Pallets',
    rows: [
      { weight: '251kg', itemType: 'Pallet', member: 307.76, frequentUser: 307.76 },
      { weight: '350kg', itemType: 'Pallet', member: 412.63, frequentUser: 412.63 },
      { weight: '500kg', itemType: 'Pallet', member: 571.54, frequentUser: 571.54 },
      { weight: '750kg', itemType: 'Pallet', member: 774.72, frequentUser: 774.72 },
    ],
  },
];

export const MELBOURNE_TO_PERTH_DATA = createMelbourneRouteData(
  'Perth',
  'perth',
  RATE_CARDS,
  [
    'Parcelio makes it easy to send freight and parcels from Melbourne to Perth with reliable interstate courier solutions. Whether you are booking frequent business deliveries or a one-off shipment to Western Australia, compare quotes instantly and arrange delivery within minutes.',
    'Choose from a range of leading Australian carriers, access real-time parcel tracking, and find a shipping option that suits your preferred timeframe and budget.',
  ]
);
