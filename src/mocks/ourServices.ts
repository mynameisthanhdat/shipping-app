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

/**
 * Static content for every page in the Our Services group.
 * Add future sub-pages as sibling modules, for example `interstate`,
 * `sameDay`, or `nextDay`, instead of declaring mock copy in page files.
 */
export const OUR_SERVICES_CONTENT: { hub: OurServicesHubContent } = {
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
};
