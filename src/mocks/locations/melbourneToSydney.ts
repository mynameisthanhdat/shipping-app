import { InterstateRouteData } from '../../types/locations';

export const MELBOURNE_TO_SYDNEY_DATA: InterstateRouteData = {
  from: 'Melbourne',
  to: 'Sydney',
  intro: [
    'Parcelio offers reliable and affordable shipping from Melbourne to Sydney. Compare trusted national courier providers, book online in minutes, and track your parcel for the whole journey — whether you are shipping for business or personally.',
  ],
  rateCards: [
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
  ],
  benefits: [
    {
      id: 'compare',
      title: 'Compare Top Couriers Instantly',
      body: 'We partner with a wide network of trusted courier providers, so you can compare options side by side and pick the carrier that fits your timing and budget.',
    },
    {
      id: 'express',
      title: 'Express & Standard Delivery Options',
      body: 'Same-day, overnight and standard services cover a range of Melbourne to Sydney timeframes — priority when you need speed, economy when you want to save.',
    },
    {
      id: 'savings',
      title: 'Save with Competitive Courier Rates',
      body: 'Compare multiple courier options in one place and lock in competitive interstate rates without ringing around for quotes.',
    },
    {
      id: 'tracking',
      title: 'Real-Time Delivery Tracking',
      body: 'Once your parcel is collected, follow it from pickup through to final delivery with live tracking updates.',
    },
    {
      id: 'door-to-door',
      title: 'Door-to-Door Convenience',
      body: 'Pick-up from your home or business in Victoria and delivery direct to a residential or commercial address in Sydney.',
    },
    {
      id: 'flexible',
      title: 'Flexible Delivery for Businesses & Individuals',
      body: 'Supports eCommerce, B2B freight and one-off personal shipments, with simple online booking and integrations when you need them.',
    },
    {
      id: 'carbon',
      title: '100% Carbon Neutral Shipping',
      body: 'All shipments are carbon neutral at no extra cost, so you keep competitive pricing while reducing your footprint on every Melbourne to Sydney delivery.',
    },
  ],
  keyInfo: [
    {
      id: 'timeframes',
      title: 'Melbourne to Sydney Delivery Timeframes',
      body: 'Delivery times vary by courier service. Overnight options are the fastest; standard and economy services are more cost-effective. Estimated windows appear with each live quote.',
    },
    {
      id: 'items',
      title: 'Items You Can Send from Melbourne to Sydney',
      body: 'Our network handles documents, luggage, office equipment, vehicle components and more. Dangerous goods, perishables, unpackaged goods and items over size limits cannot be accepted.',
    },
    {
      id: 'packaging',
      title: 'Packaging Requirements',
      showPackagingLink: true,
      body: 'All deliveries must meet packaging and weight rules. Maximum parcel length is 5 metres (500cm). Items over 25kg should be separated or palletised for forklift pickup.',
    },
  ],
  faqs: [
    {
      id: 'cost',
      question: 'How much does it cost to ship from Melbourne to Sydney?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Courier rates depend on parcel size, weight and the service you choose. Use our domestic shipping rates calculator or get an instant quote for estimated pricing.',
        },
      ],
    },
    {
      id: 'duration',
      question: 'How long does delivery take from Melbourne to Sydney?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Transit times vary by courier. Overnight options are faster; economy services are usually more affordable. Live quotes show estimated delivery windows.',
        },
      ],
    },
    {
      id: 'track',
      question: 'Can I track my Melbourne to Sydney delivery?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Yes. Our online tracking tool lets you monitor your shipment in real time from pickup through to final delivery.',
        },
      ],
    },
    {
      id: 'cancel',
      question: 'Can I change or cancel my Melbourne to Sydney courier booking?',
      answer: [
        {
          type: 'paragraph',
          content:
            'Yes. Amendments and cancellations are possible before pickup, though fees may apply for late changes or incorrect booking details.',
        },
      ],
    },
    {
      id: 'max-length',
      question: 'What can the maximum length of my parcel be?',
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
            'Yes. We support businesses with reliable interstate shipping, including eCommerce integrations and competitive delivery pricing.',
        },
      ],
    },
  ],
};
