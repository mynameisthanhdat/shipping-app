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

export type PalletTransportContent = {
  breadcrumb: string;
  title: string;
  paragraphs: Array<{
    text: string;
    highlightedText?: string;
  }>;
};

export type CarbonNeutralDeliveryContent = {
  breadcrumb: string;
  title: string;
  sections: Array<{
    heading: string;
    paragraphs: Array<{
      text: string;
      highlightedText?: string;
    }>;
  }>;
};

/**
 * Static content for every page in the Our Services group.
 * Add future sub-pages as sibling modules, for example `interstate`,
 * `sameDay`, or `nextDay`, instead of declaring mock copy in page files.
 */
export const OUR_SERVICES_CONTENT: {
  hub: OurServicesHubContent;
  interstate: InterstateCouriersContent;
  sameDay: SameDayDeliveryContent;
  nextDay: NextDayDeliveryContent;
  parcelDelivery: ParcelDeliveryContent;
  palletTransport: PalletTransportContent;
  carbonNeutral: CarbonNeutralDeliveryContent;
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
        to: PATHS.servicesSameDayCourier,
        description:
          'In a hurry? Our same day delivery services are available to major destinations Australia wide.',
      },
      {
        title: 'Next Day/Overnight Delivery',
        to: PATHS.servicesNextDayDelivery,
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
  palletTransport: {
    breadcrumb: 'Next Day/ Pallet Shipping',
    title: 'Pallet Shipping Australia',
    paragraphs: [
      {
        text: 'Transdirect offers the state of the art pallet delivery service Australians need when pallet transport is required for freight. Shipping pallets provide safety for larger loads, adding strength and stability when you’re shipping freight.',
      },
      {
        text: 'Transdirect specialises in pallet shipping. We are the experts in palletised road transport from regional areas and across all of our capital cities. Our experienced team of professionals and our excellent freight booking system ensures when our customers need a pallet courier that we are the best.',
        highlightedText: 'Transdirect',
      },
      {
        text: 'You may require one pallet or many to suit your transport requirements. Larger freight needs to be placed on pallets for protection of your precious cargo. This also makes handling much easier when loading and off-loading your goods.',
      },
      {
        text: 'Pallets can also reduce the costs of manual handling, making pallet transport an efficient and safe option for shipping freight interstate. We work with Australia’s best, most efficient and affordable freight couriers to reduce your overheads and freight costs with pallet delivery service options.',
      },
      {
        text: 'Note that you’ll need to pack your goods correctly before pallet delivery, to avoid extra costs or fees for incorrect weights and dimensions. From your pallet delivery quote Transdirect guarantees a smooth and easy process from the beginning to the very end. Transdirect ensures your goods are delivered safely, securely and on time. Using our pallet freight services gives you peace of mind when larger freight is required to be shipped interstate and to all corners of Australia.',
        highlightedText: 'freight services',
      },
      {
        text: 'Pallet freight makes sure your load is firmly secured, giving far more strength and stability. Courier transport vehicles are packed with maximum usage of space with the pallet packing system. Customers are charged by calculating weight and volume. The freight pallet system makes stacking very efficient, thus avoiding extra costs and surcharges incurred with random, non-stackable sized loads that don’t use shipping pallets.',
      },
      {
        text: 'Palletised freight allows couriers to stack goods in rigid columns, increasing stability and strength. Pallets are packed fitting goods squarely to avoid overhang and shipment damage. This means shipping pallets also enable the stacking of freight as economically as possible. When loading a pallet, keep the shipment square with the top of the shipment flat for obvious space saving reasons.',
      },
      {
        text: 'Pallet shipping uses strapping and stretch wrapping to protect your freight. Note that all shipping pallets should be entirely wrapped up to secure the load and protect items from the elements.',
      },
      {
        text: 'At Transdirect, we continually invest in transport options, delivery services and shipping technology to provide the most affordable courier services for our valued customers.',
      },
      {
        text: 'Transdirect’s years of transport excellence ensure you get the best pallet and freight delivery services in Australia and beyond. When shipping your precious cargo, interstate or to all corners of our great nation, trust Transdirect couriers for the highest level of service at the lowest rates.',
      },
    ],
  },
  carbonNeutral: {
    breadcrumb: 'Next Day/ Carbon Neutral Delivery Australia',
    title: 'Carbon Neutral Shipping & Delivery Australia',
    sections: [
      {
        heading: 'Certified Carbon Neutral Courier Services',
        paragraphs: [
          {
            text: 'In 2019, Transdirect became one of Australia’s first certified carbon neutral delivery couriers. Even five years later, we’re among the few carbon neutral shipping services to offer customers this benefit.',
            highlightedText: 'carbon neutral shipping services',
          },
          {
            text: 'We teamed up with the Carbon Reduction Institute to offset all carbon emissions from our parcel courier and freight service partners. What that means is, any delivery service you book with us will help to reduce the carbon footprint impacting our environment. It doesn’t matter if it’s our local couriers, interstate parcel deliveries or international freight.',
            highlightedText: 'Carbon Reduction Institute',
          },
          {
            text: 'From small parcels to large pallets, whichever Transdirect carbon neutral delivery partners you ship with, you’ll automatically be doing your part to help offset carbon emissions.',
            highlightedText: 'Transdirect carbon neutral delivery partners',
          },
        ],
      },
      {
        heading: 'How Does Carbon Neutral Delivery Work?',
        paragraphs: [
          {
            text: 'To become carbon neutral, Transdirect partnered with the Carbon Reduction Institute. Our target was and is to offset 100% of the emissions of our freight services.',
            highlightedText: 'Carbon Reduction Institute',
          },
          {
            text: 'First, we were audited to identify the amount of carbon created. Through the Carbon Reduction Institute’s certified program, we were able to offset our emissions and neutralise our footprint.',
          },
          {
            text: 'Regular audits ensure the number of offsets is matched to the number of carbon emissions created by our freight and delivery services. We launched this initiative in September 2019, becoming one of only two Australian shipping providers at the time to offer carbon-offset parcel services to all of our clients. Learn more about carbon offsets and the NoCO2 certification.',
            highlightedText: 'Learn more about carbon offsets and the NoCO2 certification.',
          },
        ],
      },
      {
        heading: 'Saving Our Environment, Together',
        paragraphs: [
          {
            text: 'We’ve been in the transportation and logistics industry for many years, and we realise the impact our parcel delivery services have on the environment. Of course, people and businesses still need delivery and courier services, for countless reasons.',
          },
          {
            text: 'That’s why we’re always searching for new and better ways to provide the optimal services our 100,000+ customers have relied upon for years. That includes using more environmentally friendly and sustainable methods of transport.',
          },
          {
            text: 'One major step has been implementing carbon offsets and achieving our carbon-neutral certification.',
          },
        ],
      },
      {
        heading: 'Let’s Spread The Word',
        paragraphs: [
          {
            text: 'If you’re using our courier services with your business, why not let your customers know that you’ve chosen a 100% carbon-neutral shipping company?',
          },
          {
            text: 'The more we can spread the word, the more carbon-offset parcel delivery can grow to become the standard, and the healthier our environment will be as a result.',
          },
          {
            text: 'Please feel free to use our 100% Carbon Neutral Delivery badges below on your website or social channels. Let your customers know you’re committed to the cause. Simply click to download and save, and repost wherever appropriate. (And let us know, so we can say thank you!)',
            highlightedText: 'download and save',
          },
        ],
      },
    ],
  },
};
