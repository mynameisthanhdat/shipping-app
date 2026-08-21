const SERVICES = '/our-services';
const EDUCATION = '/education';

export const PATHS = {
  home: '/',
  services: SERVICES,
  couriers: '/couriers',
  education: EDUCATION,
  locations: '/locations',
  compareRates: '/compare-rates',
  openAccount: '/open-account',
  signIn: '/sign-in',
  quote: '/get-a-quote',
  trackShipment: '/track-shipment',
  courierNetwork: '/courier-network',
  pricing: '/pricing',
  business: '/business',
  individuals: '/individuals-and-families',
  ecommerce: '/ecommerce',
  api: '/api-for-developers',

  // Submenu paths that have a real page behind them.
  servicesExpertInterstateCouriers: `${SERVICES}/expert-inter-state-couriers-in-aus`,
  servicesParcelDelivery: `${SERVICES}/parcel-delivery`,

  //Education submenu paths
  educationTestimonials: `${EDUCATION}/testimonials`,
  educationFaqs: `${EDUCATION}/faqs`,
  educationBlog: `${EDUCATION}/blog`,
  educationTransitWarranty: `${EDUCATION}/transit-warranty-options`,
  educationPackaging: `${EDUCATION}/packaging-requirements`,
  educationAccountEnquiries: `${EDUCATION}/account-enquiries`,
  educationTracking: `${EDUCATION}/tracking`,
} as const;

export type NavItem = {
  label: string;
  to: string;
  children?: NavItem[];
};

export const MAIN_NAV: NavItem[] = [
  {
    label: 'Our Services',
    to: PATHS.services,
    children: [
      {
        label: 'Expert Inter State Couriers in Aus',
        to: PATHS.servicesExpertInterstateCouriers,
      },
      { label: 'Express Delivery', to: `${PATHS.services}/express-delivery` },
      { label: 'Standard Shipping', to: `${PATHS.services}/standard-shipping` },
      { label: 'Freight & Pallet', to: `${PATHS.services}/freight-and-pallet` },
      { label: 'International Shipping', to: `${PATHS.services}/international-shipping` },
      { label: 'Same-Day Courier', to: `${PATHS.services}/same-day-courier` },
      { label: 'Parcel Delivery', to: PATHS.servicesParcelDelivery },
    ],
  },
  { label: 'Couriers', to: PATHS.couriers },
  {
    label: 'Education',
    to: PATHS.education,
    children: [
      { label: "FAQ's", to: PATHS.educationFaqs },
      { label: 'Testimonials', to: PATHS.educationTestimonials },
      { label: 'Transit Warranty Options', to: PATHS.educationTransitWarranty },
      { label: 'Packaging Requirements', to: PATHS.educationPackaging },
      { label: 'Account Enquiries', to: PATHS.educationAccountEnquiries },
      { label: 'Tracking', to: PATHS.educationTracking },
      { label: 'Blog', to: PATHS.educationBlog },
    ],
  },
  {
    label: 'Locations',
    to: PATHS.locations,
    children: [
      { label: 'Australia', to: `${PATHS.locations}/australia` },
      { label: 'New Zealand', to: `${PATHS.locations}/new-zealand` },
      { label: 'United Kingdom', to: `${PATHS.locations}/united-kingdom` },
      { label: 'United States', to: `${PATHS.locations}/united-states` },
      { label: 'Canada', to: `${PATHS.locations}/canada` },
      { label: 'Singapore', to: `${PATHS.locations}/singapore` },
    ],
  },
  { label: 'Compare Rates', to: PATHS.compareRates },
];

export const FOOTER_SERVICES: NavItem[] = [
  { label: 'Track Shipment', to: PATHS.trackShipment },
  { label: 'Get a Quote', to: PATHS.quote },
  { label: 'Courier Network', to: PATHS.courierNetwork },
  { label: 'Pricing', to: PATHS.pricing },
];

export const FOOTER_SOLUTIONS: NavItem[] = [
  { label: 'Business', to: PATHS.business },
  { label: 'Individuals & Families', to: PATHS.individuals },
  { label: 'Ecommerce', to: PATHS.ecommerce },
  { label: 'API for Developers', to: PATHS.api },
];

/** Flattens a nav tree into a single list of items, parents included. */
export const flattenNav = (items: NavItem[]): NavItem[] =>
  items.flatMap((item) => [item, ...flattenNav(item.children ?? [])]);
