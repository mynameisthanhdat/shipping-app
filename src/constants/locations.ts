import { PATHS } from '../routes/paths';
import { LocationLink } from '../types/locations';

const city = (slug: string, label: string): LocationLink => ({
  label,
  to: `${PATHS.locations}/${slug}`,
});

/** Australian cities served by Parcelio courier network. */
export const LOCATION_CITIES: LocationLink[] = [
  city('melbourne', 'Melbourne'),
  city('sydney', 'Sydney'),
  city('perth', 'Perth'),
  city('brisbane', 'Brisbane'),
  city('adelaide', 'Adelaide'),
  city('canberra', 'Canberra'),
  city('hobart', 'Hobart'),
  city('darwin', 'Darwin'),
  city('gold-coast', 'Gold Coast'),
  city('sunshine-coast', 'Sunshine Coast'),
  city('geelong', 'Geelong'),
];

const REAL_LOCATION_PATHS = new Set<string>([PATHS.locationsMelbourne]);

/** Detail paths that fall through to PlaceholderPage until city pages ship. */
export const LOCATION_DETAIL_PAGES = LOCATION_CITIES.filter(
  (item) => !REAL_LOCATION_PATHS.has(item.to)
);
