/**
 * Data model for the Education Account Enquiries signup form.
 *
 * Mirrors `PackageDetails` in quote.ts: the form owns this slice and hands it
 * back through `onSubmit` once validation passes.
 */
export type AccountSignupDetails = {
  name: string;
  company: string;
  contactNumber: string;
  postcode: string;
  email: string;
  password: string;
  weeklySpend: string;
  discountAccountType: string;
};

export const createEmptyAccountSignup = (): AccountSignupDetails => ({
  name: '',
  company: '',
  contactNumber: '',
  postcode: '',
  email: '',
  password: '',
  weeklySpend: '',
  discountAccountType: '',
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** True once required signup fields are filled and the password meets the minimum. */
export const isAccountSignupComplete = (details: AccountSignupDetails): boolean =>
  Boolean(
    details.name.trim() &&
      details.company.trim() &&
      details.contactNumber.trim() &&
      details.postcode.trim() &&
      EMAIL_PATTERN.test(details.email.trim()) &&
      details.password.length >= 6 &&
      details.weeklySpend
  );
