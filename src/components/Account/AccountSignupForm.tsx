import React, { useState } from 'react';
import { WEEKLY_SPEND_OPTIONS } from '../../mocks/education/accountEnquiries';
import { AccountSignupDetails, createEmptyAccountSignup } from '../../types/account';
import {
  FIELD_CLASS,
  FORM_CARD_CLASS,
  FieldError,
  FieldLabel,
  PasswordField,
  Select,
} from '../ui/fields';

type FormErrors = Record<string, string>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POSTCODE_PATTERN = /^\d{4}$/;
const MIN_PASSWORD_LENGTH = 6;

const validate = (details: AccountSignupDetails): FormErrors => {
  const errors: FormErrors = {};

  if (!details.name.trim()) errors.name = 'Enter your name.';
  if (!details.company.trim()) errors.company = 'Enter your company.';
  if (!details.contactNumber.trim()) errors.contactNumber = 'Enter a contact number.';

  if (!details.postcode.trim()) {
    errors.postcode = 'Enter a postcode.';
  } else if (!POSTCODE_PATTERN.test(details.postcode.trim())) {
    errors.postcode = 'Enter a 4-digit postcode.';
  }

  if (!details.email.trim()) {
    errors.email = 'Enter your email.';
  } else if (!EMAIL_PATTERN.test(details.email.trim())) {
    errors.email = 'Enter a valid email.';
  }

  if (!details.password) {
    errors.password = 'Choose a password.';
  } else if (details.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Password must be ${MIN_PASSWORD_LENGTH}+ characters.`;
  }

  if (!details.weeklySpend) errors.weeklySpend = 'Select your average weekly spend.';

  return errors;
};

type TextFieldProps = {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  inputMode?: 'text' | 'tel' | 'email' | 'numeric';
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  type = 'text',
  autoComplete,
  inputMode,
  value,
  error,
  onChange,
}) => (
  <div>
    <FieldLabel htmlFor={id} required>
      {label}
    </FieldLabel>
    <input
      id={id}
      type={type}
      autoComplete={autoComplete}
      inputMode={inputMode}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={FIELD_CLASS}
    />
    <FieldError message={error} />
  </div>
);

export type AccountSignupFormProps = {
  initialValue?: AccountSignupDetails;
  onSubmit: (value: AccountSignupDetails) => void;
  submitLabel?: string;
  className?: string;
};

/**
 * Carries its own card and width cap, so it looks the same wherever it is
 * dropped in. Left to fill its parent it stretches to the full container and
 * the inputs and submit button become unreadably wide.
 */
const AccountSignupForm: React.FC<AccountSignupFormProps> = ({
  initialValue,
  onSubmit,
  submitLabel = 'Create My Free Account',
  className = '',
}) => {
  const [details, setDetails] = useState<AccountSignupDetails>(
    () => initialValue ?? createEmptyAccountSignup()
  );
  const [errors, setErrors] = useState<FormErrors>({});

  const patch = (changes: Partial<AccountSignupDetails>) =>
    setDetails((current) => ({ ...current, ...changes }));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const found = validate(details);
    setErrors(found);

    if (Object.keys(found).length === 0) onSubmit(details);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`max-w-2xl scroll-mt-10 ${FORM_CARD_CLASS} ${className}`}
    >
      <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
        <TextField
          id="account-name"
          label="Name"
          autoComplete="name"
          value={details.name}
          error={errors.name}
          onChange={(name) => patch({ name })}
        />
        <TextField
          id="account-company"
          label="Company"
          autoComplete="organization"
          value={details.company}
          error={errors.company}
          onChange={(company) => patch({ company })}
        />
        <TextField
          id="account-email"
          label="Email"
          type="email"
          autoComplete="email"
          value={details.email}
          error={errors.email}
          onChange={(email) => patch({ email })}
        />
        <TextField
          id="account-contact"
          label="Contact number"
          type="tel"
          autoComplete="tel"
          value={details.contactNumber}
          error={errors.contactNumber}
          onChange={(contactNumber) => patch({ contactNumber })}
        />
        <TextField
          id="account-postcode"
          label="Postcode"
          autoComplete="postal-code"
          inputMode="numeric"
          value={details.postcode}
          error={errors.postcode}
          onChange={(postcode) => patch({ postcode })}
        />

        <div>
          <FieldLabel htmlFor="account-weekly-spend" required>Average weekly spend</FieldLabel>
          <Select
            id="account-weekly-spend"
            value={details.weeklySpend}
            placeholderShown={!details.weeklySpend}
            onChange={(event) => patch({ weeklySpend: event.target.value })}
          >
            <option value="">Select a range</option>
            {WEEKLY_SPEND_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </Select>
          <FieldError message={errors.weeklySpend} />
        </div>

        {/* Full width: the password is the one field people slow down on. */}
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="account-password" required>Password</FieldLabel>
          <PasswordField
            id="account-password"
            autoComplete="new-password"
            value={details.password}
            aria-describedby="account-password-hint"
            onChange={(event) => patch({ password: event.target.value })}
          />
          <p id="account-password-hint" className="mt-1.5 text-sm text-muted">
            {`Used to log in. At least ${MIN_PASSWORD_LENGTH} characters.`}
          </p>
          <FieldError message={errors.password} />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-lg bg-brand px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
      >
        {submitLabel}
      </button>

      <p className="mt-4 text-center text-sm text-muted">
        Free to open. No setup fees, no monthly costs.
      </p>
    </form>
  );
};

export default AccountSignupForm;
