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

export type ContentSection = {
  heading: string;
  paragraphs: string[];
};

export type InterstateCouriersContent = {
  breadcrumb: string;
  title: string;
  introduction: ContentSection;
  trust: ContentSection;
  shipping: ContentSection & {
    benefits: string[];
  };
  moreInformation: {
    label: string;
    paragraphs: string[];
  };
};

/**
 * Static content for pages in the Our Services group.
 * Add other sub-pages as sibling modules in this object.
 */
export const OUR_SERVICES_CONTENT: {
  hub: OurServicesHubContent;
  interstate: InterstateCouriersContent;
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
  interstate: {
    breadcrumb: 'Expert interstate couriers in Australia',
    title: 'Interstate Freight, Courier & Parcel Delivery Services',
    introduction: {
      heading: 'Expert interstate couriers in Australia',
      paragraphs: [
        'Deliveries that span across Australian states and territories can often be more complex and have the potential for more error to occur, which is why you need an interstate courier you can trust. Transdirect has a wealth of knowledge providing a wide range of services to suit every individual, family and business. Some of the reasons we are known as the best in our field include our high priority and fast delivery options, our fragile items policy, our punctual and polite couriers and our safe transport and delivery procedures.',
      ],
    },
    trust: {
      heading: 'Trusted by 100,000 business',
      paragraphs: [
        'People use the Transdirect interstate courier services for a variety of reasons. Most value our exceptional customer service and have grown to truly trust us. We aim to instill confidence in every one of our clients, every time we work with them, because we want to make life a little bit easier and never more difficult.',
        'Some are simply after a cheap, safe, quick and reliable courier that will save them a trip to the post office. Others are in a hurry to get something from point A to point B and know that we can deliver in a short time frames. Whether your delivery needs are big or small, your items heavy or light, you’ve booked us at the last minute or months in advance – Transdirect is the best interstate courier company for the job.',
      ],
    },
    shipping: {
      heading: 'Shipping across Australia',
      paragraphs: [
        'We work in most areas of Australia including all the main cities. We can fetch your belongings from Melbourne one day and have them in Sydney the next if you should require our overnight services. With us, you’ll feel confident throughout every step of the process, thanks to:',
      ],
      benefits: [
        'Our commitment and proven track record for providing safe, reliable, and timely delivery',
        'Our years of experience as leading interstate couriers for Australia',
        'Our seamless and simple instant online quote system that allows you to make sure we fit within your budget before you even begin',
        'Our provision of a tracking code that allows you to follow the journey of your interstate freight as it traverses state and territory lines',
      ],
    },
    moreInformation: {
      label: 'More on Transdirect’s interstate services',
      paragraphs: [
        'Transdirect is the leader when it comes to interstate freight companies because we have the wealth of experience with freight transport Australia wide that our customers have grown to trust.',
        'We have a very experienced team to assist you from the very beginning when you are organising your interstate freight quote, through to the successful delivery of your goods.',
        'We guarantee a reliable and smooth process superior to interstate freight services that other Australian interstate transport companies currently offer. Transdirect makes sure your precious interstate freight reaches its destination with ease and the most affordable pricing to suit your needs.',
        'We care about our customers and the precious items they wish to ship efficiently and safely interstate. When it comes to interstate freight carriers our friendly customer service team is second to none.',
        'We know the problems faced by customers wishing to freight all manner of goods across the country. They are nervous goods will be damaged or go missing. They are also nervous of cost and a timely service.',
        'We are a very successful business because we have listened to the needs of the population and do make this process as easy and cost effective as possible. Our business success is testament to this and our huge customer base exemplifies the trust people have in us. People rely on our services and know when shipping freight across Australia they can trust Transdirect with their goods.',
        'Our advanced online technology makes quoting and budgeting for a job a very simple process. Our tracking service gives customers even more security, allowing them to follow their goods across Australia. Not only will the delivery be successful, they will know at all times where their cargo is.',
        'Transdirect knows through years of experience that customers feel more secure knowing where their freight is and how long it will take to be delivered. Transdirect definitely meets the needs of all customers across the country with a very efficient, cost effective and seamless process.',
        'We address the needs of our customers from large business, small business, families and individuals. Those after cheap interstate couriers wanting items delivered safely and in a very timely fashion use Transdirect.',
        'Customers needing deliveries for those emergency situations can select from our range of Express services. Large companies needing freight with more individual and specialty requirements in the shipping process rely on Transdirect.',
        'Whether you require freight shipped by air, land or sea. Planes, trucks, vans, cars, motorbikes, bicycles or on foot. Cargo ships, boats, or small sea faring craft. Same day Delivery, Overnight delivery. Next day delivery. Express delivery. Specialty delivery. Large and small items delivered anywhere within Australia. Transdirects vast network offers all of the transport services to suit your budget and specific needs and requirements.',
        'We operate in all of Australia’s capital cities and are definitely the leaders in interstate freight. We traverse this large nation, taking great care to deliver the goods you require securely and efficiently.',
        'Trandirect is the company that Australia trusts and uses for reliable, secure and timely deliveries wherever you trade or live.',
      ],
    },
  },
};
