/** Mock option lists for step 3 of the quote wizard. */

/** Australia Post street-type abbreviations, spelled out. */
export const STREET_TYPES: string[] = [
  'Street',
  'Road',
  'Avenue',
  'Boulevard',
  'Circuit',
  'Close',
  'Court',
  'Crescent',
  'Drive',
  'Esplanade',
  'Highway',
  'Lane',
  'Parade',
  'Place',
  'Terrace',
  'Way',
];

/**
 * Examples of restricted goods. The design repeats one placeholder tile; these
 * are the categories a courier network actually excludes.
 */
export const DANGEROUS_GOODS: string[] = [
  'Spare batteries',
  'Aerosols',
  'Paint',
  'Perfume',
  'Nail polish',
  'Lighters & matches',
  'Fuel & oil',
  'Fireworks',
  'Ammunition',
  'Pool chemicals',
  'Compressed gas',
  'Dry ice',
  'Glue & solvents',
  'Pesticides',
];

export const AUTHORITY_TO_LEAVE_LOCATIONS: string[] = [
  'Front door',
  'Back door',
  'Front porch',
  'Letterbox',
  'Reception',
  'Garage',
  'With a neighbour',
];

/**
 * The next `count` business days, labelled like "Monday, August 24". Generated
 * at render time so the options never go stale.
 */
export const getCollectionDateOptions = (count = 7): string[] => {
  const formatter = new Intl.DateTimeFormat('en-AU', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  const options: string[] = [];
  const cursor = new Date();

  while (options.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const weekday = cursor.getDay();

    if (weekday !== 0 && weekday !== 6) options.push(formatter.format(cursor));
  }

  return options;
};
