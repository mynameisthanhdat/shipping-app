import { PATHS } from '../routes/paths';
import { LocationLink } from '../types/locations';

const city = (slug: string, label: string): LocationLink => ({
  label,
  to: `${PATHS.locations}/${slug}`,
});

const route = (from: string, toCity: string, label: string): LocationLink => ({
  label,
  to: `${PATHS.locations}/${from}/to-${toCity}`,
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

/** High-traffic interstate courier corridors. */
export const POPULAR_ROUTES: LocationLink[] = [
  route('melbourne', 'sydney', 'From Melbourne to Sydney'),
  route('melbourne', 'brisbane', 'From Melbourne to Brisbane'),
  route('melbourne', 'perth', 'From Melbourne to Perth'),
  route('melbourne', 'adelaide', 'From Melbourne to Adelaide'),
  route('melbourne', 'darwin', 'From Melbourne to Darwin'),
  route('melbourne', 'canberra', 'From Melbourne to Canberra'),
  route('sydney', 'melbourne', 'From Sydney to Melbourne'),
  route('sydney', 'brisbane', 'From Sydney to Brisbane'),
  route('sydney', 'perth', 'From Sydney to Perth'),
  route('brisbane', 'sydney', 'From Brisbane to Sydney'),
  route('brisbane', 'melbourne', 'From Brisbane to Melbourne'),
  route('brisbane', 'perth', 'From Brisbane to Perth'),
  route('perth', 'melbourne', 'From Perth to Melbourne'),
  route('perth', 'sydney', 'From Perth to Sydney'),
  route('perth', 'brisbane', 'From Perth to Brisbane'),
  route('adelaide', 'melbourne', 'From Adelaide to Melbourne'),
];

const REAL_LOCATION_PATHS = new Set<string>([
  PATHS.locationsMelbourne,
  PATHS.locationsMelbourneToSydney,
  PATHS.locationsMelbourneToBrisbane,
  PATHS.locationsMelbourneToPerth,
  PATHS.locationsMelbourneToAdelaide,
  PATHS.locationsMelbourneToDarwin,
  PATHS.locationsMelbourneToCanberra,
]);

/** Detail paths that fall through to PlaceholderPage until city/route pages ship. */
export const LOCATION_DETAIL_PAGES = [
  ...LOCATION_CITIES.filter((item) => !REAL_LOCATION_PATHS.has(item.to)),
  ...POPULAR_ROUTES.filter((item) => !REAL_LOCATION_PATHS.has(item.to)),
];
