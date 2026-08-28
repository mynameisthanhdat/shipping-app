import React from 'react';

/** Shared field styling for the quote wizard, so every step looks the same. */
export const FIELD_CLASS =
  'w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-placeholder focus:border-navy/25 focus:outline-none focus:ring-2 focus:ring-brand/20';

/** `sr-only` replaces this on repeated rows; it is out of flow, so the margin
 *  collapses away on its own and fields need no conditional spacing. */
export const LABEL_CLASS = 'mb-1.5 block text-sm uppercase tracking-wider text-muted';

export const FieldError: React.FC<{ message?: string }> = ({ message }) =>
  message ? <p className="mt-1 text-sm text-red-600">{message}</p> : null;

export const TEXTAREA_CLASS = `${FIELD_CLASS} min-h-[84px] resize-y`;

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...rest }) => (
  <label className={`flex items-start gap-2.5 text-sm text-navy ${className}`}>
    <input
      {...rest}
      type="checkbox"
      className="mt-0.5 h-4 w-4 shrink-0 rounded accent-brand"
    />
    <span>{label}</span>
  </label>
);

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
};

export const Radio: React.FC<RadioProps> = ({ label, className = '', ...rest }) => (
  <label className={`flex items-center gap-2 text-sm text-navy ${className}`}>
    <input {...rest} type="radio" className="h-3 w-3 shrink-0 accent-brand" />
    <span>{label}</span>
  </label>
);

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  /** Dims the text while the placeholder option is the one showing. */
  placeholderShown?: boolean;
};

/**
 * Native select with the browser arrow suppressed, so the chevron can sit 20px
 * clear of the border instead of hugging it.
 */
export const Select: React.FC<SelectProps> = ({
  className = '',
  placeholderShown = false,
  children,
  ...rest
}) => (
  <div className="relative">
    <select
      {...rest}
      className={`${FIELD_CLASS} appearance-none pr-12 ${
        placeholderShown ? 'text-muted-placeholder' : ''
      } ${className}`}
    >
      {children}
    </select>

    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </div>
);
