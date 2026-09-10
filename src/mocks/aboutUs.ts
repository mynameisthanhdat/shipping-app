import { PATHS } from '../routes/paths';

export type AboutUsTextSegment = {
  text: string;
  to?: string;
};

export type AboutUsContent = {
  seo: { title: string; description: string };
  breadcrumb: string;
  title: string;
  heading: string;
  paragraphs: AboutUsTextSegment[][];
  locationsIntroduction: string;
  locations: string[];
 
};

export const ABOUT_US_CONTENT: AboutUsContent = {
  seo: {
    title: 'About Us | Parcelio',
    description:
      'Learn how Parcelio delivers affordable courier, parcel delivery and freight solutions across Australia.',
  },
  breadcrumb: 'About Parcelio',
  title: 'Parcelio | Cheap Couriers, Parcel Delivery & Freight',
  heading: 'Parcelio – Delivering Solutions for you.',
  paragraphs: [
    [
      {
        text: 'Here at Parcelio, we strive to deliver the best range of shipping solutions to suit your needs. With carbon-neutral delivery options, we help your business grow whilst helping to protect our planet.',
      },
    ],
    [
      {
        text: 'We offer the services of Australia’s largest and most trusted freight and courier companies to ensure you get the best price and service for your delivery requirements. Whether you’re a large company or an individual sending a gift to your family, we can provide the solution for you.',
      },
    ],
    [
      {
        text: 'If you’re an online retailer, our powerful quoting and booking system can be integrated into your platform to create a seamless checkout process for your clients and help boost your sales conversions.',
      },
    ],
    [
      {
        text: 'Parcelio is a trusted freight partner for Australian businesses and individuals. We back up our courier and freight services with a customer service team who are always there to ensure you and your clients feel confident in the delivery process.',
      },
    ],
    [
      {
        text: 'We know we can provide the solution you’re looking for. If you’re an individual, ',
      },
      { text: 'get an instant quote', to: PATHS.quote },
      { text: ' now. If you’re a business customer, submit an ' },
      { text: 'Account Query form', to: PATHS.educationAccountEnquiries },
      {
        text: ' and one of our friendly staff will contact you to discuss the best options and prices for your business.',
      },
    ],
  ],
  locationsIntroduction:
    'We look forward to solving your transport requirements. For more information on how Parcelio can respond to your local needs, select your location below:',
  locations: [
    'Melbourne',
    'Sydney',
    'Perth',
    'Brisbane',
    'Adelaide',
    'Canberra',
    'Hobart',
    'Darwin',
  ],
};
