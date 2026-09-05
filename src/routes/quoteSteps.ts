import { isCollectionDetailsComplete } from '../components/Quote/collectionFields';
import {
  QuoteDraft,
  isAdditionalInformationComplete,
  isPackageDetailsComplete,
} from '../types/quote';
import { PATHS } from './paths';

export type QuoteStepId =
  | 'package-details'
  | 'select-quote'
  | 'collection-details'
  | 'additional-information'
  | 'payment';

export type QuoteStep = {
  id: QuoteStepId;
  label: string;
  /** Path segment under /get-a-quote. Empty string marks the index step. */
  segment: string;
};

/** Single source of truth for the wizard: order, labels and URLs. */
export const QUOTE_STEPS: QuoteStep[] = [
  { id: 'package-details', label: 'Package Details', segment: '' },
  { id: 'select-quote', label: 'Select Quote', segment: 'select-quote' },
  { id: 'collection-details', label: 'Collection Details', segment: 'collection-details' },
  {
    id: 'additional-information',
    label: 'Additional Information',
    segment: 'additional-information',
  },
  { id: 'payment', label: 'Payment', segment: 'payment' },
];

export const getQuoteStepPath = (step: QuoteStep): string =>
  step.segment ? `${PATHS.quote}/${step.segment}` : PATHS.quote;

/** Index of the step a pathname points at, falling back to the first step. */
export const getQuoteStepIndex = (pathname: string): number => {
  const normalized = pathname.replace(/\/+$/, '') || PATHS.quote;
  const index = QUOTE_STEPS.findIndex((step) => getQuoteStepPath(step) === normalized);

  return index === -1 ? 0 : index;
};

/**
 * How many steps the draft has satisfied. This doubles as the highest step the
 * user may jump to, so direct links to unfinished steps bounce back.
 *
 * Extend with one clause per step as steps 2–5 land.
 */
export const getCompletedStepCount = (draft: QuoteDraft): number => {
  if (!isPackageDetailsComplete(draft.packageDetails)) return 0;
  if (!draft.selectedQuoteId) return 1;
  if (!isCollectionDetailsComplete(draft.collectionDetails)) return 2;
  if (!isAdditionalInformationComplete(draft.additionalInformation)) return 3;

  return 4;
};
