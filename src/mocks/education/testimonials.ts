export type TestimonialItem = {
  id: string;
  rating: number;
  content: string;
  authorName: string;
  authorRole: string;
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sarah-mitchell',
    rating: 5,
    content:
      "Parcelio cut our shipping costs by 30% and the booking process takes less than five minutes. Couldn't be happier.",
    authorName: 'Sarah Mitchell',
    authorRole: 'Online Retailer',
  },
  {
    id: 'james-carter',
    rating: 5,
    content:
      'Reliable pickups every time and the tracking updates keep our customers in the loop.',
    authorName: 'James Carter',
    authorRole: 'Warehouse Manager, BuildRight Supplies',
  },
  {
    id: 'priya-nair',
    rating: 5,
    content:
      'Switching to Parcelio was the best decision for our small business. Support team is fantastic.',
    authorName: 'Priya Nair',
    authorRole: 'Founder, Nair Home Goods',
  },
  {
    id: 'tom-anderson',
    rating: 4,
    content:
      'Integration with eBay saved me hours every week. Highly recommend for anyone selling online.',
    authorName: 'Tom Anderson',
    authorRole: 'eBay Seller',
  },
  {
    id: 'melissa-chow',
    rating: 5,
    content:
      'Transit warranty gave us peace of mind on high-value shipments. Claims are processed quickly.',
    authorName: 'Melissa Chow',
    authorRole: 'Operations Lead, Chow Logistics',
  },
  {
    id: 'david-obrien',
    rating: 5,
    content:
      'Needed to send a parcel interstate last minute and Parcelio had the best rate by far.',
    authorName: "David O'Brien",
    authorRole: 'Individual Customer',
  },
  {
    id: 'linda-zhao',
    rating: 4,
    content:
      'The API made it simple to automate our shipping labels straight from our store.',
    authorName: 'Linda Zhao',
    authorRole: 'E-commerce Manager, Zhao Trading Co.',
  },
  {
    id: 'michael-brooks',
    rating: 5,
    content:
      'Customer service resolved a delivery issue within hours. Great communication throughout.',
    authorName: 'Michael Brooks',
    authorRole: 'Small Business Owner',
  },
  {
    id: 'emma-davis',
    rating: 5,
    content:
      'Consistent pricing and reliable freight partners across the whole country.',
    authorName: 'Emma Davis',
    authorRole: 'Procurement Officer, Davis & Co.',
  },
  {
    id: 'ryan-thompson',
    rating: 5,
    content:
      'Great platform to work with as a courier partner — clear instructions and fair rates.',
    authorName: 'Ryan Thompson',
    authorRole: 'Courier Network Partner',
  },
];
