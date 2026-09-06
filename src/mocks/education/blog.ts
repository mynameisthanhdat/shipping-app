export type BlogTopic = {
  id: string;
  label: string;
};

export type BlogPost = {
  id: string;
  categoryId: string;
  categoryLabel: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
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
  },
];
