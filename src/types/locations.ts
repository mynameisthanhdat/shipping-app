import { RateCard } from '../mocks/compareRates';
import { FaqItem } from '../mocks/education/faqs';

export type LocationLink = {
  label: string;
  to: string;
};

export type RouteBenefit = {
  id: string;
  title: string;
  body: string;
};

export type KeyInfoItem = {
  id: string;
  title: string;
  /** Set true to append the packaging-requirements link after the body. */
  showPackagingLink?: boolean;
  body: string;
};

/** Page data for an interstate corridor landing (e.g. Melbourne → Sydney). */
export type InterstateRouteData = {
  from: string;
  to: string;
  /** Opening paragraphs under the H1 (before the shared member / quote CTAs). */
  intro: string[];
  /** Indicative rate tables for this corridor (parcels / crates / pallets). */
  rateCards: RateCard[];
  benefits: RouteBenefit[];
  keyInfo: KeyInfoItem[];
  faqs: FaqItem[];
};
