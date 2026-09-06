export type BlogTopic = {
  id: string;
  label: string;
};

export type BlogContentBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; number: number; content: string }
  | { type: 'tip'; content: string };

export type BlogPost = {
  id: string;
  categoryId: string;
  categoryLabel: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  readTime: string;
  content: BlogContentBlock[];
  closingTitle: string;
  closingBody: string;
};

/** Blog topic filters — temporary mock until blog API exists. */
export const BLOG_TOPICS: BlogTopic[] = [
  { id: 'all', label: 'All Posts' },
  { id: 'ecommerce-tips', label: 'Ecommerce Tips' },
  { id: 'shipping-rates', label: 'Shipping Rates' },
  { id: 'express-delivery', label: 'Express Delivery' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'parcelio-news', label: 'Parcelio News' },
];

/** Blog posts — temporary mock until blog API exists. */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'peak-season-shipping',
    categoryId: 'ecommerce-tips',
    categoryLabel: 'Shipping Tips',
    date: '24 July 2026',
    title: 'Peak Season Shipping: Five Ways to Stay Ahead of the Rush',
    excerpt:
      "Australian shoppers start hunting for deals earlier every year, and couriers fill up fast. Here's how to lock in capacity, set honest delivery dates and keep your customers calm through the busiest weeks of the year.",
    slug: 'peak-season-shipping',
    readTime: '6 min read',
    content: [
      {
        type: 'paragraph',
        content:
          'Peak season is back, and the couriers are already filling up. If your shipping plan for the next three months still lives in your head, now is the time to write it down.',
      },
      {
        type: 'paragraph',
        content:
          'Australian shoppers start hunting for deals earlier every year. More than a third say they begin before October, and a good share of sellers now ramp up promotions before November. That pulls the whole calendar forward, including the moment your courier capacity runs out.',
      },
      {
        type: 'heading',
        number: 1,
        content: 'Book Capacity Before You Need It',
      },
      {
        type: 'paragraph',
        content:
          'Couriers allocate pickup slots on a first-come basis, and the good windows disappear fast once volume climbs. Talk to your account contact early, give them an honest forecast, and lock in a regular collection rather than booking ad hoc each morning.',
      },
      {
        type: 'heading',
        number: 2,
        content: 'Publish Honest Cut-Off Dates',
      },
      {
        type: 'paragraph',
        content:
          'Nothing damages trust faster than a parcel that misses a promised date. Work backwards from each courier\'s last dispatch day, add a buffer for your own pick and pack, then put those dates somewhere shoppers cannot miss: product pages, cart, checkout and confirmation emails.',
      },
      {
        type: 'heading',
        number: 3,
        content: 'Offer a Fast Option, and Charge for It',
      },
      {
        type: 'paragraph',
        content:
          'Plenty of shoppers will happily pay a few dollars for speed when a deadline is tight. Surface Express alongside Standard at checkout instead of burying it, and let the customer decide. You protect your margin and they get certainty.',
      },
      {
        type: 'tip',
        content:
          'Pro tip: Add a live countdown to your cut-off date on product pages. It converts hesitant browsers and quietly reduces "where is my order?" enquiries later.',
      },
      {
        type: 'heading',
        number: 4,
        content: 'Pack for the Worst Day of the Year',
      },
      {
        type: 'paragraph',
        content:
          'Peak season networks are fuller, handled more often and sorted faster. Packaging that survives a quiet Tuesday in March will not always survive December. Size the box to the goods, use proper void fill, and reinforce anything fragile before it leaves your bench.',
      },
      {
        type: 'heading',
        number: 5,
        content: 'Get Ahead of the Questions',
      },
      {
        type: 'paragraph',
        content:
          'Most peak-season support load is people asking where their parcel is. Send tracking automatically the moment a label is created, then send a second update on the day of delivery. Every proactive message is an enquiry you never have to answer.',
      },
    ],
    closingTitle: 'Ready for Your Busiest Quarter Yet?',
    closingBody:
      'Peak season rewards the sellers who plan early. Connect your store to Parcelio, lock in your rates, and let the bookings, labels and tracking take care of themselves while you focus on selling.',
  },
  {
    id: 'express-or-standard',
    categoryId: 'express-delivery',
    categoryLabel: 'Express Delivery',
    date: '09 July 2026',
    title: 'Express or Standard? How to Pick the Right Service Every Time',
    excerpt:
      'Speed sells, but paying for overnight on every order will quietly eat your margin. We break down when Express genuinely wins repeat customers, and when Standard does the job just as well.',
    slug: 'express-or-standard',
    readTime: '5 min read',
    content: [
      {
        type: 'paragraph',
        content:
          'Speed sells, but paying for overnight on every order will quietly eat your margin. The right mix of Express and Standard keeps customers happy without burning profit on every dispatch.',
      },
      {
        type: 'heading',
        number: 1,
        content: 'When Express Wins',
      },
      {
        type: 'paragraph',
        content:
          'Use Express for high-value carts, time-sensitive gifts, and shoppers who already expect next-day delivery. Those orders convert better when speed is visible at checkout.',
      },
      {
        type: 'heading',
        number: 2,
        content: 'When Standard Is Enough',
      },
      {
        type: 'paragraph',
        content:
          'For routine replenishment and non-urgent parcels, Standard usually delivers the same customer satisfaction at a lower cost. Set expectations clearly and most buyers are fine waiting a few extra days.',
      },
    ],
    closingTitle: 'Choose Speed Where It Matters',
    closingBody:
      'Offer both services, let the customer decide, and protect your margin on the rest of the catalogue.',
  },
  {
    id: 'interstate-parcel-cost',
    categoryId: 'shipping-rates',
    categoryLabel: 'Shipping Rates',
    date: '18 June 2026',
    title: 'What Does It Really Cost to Send a Parcel Interstate?',
    excerpt:
      'Fuel levies, cubic weight, residential surcharges. We pull apart a typical Sydney-to-Perth quote line by line so you can see exactly where your money goes, and where you can claw some back.',
    slug: 'interstate-parcel-cost',
    readTime: '7 min read',
    content: [
      {
        type: 'paragraph',
        content:
          'A Sydney-to-Perth quote is rarely just one number. Fuel levies, cubic weight and residential surcharges all stack before the label is printed.',
      },
      {
        type: 'heading',
        number: 1,
        content: 'Read Every Line Item',
      },
      {
        type: 'paragraph',
        content:
          'Compare base freight, fuel, and accessorials side by side. That is usually where the gap between carriers appears, not in the headline rate alone.',
      },
      {
        type: 'heading',
        number: 2,
        content: 'Watch Cubic Weight',
      },
      {
        type: 'paragraph',
        content:
          'Light but bulky cartons get billed on volume. Right-sizing packaging is one of the fastest ways to bring interstate costs back down.',
      },
    ],
    closingTitle: 'Know Your True Cost to Serve',
    closingBody:
      'Once you can see every surcharge, you can choose better packaging, better services, and better rates for the routes you ship most.',
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((post) => post.slug === slug);
