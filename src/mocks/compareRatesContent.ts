/**
 * Static copy for the Compare Rates page. Kept beside the rate data so the
 * marketing text can move to a CMS without touching the components.
 */

export type CalculatorStep = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const CALCULATOR_STEPS: CalculatorStep[] = [
  {
    title: 'Select your parcel type & weight',
    description: 'Parcels & satchels up to 25kg, or pallets for heavy freight.',
  },
  {
    title: 'Choose your dispatch location',
    description: 'Select from major cities including Sydney, Melbourne, Brisbane and Perth.',
  },
  {
    title: 'Set your weekly spend',
    description: 'Adjust the slider to reflect your weekly shipping volume.',
  },
  {
    title: 'View your shipping prices',
    description: 'Instantly access estimated delivery costs based on your inputs.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Are these shipping prices exact?',
    answer:
      'The prices shown are estimates based on typical shipping weights and common domestic delivery routes. Final courier costs may vary depending on exact parcel dimensions, service selection and provider availability.',
  },
  {
    question: 'Can I track my shipment?',
    answer:
      'Yes. Once your booking is confirmed, you can monitor the status of your delivery in real time using our tracking tool.',
  },
  {
    question: 'Is it free to become a member?',
    answer:
      'Yes, creating a Parcelio account is 100% free. There are no setup costs, no monthly fees, and no minimum spending commitments. You only pay when you ship.',
  },
  {
    question: 'Can I send large or heavy items?',
    answer:
      'Yes. Our pricing calculator includes options for larger and heavier shipments, including crates and pallets. Costs will vary depending on weight, size, and delivery distance.',
  },
];
