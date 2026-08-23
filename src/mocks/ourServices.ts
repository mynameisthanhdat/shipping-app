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

export type LinkItem = {
  label: string;
  to: string;
};

export type SameDayDeliveryContent = {
  breadcrumb: string;
  title: string;
  introduction: string[];
  callToAction: {
    quoteLabel: string;
    bookingLabel: string;
    suffix: string;
  };
  termsText: string;
  whyChooseHeading: string;
  compareCouriers: ContentSection;
  australiaWide: ContentSection & {
    locationsHeading: string;
    locations: LinkItem[];
    moreLocationsLabel: string;
  };
  tracking: ContentSection & {
    linkLabel: string;
  };
  competitiveRates: ContentSection;
  bookingProcess: ContentSection;
  howItWorks: {
    heading: string;
    steps: Array<{ label: string; title: string; description: string }>;
  };
  items: {
    heading: string;
    introduction: string;
    values: string[];
    requirements: string;
    requirementsLinkLabel: string;
    requirementsSuffix: string;
  };
  testimonials: {
    heading: string;
    values: string[];
    linkLabel: string;
  };
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
export type NextDayDeliveryContent = {
  breadcrumb: string;
  title: string;
  introduction: {
    question: string;
    prefix: string;
    courierNetworkLabel: string;
    suffix: string;
  };
  trustedDelivery: ContentSection;
  savings: {
    heading: string;
    parcelPost: {
      prefix: string;
      highlightedText: string;
      suffix: string;
    };
    memberDiscount: {
      prefix: string;
      linkLabel: string;
      suffix: string;
    };
    finalParagraph: string;
  };
  quotes: ContentSection;
};


export const OUR_SERVICES_CONTENT: {
  hub: OurServicesHubContent;
  interstate: InterstateCouriersContent;
  sameDay: SameDayDeliveryContent;
  nextDay: NextDayDeliveryContent;
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
  sameDay: {
    breadcrumb: 'Same Day Courier Services',
    title: 'Same Day Courier Services',
    introduction: [
      'Need something delivered urgently? Transdirect’s same-day courier service helps both individuals and businesses send parcels fast, with delivery arranged the same day the booking is made*. It doesn’t matter if you’re a busy ecommerce seller, a small business juggling fast-moving stock or simply need a personal package sent straight away, we’ve got you covered.',
      'Partnering with some of Australia’s leading courier companies means we can offer competitive pricing and a simple online booking process. Sending a parcel has never been easier.',
    ],
    callToAction: {
      quoteLabel: 'Get a quote now',
      bookingLabel: 'book same-day delivery',
      suffix: 'in just a few clicks.',
    },
    termsText: '*T&Cs apply.',
    whyChooseHeading: 'Why Choose Transdirect for Same-Day Delivery?',
    compareCouriers: {
      heading: 'Compare Top Couriers Instantly',
      paragraphs: [
        'We work with Australia’s most trusted courier companies, including CouriersPlease, Allied Express, TNT, Direct Couriers and more, so you can compare services side-by-side and choose what suits your timeline and budget.',
      ],
    },
    australiaWide: {
      heading: 'Australia-wide Services',
      paragraphs: [
        'Our same-day courier services operate across major metropolitan areas right around the country. Whether you’re located in a CBD or surrounding suburbs, Transdirect connects you to fast, local couriers.',
      ],
      locationsHeading: 'Available locations include:',
      locations: [
        { label: 'Sydney', to: `${PATHS.locations}/sydney` },
        { label: 'Melbourne', to: `${PATHS.locations}/melbourne` },
        { label: 'Brisbane', to: `${PATHS.locations}/brisbane` },
        { label: 'Perth', to: `${PATHS.locations}/perth` },
        { label: 'Adelaide', to: `${PATHS.locations}/adelaide` },
        { label: 'Canberra', to: `${PATHS.locations}/canberra` },
      ],
      moreLocationsLabel: 'more',
    },
    tracking: {
      heading: 'Available Tracking for Deliveries',
      paragraphs: [
        'Once your item is on its way, you can track its movements in real-time. We give you a unique tracking number and provide live updates so you can keep an eye on your delivery from start to finish.',
      ],
      linkLabel: 'Track your item here',
    },
    competitiveRates: {
      heading: 'Competitive Courier Rates',
      paragraphs: [
        'Transdirect helps you compare and save by showing discounted rates across multiple courier partners. There’s no need to contact couriers individually – our instant quotes do the heavy lifting for you.',
      ],
    },
    bookingProcess: {
      heading: 'Simple Online Booking Process',
      paragraphs: [
        'Get an instant quote, choose your preferred courier, print your consignment note, and you’re ready to go. No phone calls or paperwork necessary.',
      ],
    },
    howItWorks: {
      heading: 'How Our Same-Day Delivery Service Works',
      steps: [
        {
          label: 'Step 1:',
          title: 'Get an instant quote:',
          description:
            'Use our online freight calculator to input your parcel details and get a price immediately.',
        },
        {
          label: 'Step 2:',
          title: 'Book your delivery:',
          description:
            'Pick your courier, add optional insurance and finalise your booking. You’ll receive a confirmation email with a consignment label – print it and attach it securely to your parcel.',
        },
        {
          label: 'Step 3:',
          title: 'Track your package:',
          description: 'Once collected, you can follow the parcel’s journey using our tracking tool.',
        },
      ],
    },
    items: {
      heading: 'What Items Can You Send with a Same Day Courier?',
      introduction: 'Same-day couriers can transport a wide range of items, such as:',
      values: [
        'Documents and contracts',
        'Office supplies',
        'Product samples',
        'Consumer goods',
        'Retail orders',
        'Spare parts (new and packaged only)',
      ],
      requirements:
        'Items must meet packaging and weight guidelines. Packages over 25kg must be split into two cartons or packed on a pallet or crate so they can be moved via forklift. For safety reasons, hazardous materials, perishable goods and oversized freight may not be accepted. Read our',
      requirementsLinkLabel: 'packaging requirements',
      requirementsSuffix: 'for full details.',
    },
    testimonials: {
      heading: 'What Our Clients Say',
      values: [
        'I just wanted to let you know the service I have received from your company over the past month has been fantastic. I am a very happy customer and would recommend your company to anyone.',
        'I have done two orders with your company and both times I have been extremely impressed by how quickly and efficiently the process was in getting the stock to my customers in NSW.',
        'Just a quick note to say your web page is very easy to use. So far, it has been an easy and fast transaction, which is what we need in business.',
      ],
      linkLabel: 'Read more customer reviews',
    },
  },
  nextDay: {
    breadcrumb: 'Next Day/ Overnight Delivery',
    title: 'Next Day & Overnight Delivery Australia',
    introduction: {
      question: 'Searching for the best next day delivery couriers, at the absolute lowest rates?',
      prefix: 'Welcome to Transdirect. Let our',
      courierNetworkLabel: 'Courier Network',
      suffix:
        'handle your express and overnight deliveries safely, on-time and with full end-to-end tracking. All of our courier services are also Certified 100% Carbon Neutral.',
    },
    trustedDelivery: {
      heading: 'Trusted Overnight Delivery to Sydney, Melbourne & More',
      paragraphs: [
        'We’ve been an industry leader in priority and overnight delivery services for more than a decade, working with Australia’s best courier and freight companies, whilst helping our 100,000+ small business clients save money and grow their companies.',
        'Our insurance and warranty options, and free email and SMS parcel tracking updates, will provide further peace of mind for your overnight, priority delivery needs.',
      ],
    },
    savings: {
      heading: 'Next Day Delivery 30% Cheaper than Parcel Post',
      parcelPost: {
        prefix:
          'With Transdirect, you’ll enjoy rates 10% below standard overnight delivery costs for',
        highlightedText: 'parcel post',
        suffix: 'and other providers.',
      },
      memberDiscount: {
        prefix: 'Better yet, the more you ship with us, the lower your rates: Thanks to',
        linkLabel: 'our exclusive Transdirect Member discounts',
        suffix: 'you’ll easily save 30% on next-day courier costs!',
      },
      finalParagraph:
        'Even without a free Transdirect Member account, you can get a free instant quote, book the best next-day delivery courier for your needs, and track your package from pickup to drop-off, across Australia.',
    },
    quotes: {
      heading: 'Get the Best Courier Quotes, Book & Save Today',
      paragraphs: [
        'We’re proud to serve more than 100,000 Australian small business clients, and provide the cheapest courier rates across a variety of needs, from same-day shipping to international freight services. We’ve earned some of the highest ratings in our industry, so let us put our courier expertise to work for you!',
      ],
    },
  },
};
