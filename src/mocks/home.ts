export type RateHighlight = {
  id: string;
  label: string;
  price: string;
  description: string;
};

export type RateExample = {
  id: string;
  label: string;
  price: string;
  description: string;
};

export type HomeTestimonial = {
  id: string;
  quote: string;
  attribution: string;
};

export type IntegrationItem = {
  id: string;
  name: string;
  description: string;
};

export type SolutionItem = {
  id: string;
  title: string;
  description: string;
};

export type CourierPartner = {
  id: string;
  name: string;
};

export const RATE_HIGHLIGHTS: RateHighlight[] = [
  {
    id: 'local-metro',
    label: 'Local Metro',
    price: '$5.10',
    description: 'Same-day delivery within metro areas',
  },
  {
    id: 'interstate-10kg',
    label: 'Interstate 10kg',
    price: '$11.19',
    description: 'Standard interstate freight, up to 10kg',
  },
  {
    id: 'express-international',
    label: 'Express International',
    price: '$14.90',
    description: 'Fast delivery to 200+ countries worldwide',
  },
];

export const RATE_EXAMPLES: RateExample[] = [
  {
    id: 'local-metro-example',
    label: 'Local Metro',
    price: '$5.10',
    description: 'Up to 25kg, inc. GST',
  },
  {
    id: 'nationwide-satchel',
    label: 'Nationwide Satchel',
    price: '$6.32',
    description: '5kg satchel or parcel, inc. GST',
  },
  {
    id: 'melbourne-sydney',
    label: 'Melbourne to Sydney',
    price: '$11.19',
    description: '10kg parcel, inc. GST',
  },
  {
    id: 'pallet-services',
    label: 'Pallet Services',
    price: '$16.65',
    description: 'Nationwide pallet delivery, inc. GST',
  },
  {
    id: 'domestic-airfreight',
    label: 'Domestic Airfreight',
    price: '$13.25',
    description: 'Fast airfreight within Australia, inc. GST',
  },
  {
    id: 'express-international-example',
    label: 'Express International',
    price: '$13.63',
    description: 'Express airfreight worldwide, inc. GST',
  },
];

export const HOME_TESTIMONIALS: HomeTestimonial[] = [
  {
    id: 'sarah-k',
    quote:
      'Booking is so easy and rates are unbeatable. Highly recommend for any small business.',
    attribution: '— Sarah K., Online Retailer',
  },
  {
    id: 'marcus-t',
    quote: 'Reliable tracking and great support whenever something goes wrong.',
    attribution: '— Marcus T., Ecommerce Founder',
  },
  {
    id: 'priya-n',
    quote: 'Reliable tracking and great support whenever something goes wrong.',
    attribution: '— Priya N., Boutique Owner',
  },
];

export const INTEGRATIONS: IntegrationItem[] = [
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'Auto-sync orders and print labels in one click',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    description: 'Connect your WordPress store instantly',
  },
  {
    id: 'ebay',
    name: 'eBay',
    description: 'Fulfill marketplace orders without leaving Parcelio',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Sync payment and shipping details automatically',
  },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'business',
    title: 'For Business',
    description: 'Bulk shipping rates and dedicated support for growing companies',
  },
  {
    id: 'individuals',
    title: 'Individuals & Families',
    description: 'Simple, affordable shipping for personal parcels and gifts',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Sellers',
    description: 'Integrations and bulk tools built for online stores',
  },
];

export const COURIER_PARTNERS: CourierPartner[] = [
  { id: 'australia-post', name: 'Australia Post' },
  { id: 'dhl-express', name: 'DHL Express' },
  { id: 'fedex', name: 'FedEx' },
  { id: 'tnt', name: 'TNT' },
];

export const WHY_CHOOSE_FEATURES: string[] = [
  'Real-time tracking for every shipment',
  'Instant rate comparison across carriers',
  'Dedicated account support',
  'Bulk label printing & CSV upload',
  'Automatic customs documentation',
  'Flexible pickup scheduling',
];
