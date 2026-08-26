export type AccountBenefit = {
  id: string;
  title: string;
  body: string;
};

export type AccountStep = {
  id: string;
  title: string;
  body: string;
};

export type AccountReview = {
  id: string;
  quote: string;
};

export type AccountFaq = {
  id: string;
  question: string;
  answer: string;
};

export type AccountSelectOption = {
  id: string;
  label: string;
};

/** Member benefits — temporary mock until education API exists. */
export const ACCOUNT_BENEFITS: AccountBenefit[] = [
  {
    id: 'member-discount',
    title: 'Earn a 10% Member Discount by Opening a Courier Account',
    body: "By signing up, you'll get an automatic 10% discount on every booking you make. There are no subscriptions or hidden costs, just instant savings every time you send a parcel.",
  },
  {
    id: 'volume-discount',
    title: 'Unlock Up to 30% Off Based on Your Weekly Shipping Volume',
    body: "If you are a regular shipper, you could be eligible for up to 30% off. Once you've booked a few deliveries, our system calculates your average volume over a 12-week period and applies extra savings if you qualify. You can also request a review through your Member Area or reach out to our team for help.",
  },
  {
    id: 'discount-secure',
    title: 'Your Volume-based Shipping Discounts Stay Secure',
    body: "Worried about losing your discount if your shipping slows down? Don't be. At Transdirect, your most recent discount level stays in place, even if your volume drops. It's our way of rewarding loyalty and supporting small businesses through seasonal peaks and troughs.",
  },
];

/** Signup steps — temporary mock until education API exists. */
export const ACCOUNT_STEPS: AccountStep[] = [
  {
    id: 'register',
    title: 'Step 1: Register Online',
    body: 'Fill out our quick online sign-up form to create your free account.',
  },
  {
    id: 'dashboard',
    title: 'Step 2: Jump Into Your Dashboard',
    body: 'Log in to view your rates, compare courier options and track deliveries from one easy-to-use dashboard.',
  },
  {
    id: 'shipping',
    title: 'Step 3: Start Shipping and Saving',
    body: 'Book your first delivery and enjoy member pricing instantly.',
  },
];

/** Member reviews — temporary mock until education API exists. */
export const ACCOUNT_REVIEWS: AccountReview[] = [
  {
    id: 'review-1',
    quote:
      'The parcel arrived [in] record time and was sitting at my back door when I got home. I also used the net to track the whereabouts of the parcel and it was very helpful! Not only was it fast, efficient and arrived undamaged, it was also the cheapest by far!',
  },
  {
    id: 'review-2',
    quote:
      'I just wanted to thank you for your assistance with moving an item for me from Melbourne to Brisbane. The whole process was fantastic, easy and at the right price. Your website and booking form were very easy to use, and your sales staff were superb with help online and on the phone with my questions. My item arrived quickly and efficiently.',
  },
  {
    id: 'review-3',
    quote:
      'I am a new customer who used your service for the first time last week. You safely delivered a box (full of glass) all the way from Melbourne to Perth in just 3 days! I am amazed by your efficiency, your pricing and how easy it was to organise via your website. I will definitely be using your services for all my freight needs in the future.',
  },
];

/** Shipping account FAQs — temporary mock until education API exists. */
export const ACCOUNT_FAQS: AccountFaq[] = [
  {
    id: 'free-account',
    question: 'Is it free to open a shipping account with Transdirect?',
    answer: 'Yes. There are no setup or subscription fees. Your account is 100% free.',
  },
  {
    id: 'who-can-open',
    question: 'Who can open a Transdirect account?',
    answer:
      'Anyone, from individuals to large organisations, can open a courier account and start saving.',
  },
  {
    id: 'business-and-personal',
    question: 'Can I use my account for both business and personal deliveries?',
    answer:
      'Absolutely. Your account gives you competitive rates for personal and business shipments alike.',
  },
  {
    id: 'minimum-shipments',
    question: 'Is there a minimum number of shipments required per week?',
    answer:
      'No minimums apply. However, sending more regularly means you can qualify for volume-based discounts.',
  },
  {
    id: 'stop-using',
    question: 'What happens if I stop using my account?',
    answer:
      "Your account stays active. Plus, any volume-based discounts you've earned will stay in place – even if you take a break.",
  },
];

/** Weekly spend dropdown — temporary mock until account API exists. */
export const WEEKLY_SPEND_OPTIONS: AccountSelectOption[] = [
  { id: 'under-100', label: 'Under $100' },
  { id: '100-500', label: '$100 – $500' },
  { id: '500-1000', label: '$500 – $1,000' },
  { id: 'over-1000', label: '$1,000+' },
];

/** Discount account types — temporary mock until account API exists. */
export const DISCOUNT_ACCOUNT_TYPES: AccountSelectOption[] = [
  { id: 'business', label: 'Business' },
  { id: 'individual', label: 'Individual / Family' },
  { id: 'ecommerce', label: 'Ecommerce' },
];
