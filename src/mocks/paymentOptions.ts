/** Payment options for step 5 of the quote wizard. */

import { PaymentMethod } from '../types/quote';

export type PaymentMethodOption = {
  id: PaymentMethod;
  label: string;
  /** Drop a logo path in here to replace the placeholder badge. */
  logo?: string;
  /** Shown under the option when it hands off to an external checkout. */
  note?: string;
};

export const PAYMENT_METHODS: PaymentMethodOption[] = [
  {
    id: 'paypal',
    label: 'PayPal',
    note: 'You will be redirected to PayPal to complete this payment.',
  },
  { id: 'credit-card', label: 'Credit card' },
];

export const EXPIRY_MONTHS: string[] = Array.from({ length: 12 }, (_, index) =>
  String(index + 1).padStart(2, '0')
);

/** The current year plus the next 11, which covers any card in circulation. */
export const getExpiryYears = (count = 12): string[] => {
  const thisYear = new Date().getFullYear();

  return Array.from({ length: count }, (_, index) => String(thisYear + index));
};
