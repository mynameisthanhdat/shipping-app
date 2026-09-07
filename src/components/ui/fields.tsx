import React, { useState } from 'react';

/** Shared field styling for the quote wizard, so every step looks the same. */
export const FIELD_CLASS =
  'w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-placeholder focus:border-navy/25 focus:outline-none focus:ring-2 focus:ring-brand/20';

/** `sr-only` replaces this on repeated rows; it is out of flow, so the margin
 *  collapses away on its own and fields need no conditional spacing. */
export const LABEL_CLASS = 'mb-1.5 block text-sm uppercase tracking-wider text-muted';

export const FieldError: React.FC<{ message?: string }> = ({ message }) =>
  message ? <p className="mt-1 text-sm text-red-600">{message}</p> : null;

/** Card shell shared by the auth forms. Callers add their own max-width. */
export const FORM_CARD_CLASS =
  'mx-auto rounded-2xl border border-black/10 bg-white p-7 shadow-card sm:p-9';

export type FieldLabelProps = {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
};

/** The asterisk is brand-coloured so it reads as a marker, not part of the word. */
export const FieldLabel: React.FC<FieldLabelProps> = ({ htmlFor, required, children }) => (
  <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-navy">
    {children}
    {required && <span className="text-brand"> *</span>}
  </label>
);

const EyeIcon: React.FC<{ off: boolean }> = ({ off }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4"
  >
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    {off && <path d="m3 3 18 18" />}
  </svg>
);

export type PasswordFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'className'
>;

/** Password input with a reveal toggle, so people can check what they typed. */
export const PasswordField: React.FC<PasswordFieldProps> = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input {...props} type={visible ? 'text' : 'password'} className={`${FIELD_CLASS} pr-12`} />
      <button
        type="button"
        onClick={() => setVisible((current) => !current)}
        aria-label={visible ? 'Hide password' : 'Show password'}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-placeholder transition-colors hover:text-navy"
      >
        <EyeIcon off={visible} />
      </button>
    </div>
  );
};

export const SECTION_TITLE = 'text-[15px] font-bold uppercase tracking-wide text-navy';

export const TEXTAREA_CLASS = `${FIELD_CLASS} min-h-[84px] resize-y`;

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: React.ReactNode;
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
  label: React.ReactNode;
};

export const Radio: React.FC<RadioProps> = ({ label, className = '', ...rest }) => (
  <label className={`flex cursor-pointer items-center gap-2 text-sm text-navy ${className}`}>
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
