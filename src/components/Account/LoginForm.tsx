import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import { LoginCredentials, createEmptyLogin } from '../../types/account';
import {
  Checkbox,
  FIELD_CLASS,
  FORM_CARD_CLASS,
  FieldError,
  FieldLabel,
  PasswordField,
} from '../ui/fields';

type FormErrors = Partial<Record<'email' | 'password', string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (credentials: LoginCredentials): FormErrors => {
  const errors: FormErrors = {};

  if (!credentials.email.trim()) {
    errors.email = 'Enter your email.';
  } else if (!EMAIL_PATTERN.test(credentials.email.trim())) {
    errors.email = 'Enter a valid email.';
  }

  if (!credentials.password) errors.password = 'Enter your password.';

  return errors;
};

export type LoginFormProps = {
  onSubmit: (credentials: LoginCredentials) => void;
  /** Message shown under the button, e.g. a failed sign-in. */
  notice?: string;
};

/**
 * Narrower card than the signup form — two fields read better in a tight
 * column than stretched across the page.
 */
const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, notice }) => {
  const [credentials, setCredentials] = useState<LoginCredentials>(createEmptyLogin);
  const [errors, setErrors] = useState<FormErrors>({});

  const patch = (changes: Partial<LoginCredentials>) =>
    setCredentials((current) => ({ ...current, ...changes }));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const found = validate(credentials);
    setErrors(found);

    if (Object.keys(found).length === 0) onSubmit(credentials);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={`max-w-md ${FORM_CARD_CLASS}`}>
      <div className="space-y-4">
        <div>
          <FieldLabel htmlFor="login-email" required>
            Email
          </FieldLabel>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            value={credentials.email}
            onChange={(event) => patch({ email: event.target.value })}
            className={FIELD_CLASS}
          />
          <FieldError message={errors.email} />
        </div>

        <div>
          <FieldLabel htmlFor="login-password" required>
            Password
          </FieldLabel>
          <PasswordField
            id="login-password"
            autoComplete="current-password"
            value={credentials.password}
            onChange={(event) => patch({ password: event.target.value })}
          />
          <FieldError message={errors.password} />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Checkbox
          label="Remember me"
          checked={credentials.rememberMe}
          onChange={(event) => patch({ rememberMe: event.target.checked })}
        />
        <Link
          to={PATHS.forgotPassword}
          className="text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-lg bg-brand px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
      >
        Log In
      </button>

      {notice && <p className="mt-4 text-center text-sm text-muted">{notice}</p>}
    </form>
  );
};

export default LoginForm;
