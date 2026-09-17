import React, { useState } from 'react';
import { FIELD_CLASS, FORM_CARD_CLASS, FieldError, FieldLabel } from '../ui/fields';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ForgotPasswordFormProps = {
  onSubmit: (email: string) => void;
  /** Message shown under the button, e.g. a failed request. */
  notice?: string;
};

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onSubmit, notice }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setError('Enter your email.');
      return;
    }
    if (!EMAIL_PATTERN.test(trimmed)) {
      setError('Enter a valid email.');
      return;
    }

    setError(undefined);
    onSubmit(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={`max-w-md ${FORM_CARD_CLASS}`}>
      <div>
        <FieldLabel htmlFor="forgot-email" required>
          Email
        </FieldLabel>
        <input
          id="forgot-email"
          type="email"
          autoComplete="email"
          autoFocus
          value={email}
          aria-describedby="forgot-email-hint"
          onChange={(event) => setEmail(event.target.value)}
          className={FIELD_CLASS}
        />
        <p id="forgot-email-hint" className="mt-1.5 text-sm text-muted">
          Use the address you signed up with.
        </p>
        <FieldError message={error} />
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-lg bg-brand px-8 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-brand-hover"
      >
        Send reset link
      </button>

      {notice && <p className="mt-4 text-center text-sm text-muted">{notice}</p>}
    </form>
  );
};

export default ForgotPasswordForm;
