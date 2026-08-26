/** Mock option lists for the Get a Quote form. Replace with API lookups later. */

import { ItemTypeId } from '../types/quote';

export type ItemTypeOption = {
  id: ItemTypeId;
  label: string;
};

export const ITEM_TYPES: ItemTypeOption[] = [
  { id: 'carton-box', label: 'Carton / Box' },
  { id: 'satchel', label: 'Satchel' },
  { id: 'crate', label: 'Crate' },
  { id: 'pallet', label: 'Pallet' },
  { id: 'tube', label: 'Tube' },
  { id: 'other', label: 'Other' },
];

/** Suburb lookups the real form autocompletes against. */
export const POSTCODES: string[] = [
  '2000, SYDNEY',
  '2300, NEWCASTLE',
  '2600, CANBERRA',
  '2500, WOLLONGONG',
  '3000, MELBOURNE',
  '3220, GEELONG',
  '4000, BRISBANE',
  '4217, GOLD COAST',
  '4551, SUNSHINE COAST',
  '4810, TOWNSVILLE',
  '5000, ADELAIDE',
  '6000, PERTH',
  '7000, HOBART',
  '0800, DARWIN',
];
