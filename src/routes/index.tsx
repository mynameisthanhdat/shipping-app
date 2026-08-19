import React from 'react';
import { RouteObject } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import Education from '../pages/Education';
import OurServices from '../pages/OurServices';
import ExpertInterStateCouriersInAus from '../pages/OurServices/ExpertInterStateCouriersInAus';
import Testimonials from '../pages/Education/Testimonials';
import TransitWarranty from '../pages/Education/TransitWarranty';
import CompareRates from '../pages/CompareRates';
import PlaceholderPage from '../pages/PlaceholderPage';
import NotFoundPage from '../pages/NotFoundPage';
import {
  FOOTER_SERVICES,
  FOOTER_SOLUTIONS,
  MAIN_NAV,
  PATHS,
  flattenNav,
} from './paths';

/** Pages that are fully built. Add an entry here when a new page lands. */
const REAL_PAGES: Record<string, React.ReactElement> = {
  [PATHS.home]: <Home />,
  [PATHS.services]: <OurServices />,
  [PATHS.servicesExpertInterstateCouriers]: <ExpertInterStateCouriersInAus />,
  [PATHS.education]: <Education />,
  [PATHS.educationTestimonials]: <Testimonials />,
  [PATHS.educationTransitWarranty]: <TransitWarranty />,
  [PATHS.compareRates]: <CompareRates />,
};

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
    !REAL_PAGES[page.to] &&
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
      ...MOCK_PAGES.map<RouteObject>((page) => ({
        path: page.to.replace(/^\//, ''),
        element: <PlaceholderPage title={page.label} />,
      })),
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
