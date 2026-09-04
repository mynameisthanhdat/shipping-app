import React, { useState } from 'react';
import {
  DISCOUNT_ACCOUNT_TYPES,
  WEEKLY_SPEND_OPTIONS,
} from '../../mocks/education/accountEnquiries';
import {
  AccountSignupDetails,
  createEmptyAccountSignup,
} from '../../types/account';
import { FIELD_CLASS, FieldError, Select } from '../Quote/fields';

type FormErrors = Record<string, string>;

const LABEL_CLASS = 'mb-1.5 block text-sm font-bold text-navy';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (details: AccountSignupDetails): FormErrors => {
  const errors: FormErrors = {};

  if (!details.name.trim()) errors.name = 'Enter your name.';
  if (!details.company.trim()) errors.company = 'Enter your company.';
  if (!details.contactNumber.trim()) errors.contactNumber = 'Enter a contact number.';
  if (!details.postcode.trim()) errors.postcode = 'Enter a postcode.';
  if (!details.email.trim()) {
    errors.email = 'Enter your email.';
  } else if (!EMAIL_PATTERN.test(details.email.trim())) {
    errors.email = 'Enter a valid email.';
  }
  if (!details.password) {
    errors.password = 'Enter a password.';
  } else if (details.password.length < 6) {
    errors.password = 'Password must be 6+ characters.';
  }
  if (!details.weeklySpend) errors.weeklySpend = 'Select average weekly spend.';

  return errors;
};

type TextFieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  error?: string;
  minLength?: number;
  onChange: (value: string) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  error,
  minLength,
  onChange,
}) => (
  <div>
    <label htmlFor={id} className={LABEL_CLASS}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      minLength={minLength}
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

const AccountSignupForm: React.FC<AccountSignupFormProps> = ({
  initialValue,
  onSubmit,
  submitLabel = 'Create My Account',
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
      className={`scroll-mt-10 ${className}`}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <TextField
          id="account-name"
          label="Name*"
          value={details.name}
          error={errors.name}
          onChange={(name) => patch({ name })}
        />
        <TextField
          id="account-company"
          label="Company*"
          value={details.company}
          error={errors.company}
          onChange={(company) => patch({ company })}
        />
        <TextField
          id="account-contact"
          label="Contact Number*"
          type="tel"
          value={details.contactNumber}
          error={errors.contactNumber}
          onChange={(contactNumber) => patch({ contactNumber })}
        />
        <TextField
          id="account-postcode"
          label="Postcode*"
          value={details.postcode}
          error={errors.postcode}
          onChange={(postcode) => patch({ postcode })}
        />
        <TextField
          id="account-email"
          label="Email*"
          type="email"
          value={details.email}
          error={errors.email}
          onChange={(email) => patch({ email })}
        />
        <TextField
          id="account-password"
          label="Password (for login, 6+ characters)*"
          type="password"
          minLength={6}
          value={details.password}
          error={errors.password}
          onChange={(password) => patch({ password })}
        />

        <div>
          <label htmlFor="account-weekly-spend" className={LABEL_CLASS}>
            Average Weekly Spend*
          </label>
          <Select
            id="account-weekly-spend"
            value={details.weeklySpend}
            placeholderShown={!details.weeklySpend}
            onChange={(event) => patch({ weeklySpend: event.target.value })}
          >
            <option value="">PLEASE SELECT</option>
            {WEEKLY_SPEND_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </Select>
          <FieldError message={errors.weeklySpend} />
        </div>

        <div>
          <label htmlFor="account-discount-type" className={LABEL_CLASS}>
            Type of Discount Account required
          </label>
          <Select
            id="account-discount-type"
            value={details.discountAccountType}
            placeholderShown={!details.discountAccountType}
            onChange={(event) => patch({ discountAccountType: event.target.value })}
          >
            <option value="">Please select</option>
            {DISCOUNT_ACCOUNT_TYPES.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-brand px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default AccountSignupForm;
