import { InterstateRouteData } from '../../types/locations';

export const MELBOURNE_TO_PERTH_DATA: InterstateRouteData = {
  from: 'Melbourne',
  to: 'Perth',
  intro: [
    'Parcelio makes it easy to send freight and parcels from Melbourne to Perth with reliable interstate courier solutions. Whether you are booking frequent business deliveries or a one-off shipment to Western Australia, compare quotes instantly and arrange delivery within minutes.',
    'Choose from a range of leading Australian carriers, access real-time parcel tracking, and find a shipping option that suits your preferred timeframe and budget.',
  ],
  rateCards: [
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
  ],
  benefits: [
    {
      id: 'compare',
      title: 'Compare Top Couriers Instantly',
      body: 'Our platform connects you with leading carriers so you can compare pricing, delivery speeds and service options for Melbourne to Perth in seconds.',
    },
    {
      id: 'express',
      title: 'Express & Standard Delivery Options',
      body: 'Select overnight for urgent consignments, or standard services when you want a more economical Melbourne to Perth option.',
    },
    {
      id: 'savings',
      title: 'Save with Competitive Courier Rates',
      body: 'Access multiple courier rates in one place and secure reliable interstate delivery without shopping quotes one by one.',
    },
    {
      id: 'tracking',
      title: 'Real-Time Delivery Tracking',
      body: 'Receive tracking updates at every stage of transit, from collection through to final delivery in Perth.',
    },
    {
      id: 'door-to-door',
      title: 'Door-to-Door Convenience',
      body: 'Arrange pickup from your home or business in Victoria and deliver directly to addresses across Perth and wider WA.',
    },
    {
      id: 'flexible',
      title: 'Flexible Delivery for Businesses & Individuals',
      body: 'Supports B2B freight, eCommerce deliveries and one-off courier bookings with a simple online booking flow.',
    },
    {
      id: 'carbon',
      title: '100% Carbon Neutral Shipping',
      body: 'All shipments are carbon neutral at no extra cost, so you keep competitive pricing while reducing your footprint on every Melbourne to Perth delivery.',
    },
  ],
  keyInfo: [
    {
      id: 'timeframes',
      title: 'Melbourne to Perth Delivery Timeframes',
      body: 'Shipping timeframes vary by service. Overnight options suit priority consignments; standard services are typically more budget-friendly. Estimated times appear with each live quote.',
    },
    {
      id: 'items',
      title: 'Items You Can Send from Melbourne to Perth',
      body: 'Send sports equipment, office equipment and more through our interstate network. Dangerous goods, perishables, unpackaged goods and oversized items are not permitted.',
    },
    {
      id: 'packaging',
      title: 'Packaging Requirements',
      showPackagingLink: true,
      body: 'The maximum parcel length accepted is 5 metres (500cm). Items over 25kg must be separated or palletised for forklift pickup.',
    },
  ],
  faqs: [
    {
      id: 'cost',
      question: 'How much does it cost to ship from Melbourne to Perth?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Delivery costs vary by parcel dimensions, weight and service. Use our domestic shipping rates calculator or get an instant quote for indicative pricing.',
        },
      ],
    },
    {
      id: 'duration',
      question: 'How long does delivery take from Melbourne to Perth?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Transit time depends on the courier and service level. Overnight options are available for urgent Melbourne to Perth deliveries.',
        },
      ],
    },
    {
      id: 'track',
      question: 'Can I track my Melbourne to Perth delivery?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Yes. Our online tracking tool lets you monitor your delivery in real time from collection through to final delivery.',
        },
      ],
    },
    {
      id: 'cancel',
      question: 'Can I change or cancel my Melbourne to Perth courier booking?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Bookings can be updated or cancelled prior to collection. Extra charges may apply for late changes or inaccurate information.',
        },
      ],
    },
    {
      id: 'max-length',
      question: 'What is the maximum parcel length?',
      answer: [
        {
          type: 'paragraph',
          content: 'The maximum allowable parcel length is 5 metres (500cm).',
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
            'Yes. Our platform supports ongoing business freight and recurring courier bookings at competitive prices.',
        },
      ],
    },
  ],
};
