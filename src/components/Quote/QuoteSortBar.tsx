import React from 'react';
import { QUOTE_SORTS } from '../../mocks/carrierQuotes';
import { QuoteSortId } from '../../types/quote';

export type QuoteSortBarProps = {
  value: QuoteSortId;
  onChange: (value: QuoteSortId) => void;
};

const QuoteSortBar: React.FC<QuoteSortBarProps> = ({ value, onChange }) => (
  <div className="flex flex-wrap items-center gap-3">
    <span
      id="quote-sort-label"
      className="text-xs font-bold uppercase tracking-wider text-navy"
    >
      Sort by:
    </span>

    <div role="radiogroup" aria-labelledby="quote-sort-label" className="flex flex-wrap gap-3">
      {QUOTE_SORTS.map((option) => {
        const selected = option.id === value;

        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option.id)}
            className={`rounded-md px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
              selected
                ? 'bg-brand text-white'
                : 'bg-muted-surface/40 text-navy hover:bg-muted-surface/70'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  </div>
);

export default QuoteSortBar;
