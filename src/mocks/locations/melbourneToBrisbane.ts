import { InterstateRouteData } from '../../types/locations';

export const MELBOURNE_TO_BRISBANE_DATA: InterstateRouteData = {
  from: 'Melbourne',
  to: 'Brisbane',
  intro: [
    'Shipping from Melbourne to Brisbane is simple with Parcelio. Compare quotes from trusted courier providers in one place and book your delivery within minutes.',
    'Whether you’re sending a one-off parcel or managing ongoing interstate freight, find an option that suits your budget and timeframe — with tracking from dispatch to delivery.',
  ],
  rateCards: [
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
  ],
  benefits: [
    {
      id: 'compare',
      title: 'Compare Top Couriers Instantly',
      body: 'Parcelio connects you with leading local and national carriers so you can select the service that best aligns with your timing, freight needs and budget.',
    },
    {
      id: 'express',
      title: 'Express & Standard Delivery Options',
      body: 'Need next-business-day? Overnight couriers cover priority Melbourne to Brisbane consignments. Standard freight stays available for non-urgent, cost-conscious shipping.',
    },
    {
      id: 'savings',
      title: 'Save with Competitive Courier Rates',
      body: 'Compare courier quotes from multiple providers at once and secure a Melbourne to Brisbane delivery option that fits your budget.',
    },
    {
      id: 'tracking',
      title: 'Real-Time Delivery Tracking',
      body: 'Stay informed from collection to final delivery with real-time tracking on every shipment.',
    },
    {
      id: 'door-to-door',
      title: 'Door-to-Door Convenience',
      body: 'Pick-up from your home or business in Melbourne and deliver directly to a residential or commercial address in Brisbane.',
    },
    {
      id: 'flexible',
      title: 'Flexible Delivery for Businesses & Individuals',
      body: 'Built for eCommerce fulfilment, recurring freight and personal deliveries, with simple online booking when you need a one-off shipment.',
    },
    {
      id: 'carbon',
      title: '100% Carbon Neutral Shipping',
      body: 'All shipments are carbon neutral at no extra cost, so you keep competitive pricing while reducing your footprint on every Melbourne to Brisbane delivery.',
    },
  ],
  keyInfo: [
    {
      id: 'timeframes',
      title: 'Melbourne to Brisbane Delivery Timeframes',
      body: 'Timeframes differ by shipping option. Overnight services offer faster turnaround; standard options suit non-urgent freight. Indicative transit times appear with each live quote.',
    },
    {
      id: 'items',
      title: 'Items You Can Send from Melbourne to Brisbane',
      body: 'Ship luggage, documents, office equipment, sports equipment, vehicle parts and more. Dangerous goods, perishables, unpackaged goods and oversized items cannot be accepted.',
    },
    {
      id: 'packaging',
      title: 'Packaging Requirements',
      showPackagingLink: true,
      body: 'Parcels cannot exceed 5 metres (500cm) in length. Consignments over 25kg should be split or palletised for forklift pickup.',
    },
  ],
  faqs: [
    {
      id: 'cost',
      question: 'How much does Melbourne to Brisbane shipping cost?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Delivery costs depend on size, weight and service type. Use our domestic shipping rates calculator or get an instant quote to estimate pricing.',
        },
      ],
    },
    {
      id: 'duration',
      question: 'How long does delivery take from Melbourne to Brisbane?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Transit times vary by courier. Overnight deliveries are faster; standard services are typically more cost-effective.',
        },
      ],
    },
    {
      id: 'track',
      question: 'Can I track my Melbourne to Brisbane delivery?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Yes. Our parcel tracking tool lets you monitor your delivery in real time from dispatch through to arrival.',
        },
      ],
    },
    {
      id: 'cancel',
      question: 'Can I modify or cancel my Melbourne to Brisbane courier booking?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Yes. Bookings can be changed or cancelled prior to collection. Additional charges may apply for late amendments or incorrect shipment details.',
        },
      ],
    },
    {
      id: 'max-length',
      question: 'What can the maximum length of my parcel be?',
      answer: [
        {
          type: 'paragraph',
          content: 'Parcels can be up to 5 metres (500cm) in length.',
        },
      ],
    },
    {
      id: 'business',
      question: 'Can businesses use Parcelio for regular shipping?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Yes. Businesses can access reliable courier services and competitive interstate pricing through Parcelio.',
        },
      ],
    },
  ],
};
