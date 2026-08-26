export type TransitWarrantyItem = {
  id: string;
  title: string;
  linkLabel: string;
  href: string;
};

export type TransitWarrantySection = {
  id: string;
  title: string;
  items: TransitWarrantyItem[];
};

export const TRANSIT_WARRANTY_SECTIONS: TransitWarrantySection[] = [
  {
    id: 'domestic',
    title: 'Domestic',
    items: [
      {
        id: 'allied-express',
        title: 'Allied Express Transit Warranty',
        linkLabel: "Click for Allied's Transit Warranty details",
        href: '#',
      },
      {
        id: 'couriers-please',
        title: 'Couriers Please Transit Warranty',
        linkLabel: "Click for Couriers Please's Transit Warranty details",
        href: '#',
      },
      {
        id: 'aramex',
        title: 'Aramex Transit Warranty',
        linkLabel: "Click for Aramex's Transit Warranty details",
        href: '#',
      },
      {
        id: 'hunter-express',
        title: 'Hunter Express Transit Warranty',
        linkLabel: "Click for Hunter Express's Transit Warranty details",
        href: '#',
      },
      {
        id: 'northline',
        title: 'Northline Transit Warranty',
        linkLabel: "Click for Northline's Transit Warranty details",
        href: '#',
      },
      {
        id: 'tnt',
        title: 'TNT Transit Warranty',
        linkLabel: "Click for TNT's Transit Warranty details",
        href: '#',
      },
      {
        id: 'direct-couriers',
        title: 'Direct Couriers Transit Warranty',
        linkLabel: "Click for Direct Couriers' Transit Warranty details",
        href: '#',
      },
      {
        id: 'mrl-global',
        title: 'MRL Global Transit Warranty',
        linkLabel: "Click for MRL Global's Transit Warranty details",
        href: '#',
      },
      {
        id: 'transdirect-same-day',
        title: 'Transdirect Same Day Transit Warranty',
        linkLabel: "Click for Transdirect Same Day's Transit Warranty details",
        href: '#',
      },
      {
        id: 'capital-transport',
        title: 'Capital Transport Transit Warranty',
        linkLabel: "Click for Capital Transport's Transit Warranty details",
        href: '#',
      },
      {
        id: 'xpress-freight-management',
        title: 'Xpress Freight Management Transit Warranty',
        linkLabel: "Click for Xpress Freight Management's Transit Warranty details",
        href: '#',
      },
      {
        id: 'team-global-express',
        title: 'Team Global Express Transit Warranty',
        linkLabel: "Click for Team Global Express's Transit Warranty details",
        href: '#',
      },
      {
        id: 'domestic-freight-express',
        title: 'Domestic Freight Express Transit Warranty',
        linkLabel: "Click for Domestic Freight Express's Transit Warranty details",
        href: '#',
      },
    ],
  },
  {
    id: 'international',
    title: 'International',
    items: [
      {
        id: 'fedex-international',
        title: 'Fedex International Transit Warranty',
        linkLabel: "Click for Fedex International's Transit Warranty details",
        href: '#',
      },
    ],
  },
];
