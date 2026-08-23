import React from 'react';
import { RouteObject } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import Education from '../pages/Education';
import OurServices from '../pages/OurServices';
import ExpertInterStateCouriersInAus from '../pages/OurServices/ExpertInterStateCouriersInAus';
import SameDayCourierServices from '../pages/OurServices/SameDayCourierServices';
import NextDayOvernightDelivery from '../pages/OurServices/NextDayOvernightDelivery';
import ParcelDelivery from '../pages/OurServices/ParcelDelivery';
import PalletTransportServices from '../pages/OurServices/PalletTransportServices';
import Testimonials from '../pages/Education/Testimonials';
import CompareRates from '../pages/CompareRates';
import GetAQuote from '../pages/GetAQuote';
import PackageDetailsStep from '../pages/GetAQuote/PackageDetailsStep';
import SelectQuoteStep from '../pages/GetAQuote/SelectQuoteStep';
import UpcomingStep from '../pages/GetAQuote/UpcomingStep';
import PlaceholderPage from '../pages/PlaceholderPage';
import NotFoundPage from '../pages/NotFoundPage';
import {
  FOOTER_SERVICES,
  FOOTER_SOLUTIONS,
  MAIN_NAV,
  PATHS,
  flattenNav,
} from './paths';
import { QUOTE_STEPS } from './quoteSteps';

/** Pages that are fully built. Add an entry here when a new page lands. */
const REAL_PAGES: Record<string, React.ReactElement> = {
  [PATHS.home]: <Home />,
  [PATHS.services]: <OurServices />,
  [PATHS.servicesExpertInterstateCouriers]: <ExpertInterStateCouriersInAus />,
  [PATHS.servicesSameDayCourier]: <SameDayCourierServices />,
  [PATHS.servicesNextDayDelivery]: <NextDayOvernightDelivery />,
  [PATHS.servicesParcelDelivery]: <ParcelDelivery />,
  [PATHS.servicesPalletTransport]: <PalletTransportServices />,
  [PATHS.education]: <Education />,
  [PATHS.educationTestimonials]: <Testimonials />,
  [PATHS.compareRates]: <CompareRates />,
};

/**
 * The quote wizard: one nested route per step, all sharing the stepper and draft
 * state held by the GetAQuote layout. Replace an `UpcomingStep` with the real
 * screen as each step is designed.
 */
const quoteRoute: RouteObject = {
  path: PATHS.quote.replace(/^\//, ''),
  element: <GetAQuote />,
  children: [
    { index: true, element: <PackageDetailsStep /> },
    { path: 'select-quote', element: <SelectQuoteStep /> },
    ...QUOTE_STEPS.slice(2).map<RouteObject>((step) => ({
      path: step.segment,
      element: <UpcomingStep step={step} />,
    })),
  ],
};

/** Paths owned by a real page or route, so they never fall through to a mock. */
const EXPLICIT_PATHS = new Set<string>([...Object.keys(REAL_PAGES), PATHS.quote]);

/**
 * Remaining routes: reuse the nav lists so each page just renders its own
 * menu label. Swap PlaceholderPage for the real page once it is built.
 */
const MOCK_PAGES = flattenNav([
  ...MAIN_NAV,
  ...FOOTER_SERVICES,
  ...FOOTER_SOLUTIONS,
  { label: 'Open account', to: PATHS.openAccount },
  { label: 'Sign in', to: PATHS.signIn },
]).filter(
  (page, index, all) =>
    !EXPLICIT_PATHS.has(page.to) &&
    all.findIndex((other) => other.to === page.to) === index
);

export const routes: RouteObject[] = [
  {
    path: PATHS.home,
    element: <MainLayout />,
    children: [
      { index: true, element: REAL_PAGES[PATHS.home] },
      ...Object.entries(REAL_PAGES)
        .filter(([path]) => path !== PATHS.home)
        .map<RouteObject>(([path, element]) => ({
          path: path.replace(/^\//, ''),
          element,
        })),
      quoteRoute,
      ...MOCK_PAGES.map<RouteObject>((page) => ({
        path: page.to.replace(/^\//, ''),
        element: <PlaceholderPage title={page.label} />,
      })),
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
