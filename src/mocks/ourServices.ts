import { PATHS } from '../routes/paths';

export type ServiceItem = {
  title: string;
  description: string;
  to?: string;
  highlightedText?: string;
};

export type OurServicesHubContent = {
  breadcrumb: string;
  title: string;
  introduction: string;
  introductionHighlightedText: string;
  servicesHeading: string;
  serviceItems: ServiceItem[];
  closingText: string;
};

export type ParcelDeliveryContent = {
  breadcrumb: string;
  title: string;
  lead: string;
  courierNetwork: {
    prefix: string;
    linkLabel: string;
    suffix: string;
  };
  savings: {
    heading: string;
    average: {
      prefix: string;
      highlightedText: string;
      suffix: string;
    };
    membership: {
      prefix: string;
      linkLabel: string;
      suffix: string;
    };
  };
  quote: {
    heading: string;
    prefix: string;
    linkLabel: string;
    suffix: string;
  };
};

/**
 * Static content for every page in the Our Services group.
 * Add future sub-pages as sibling modules, for example `interstate`,
 * `sameDay`, or `nextDay`, instead of declaring mock copy in page files.
 */
export const OUR_SERVICES_CONTENT: {
  hub: OurServicesHubContent;
  parcelDelivery: ParcelDeliveryContent;
} = {
  hub: {
    breadcrumb: 'Our services',
    title: 'Courier, Freight & Shipping Services',
    introduction:
      'Transdirect has become known as one of the leading couriers in Australia due to our provision of a comprehensive range of services. We understand that everyone has different needs when it comes to ensuring their packages are safely delivered, and as such offer a number of options to match.',
    introductionHighlightedText: 'couriers in Australia',
    servicesHeading: 'Our services include:',
    serviceItems: [
      {
        title: 'Nationwide Road Express',
        description:
          'Transdirect’s network Carriers are the leading providers of Express Road Freight Services. With the Domestic ability to access All Capitals, Major Regionals, and Remote locations, Nationwide.',
      },
      {
        title: 'Nationwide Road Economy',
        description:
          'Take advantage of Transdirect’s network Carriers cost effective Nationwide Road Economy B2B, B2C and C2C Freight Services. These offer the delivery reach of our Nationwide Road Express Services, at a reduced cost.',
      },
      {
        title: 'Australia wide Same Day and Overnight Airfreight Services',
        description:
          'These are Transdirect’s network Carriers Priority suite of time specific B2B, B2C and C2C, Same day, Overnight services. These offer the Domestic ability to access All Capitals, Major Regionals, and Remote locations, Nationwide.',
      },
      {
        title: 'Same day local 1,2 and 4 hour delivery services within the same capital city',
        description:
          'Transdirect offers a Direct drive within the hour, a 1-2 hour, and a 3-4 hour delivery, after the advised collection time. This service is available within Metropolitan Melbourne, Sydney, Brisbane, Perth and Adelaide.',
      },
      {
        title: 'Interstate Couriers',
        to: PATHS.servicesExpertInterstateCouriers,
        description:
          'For a long distance delivery that traverses state lines, you want to be confident that your package will arrive in a safe and timely manner.',
      },
      {
        title: 'Same Day Delivery',
        to: `${PATHS.services}/same-day-courier`,
        description:
          'In a hurry? Our same day delivery services are available to major destinations Australia wide.',
      },
      {
        title: 'Next Day/Overnight Delivery',
        to: `${PATHS.services}/standard-shipping`,
        description:
          'Our reliable courier services will ensure your package is safely delivered to its intended recipient overnight by the next day.',
      },
      {
        title: 'Package Delivery',
        to: PATHS.servicesParcelDelivery,
        description:
          'Our standard package deliveries have all the same features of our express deliveries, and are ideal for people without a pressing time limit!',
      },
      {
        title: 'Specialty Delivery Services',
        description:
          'We handle a wide range of specialty deliveries across Australia, including medical equipment and medicine, musical instruments, luggage and excess baggage, furniture, bikes, vehicle parts, important documents, sports gear, office equipment, eCommerce orders, enterprise and B2B consignments, small business goods, food and beverage products, event materials, flowers, as well as tools and machinery.',
        highlightedText: 'medical equipment and medicine',
      },
    ],
    closingText:
      'Contact Transdirect today to learn more about our services and how we are able to assist you.',
  },
  parcelDelivery: {
    breadcrumb: 'Next Day/ Parcel Delivery',
    title: 'Parcel Delivery Australia',
    lead:
      'When you need a parcel delivered within Australia, trust Transdirect for the cheapest, fastest couriers available.',
    courierNetwork: {
      prefix: 'By partnering with Australia’s leading',
      linkLabel: 'courier network',
      suffix:
        'our Transdirect members enjoy the biggest savings compared to standard parcel post delivery rates.',
    },
    savings: {
      heading: 'Ready to save 30% on parcel delivery?',
      average: {
        prefix: 'On average, you’ll find savings of',
        highlightedText: '10% or more',
        suffix: 'compared to typical parcel delivery rates. But that’s only the beginning.',
      },
      membership: {
        prefix:
          'The more you send, the more you save, so if you ship a high volume of parcels with us as a Transdirect member, you’ll easily see savings of 30%.',
        linkLabel: 'Becoming a Transdirect member is free',
        suffix:
          'with immediate approval, so you can start saving on parcel delivery services right away, with your first delivery.',
      },
    },
    quote: {
      heading: 'Just want a free parcel delivery cost quote first?',
      prefix: 'No worries. Use our',
      linkLabel: 'Transdirect Quote tool',
      suffix:
        'for the cheapest parcel delivery costs. Simply enter a few parcel details below and you’ll get instant real-time price quotes, so you can book with our best-in-class couriers.',
    },
  },
};
