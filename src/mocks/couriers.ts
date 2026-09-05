import { PATHS } from '../routes/paths';

export type CourierTextSegment = {
  text: string;
  to?: string;
};

export type CourierProvider = {
  name: string;
  to: string;
};

export type CouriersContent = {
  breadcrumb: string;
  title: string;
  introduction: {
    heading: string;
    paragraphs: CourierTextSegment[][];
  };
  providers: {
    heading: string;
    introduction: string;
    items: CourierProvider[];
    description: string;
  };
  cheapestServices: {
    heading: string;
    paragraphs: CourierTextSegment[][];
  };
};

export const COURIERS_CONTENT: CouriersContent = {
  breadcrumb: 'Couriers',
  title: 'Courier Companies Australia',
  introduction: {
    heading: 'Courier Services by Transdirect',
    paragraphs: [
      [
        {
          text: 'For the best courier service in Australia and internationally, trust Transdirect. We work with the leading freight companies, couriers and shipping providers and pass along the cheapest quotes to our ',
        },
        { text: 'Transdirect members', to: PATHS.openAccount },
        { text: '.' },
      ],
      [
        {
          text: 'We only use courier services that reflect our company’s ethos of reliability, cost efficiency and accountability. That means you can rest easy whether you need ',
        },
        { text: 'interstate couriers', to: PATHS.servicesExpertInterstateCouriers },
        {
          text: ' or international courier services, same day or express. Our network has got your shipping needs covered.',
        },
      ],
    ],
  },
  providers: {
    heading: 'Our Courier Service Providers',
    introduction:
      'For fast, no-obligation quotes, or to learn more about any of our courier partners, click any name below.',
    items: Array.from({ length: 10 }, (_, index) => ({
      name: `Courier ${String(index + 1).padStart(2, '0')}`,
      to: PATHS.quote,
    })),
    description:
      'You’ll find complete details about each Courier service provider’s history, the special features they offer, such as express shipping, international shipping, pallet and freight services, tracking, insurance and more.',
  },
  cheapestServices: {
    heading: 'Cheapest Courier Services',
    paragraphs: [
      [
        { text: 'You can also use our free ' },
        { text: 'Transdirect Courier Quote Search', to: PATHS.quote },
        {
          text: ' to find the perfect courier service to fit your needs, with average savings that are 10-30% cheaper than standard published courier quotes — we pass along the savings to you!',
        },
      ],
      [
        {
          text: 'Don’t forget, for the cheapest courier services and international shipping, you can ',
        },
        { text: 'become a Transdirect Member', to: PATHS.openAccount },
        {
          text: ' and save big instantly. It’s free and online approval is instant, so you can book with confidence right away. ',
        },
        { text: 'Join us today and save now!', to: PATHS.openAccount },
      ],
    ],
  },
};
