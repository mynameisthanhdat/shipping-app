import React, { useMemo, useState } from 'react';
import { EXPIRY_MONTHS, PAYMENT_METHODS, getExpiryYears } from '../../mocks/paymentOptions';
import { PaymentMethod } from '../../types/quote';
import { FIELD_CLASS, FieldError, Radio, SECTION_TITLE, Select } from './fields';

/**
 * Card details live here and nowhere else — never in the shared wizard draft.
 * When a provider is wired up, hand these straight to its SDK (ideally swap
 * these inputs for hosted fields so raw card data never enters app state).
 */
type CardFields = {
  holderName: string;
  cardNumber: string;
  ccv: string;
  expiryMonth: string;
  expiryYear: string;
};

const emptyCard = (): CardFields => ({
  holderName: '',
  cardNumber: '',
  ccv: '',
  expiryMonth: '',
  expiryYear: '',
});

const digitsOnly = (value: string) => value.replace(/\D/g, '');

/** Groups digits in fours so long card numbers stay readable while typing. */
const formatCardNumber = (value: string) =>
  digitsOnly(value).slice(0, 19).replace(/(.{4})/g, '$1 ').trim();

const validateCard = (card: CardFields): Partial<Record<keyof CardFields, string>> => {
  const errors: Partial<Record<keyof CardFields, string>> = {};
  const number = digitsOnly(card.cardNumber);

  if (!card.holderName.trim()) errors.holderName = 'Required.';
  if (number.length < 13 || number.length > 19) {
    errors.cardNumber = 'Enter a valid card number.';
  }
  if (card.ccv.length < 3) errors.ccv = 'Enter the 3 or 4 digit code.';

  if (!card.expiryMonth || !card.expiryYear) {
    errors.expiryMonth = 'Select an expiry month and year.';
  } else {
    const now = new Date();
    const expired =
      Number(card.expiryYear) < now.getFullYear() ||
      (Number(card.expiryYear) === now.getFullYear() &&
        Number(card.expiryMonth) < now.getMonth() + 1);

    if (expired) errors.expiryMonth = 'This card has expired.';
  }

  return errors;
};

const LogoPlaceholder: React.FC = () => (
  <span className="rounded border border-black/10 px-3 py-1 text-sm text-muted-placeholder">
    LOGO
  </span>
);

const FieldRow: React.FC<{
  htmlFor?: string;
  label: string;
  children: React.ReactNode;
}> = ({ htmlFor, label, children }) => (
  <div className="md:grid md:grid-cols-[190px_1fr] md:gap-4">
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-bold text-navy md:mb-0 md:self-center">
      {label}
    </label>
    <div>{children}</div>
  </div>
);

export type PaymentFormProps = {
  method: PaymentMethod;
  onMethodChange: (method: PaymentMethod) => void;
  onBack: () => void;
  onSubmit: () => void;
};

const PaymentForm: React.FC<PaymentFormProps> = ({
  method,
  onMethodChange,
  onBack,
  onSubmit,
}) => {
  const [card, setCard] = useState<CardFields>(emptyCard);
  const [errors, setErrors] = useState<Partial<Record<keyof CardFields, string>>>({});

  const expiryYears = useMemo(() => getExpiryYears(), []);
  const isPayPal = method === 'paypal';

  const patch = (changes: Partial<CardFields>) =>
    setCard((current) => ({ ...current, ...changes }));

  const changeMethod = (next: PaymentMethod) => {
    onMethodChange(next);
    setErrors({});
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const found = validateCard(card);
    setErrors(found);

    if (Object.keys(found).length === 0) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <section className="border-t border-black/10 pt-8">
        <h2 className={SECTION_TITLE}>Choose your payment method</h2>

        <div className="mt-5 space-y-4">
          {PAYMENT_METHODS.map((option) => (
            <div key={option.id}>
              <Radio
                name="payment-method"
                value={option.id}
                checked={method === option.id}
                onChange={() => changeMethod(option.id)}
                label={
                  <span className="flex items-center gap-8">
                    <span className="w-32 uppercase">{option.label}</span>
                    {option.logo ? (
                      <img src={option.logo} alt={option.label} className="h-6" />
                    ) : (
                      <LogoPlaceholder />
                    )}
                  </span>
                }
              />

              {option.note && method === option.id && (
                <p className="ml-[22px] mt-2 text-sm text-muted">{option.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {isPayPal ? (
        <p className="rounded-lg border border-black/10 bg-muted-surface/20 p-4 text-sm text-navy">
          PayPal checkout is not connected yet, so this option cannot be completed. Choose
          credit card to continue.
        </p>
      ) : (
        <section className="space-y-3 md:max-w-2xl">
          <FieldRow htmlFor="card-holder" label="Card holder name*">
            <input
              id="card-holder"
              type="text"
              autoComplete="cc-name"
              value={card.holderName}
              onChange={(event) => patch({ holderName: event.target.value })}
              className={FIELD_CLASS}
            />
            <FieldError message={errors.holderName} />
          </FieldRow>

          <FieldRow htmlFor="card-number" label="Card number*">
            <input
              id="card-number"
              type="text"
              inputMode="numeric"
              autoComplete="cc-number"
              value={card.cardNumber}
              onChange={(event) => patch({ cardNumber: formatCardNumber(event.target.value) })}
              className={FIELD_CLASS}
            />
            <FieldError message={errors.cardNumber} />
          </FieldRow>

          <FieldRow htmlFor="card-ccv" label="CCV*">
            <input
              id="card-ccv"
              type="text"
              inputMode="numeric"
              autoComplete="cc-csc"
              value={card.ccv}
              onChange={(event) => patch({ ccv: digitsOnly(event.target.value).slice(0, 4) })}
              className={FIELD_CLASS}
            />
            <FieldError message={errors.ccv} />
          </FieldRow>

          <FieldRow label="Expiry date*">
            <div className="flex gap-3">
              <Select
                aria-label="Expiry month"
                autoComplete="cc-exp-month"
                value={card.expiryMonth}
                placeholderShown={!card.expiryMonth}
                onChange={(event) => patch({ expiryMonth: event.target.value })}
                className="w-28"
              >
                <option value="">MM</option>
                {EXPIRY_MONTHS.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </Select>

              <Select
                aria-label="Expiry year"
                autoComplete="cc-exp-year"
                value={card.expiryYear}
                placeholderShown={!card.expiryYear}
                onChange={(event) => patch({ expiryYear: event.target.value })}
                className="w-32"
              >
                <option value="">YYYY</option>
                {expiryYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Select>
            </div>
            <FieldError message={errors.expiryMonth} />
          </FieldRow>
        </section>
      )}

      <div className="flex items-center justify-between border-t border-black/10 pt-8">
        <button
          type="button"
          onClick={onBack}
          className="rounded-md bg-muted-surface/40 px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-muted-surface/70"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isPayPal}
          className="rounded-md bg-brand px-8 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-40"
        >
          Process order
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
