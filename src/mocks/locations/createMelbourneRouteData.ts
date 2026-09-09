import { CityId, RateCard } from '../compareRates';
import { InterstateRouteData } from '../../types/locations';

/** Build corridor page data; shared sections interpolate the destination city. */
export const createMelbourneRouteData = (
  to: string,
  destinationId: CityId,
  rateCards: RateCard[],
  intro: string[]
): InterstateRouteData => {
  const corridor = `Melbourne to ${to}`;

  return {
    from: 'Melbourne',
    to,
    intro,
    rateCards: rateCards.map((card) => ({ ...card, destinationId })),
    benefits: [
      {
        id: 'compare',
        title: 'Compare Top Couriers Instantly',
        body: 'We partner with a wide network of trusted courier providers, so you can compare options side by side and pick the carrier that fits your timing and budget.',
      },
      {
        id: 'express',
        title: 'Express & Standard Delivery Options',
        body: `Same-day, overnight and standard services cover a range of ${corridor} timeframes — priority when you need speed, economy when you want to save.`,
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
        body: `Pick-up from your home or business in Victoria and delivery direct to a residential or commercial address in ${to}.`,
      },
      {
        id: 'flexible',
        title: 'Flexible Delivery for Businesses & Individuals',
        body: 'Supports eCommerce, B2B freight and one-off personal shipments, with simple online booking and integrations when you need them.',
      },
      {
        id: 'carbon',
        title: '100% Carbon Neutral Shipping',
        body: `All shipments are carbon neutral at no extra cost, so you keep competitive pricing while reducing your footprint on every ${corridor} delivery.`,
      },
    ],
    keyInfo: [
      {
        id: 'timeframes',
        title: `${corridor} Delivery Timeframes`,
        body: 'Delivery times vary by courier service. Overnight options are the fastest; standard and economy services are more cost-effective. Estimated windows appear with each live quote.',
      },
      {
        id: 'items',
        title: `Items You Can Send from Melbourne to ${to}`,
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
        question: `How much does it cost to ship from Melbourne to ${to}?`,
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
        question: `How long does delivery take from Melbourne to ${to}?`,
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
        question: `Can I track my Melbourne to ${to} delivery?`,
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
        question: `Can I change or cancel my Melbourne to ${to} courier booking?`,
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
};
