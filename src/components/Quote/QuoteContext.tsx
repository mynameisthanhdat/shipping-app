import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { QuoteDraft, createQuoteDraft } from '../../types/quote';

type QuoteContextValue = {
  draft: QuoteDraft;
  /** Replaces one step's slice, e.g. patch('packageDetails', value). */
  patch: <K extends keyof QuoteDraft>(key: K, value: QuoteDraft[K]) => void;
  reset: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export type QuoteProviderProps = {
  /** Seeds the draft, e.g. from data collected on another page. */
  initialDraft?: QuoteDraft;
  children: React.ReactNode;
};

/**
 * Holds the wizard state above the step outlet so every step reads and writes
 * the same draft while navigating between step routes.
 */
export const QuoteProvider: React.FC<QuoteProviderProps> = ({ initialDraft, children }) => {
  const [draft, setDraft] = useState<QuoteDraft>(() => initialDraft ?? createQuoteDraft());

  const patch = useCallback(
    <K extends keyof QuoteDraft>(key: K, value: QuoteDraft[K]) =>
      setDraft((current) => ({ ...current, [key]: value })),
    []
  );

  const reset = useCallback(() => setDraft(createQuoteDraft()), []);

  const value = useMemo<QuoteContextValue>(
    () => ({ draft, patch, reset }),
    [draft, patch, reset]
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
};

export const useQuote = (): QuoteContextValue => {
  const context = useContext(QuoteContext);

  if (!context) throw new Error('useQuote must be used inside a QuoteProvider.');

  return context;
};
