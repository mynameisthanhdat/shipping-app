import { PATHS } from '../../routes/paths';

export type TransitWarrantyItem = {
  id: string;
  title: string;
  linkLabel: string;
};

export type TransitWarrantySection = {
  id: string;
  title: string;
  items: TransitWarrantyItem[];
};

/** Detail path for a list card — slug is always the item `id`. */
export const getTransitWarrantyDetailPath = (id: string): string =>
  `${PATHS.educationTransitWarranty}/${id}`;

export const TRANSIT_WARRANTY_SECTIONS: TransitWarrantySection[] = [
  {
    id: 'domestic',
    title: 'Domestic',
    items: [
      {
        id: 'allied-express',
        title: 'Allied Express Transit Warranty',
        linkLabel: "Click for Allied's Transit Warranty details",
      },
      {
        id: 'couriers-please',
        title: 'Couriers Please Transit Warranty',
        linkLabel: "Click for Couriers Please's Transit Warranty details",
      },
      {
        id: 'aramex',
        title: 'Aramex Transit Warranty',
        linkLabel: "Click for Aramex's Transit Warranty details",
      },
      {
        id: 'hunter-express',
        title: 'Hunter Express Transit Warranty',
        linkLabel: "Click for Hunter Express's Transit Warranty details",
      },
      {
        id: 'northline',
        title: 'Northline Transit Warranty',
        linkLabel: "Click for Northline's Transit Warranty details",
      },
      {
        id: 'tnt',
        title: 'TNT Transit Warranty',
        linkLabel: "Click for TNT's Transit Warranty details",
      },
      {
        id: 'direct-couriers',
        title: 'Direct Couriers Transit Warranty',
        linkLabel: "Click for Direct Couriers' Transit Warranty details",
      },
      {
        id: 'mrl-global',
        title: 'MRL Global Transit Warranty',
        linkLabel: "Click for MRL Global's Transit Warranty details",
      },
      {
        id: 'bee-direct-same-day',
        title: 'BEE DIRECT Same Day Transit Warranty',
        linkLabel: "Click for BEE DIRECT Same Day's Transit Warranty details",
      },
      {
        id: 'capital-transport',
        title: 'Capital Transport Transit Warranty',
        linkLabel: "Click for Capital Transport's Transit Warranty details",
      },
      {
        id: 'xpress-freight-management',
        title: 'Xpress Freight Management Transit Warranty',
        linkLabel: "Click for Xpress Freight Management's Transit Warranty details",
      },
      {
        id: 'team-global-express',
        title: 'Team Global Express Transit Warranty',
        linkLabel: "Click for Team Global Express's Transit Warranty details",
      },
      {
        id: 'domestic-freight-express',
        title: 'Domestic Freight Express Transit Warranty',
        linkLabel: "Click for Domestic Freight Express's Transit Warranty details",
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
      },
    ],
  },
];

export const getTransitWarrantyItemById = (
  id: string
): TransitWarrantyItem | undefined =>
  TRANSIT_WARRANTY_SECTIONS.flatMap((section) => section.items).find(
    (item) => item.id === id
  );
