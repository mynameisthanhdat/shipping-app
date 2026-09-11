import { PATHS } from '../routes/paths';

export type ContactUsContent = {
  breadcrumb: string;
  title: string;
  subtitle: string;
  about: {
    heading: string;
    description: string;
  };
  contactDetails: {
    heading: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
  form: {
    heading: string;
    fields: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    submitLabel: string;
    successMessage: string;
  };
  membership: {
    heading: string;
    description: string;
    buttonLabel: string;
    to: string;
  };
  rates: {
    heading: string;
    description: string;
  };
};

export const CONTACT_US_CONTENT: ContactUsContent = {
  breadcrumb: 'Contact Us',
  title: 'Contact Us',
  subtitle:
    'Have a question about shipping rates, tracking, or your account? Our team is here to help.',
  about: {
    heading: 'About Parcelio',
    description:
      'Parcelio is Australia’s fastest-growing courier comparison platform. We help businesses and individuals find the best shipping rates across every major carrier, backed by a team that’s always just a message away.',
  },
  contactDetails: {
    heading: 'Contact Details',
    phone: '1300 123 456',
    email: 'support@parcelio.com.au',
    address: 'Level 4, 123 Collins Street, Melbourne VIC 3000',
    hours: 'Mon–Fri, 9am–6pm AEST',
  },
  form: {
    heading: 'Send Us a Message',
    fields: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
    },
    submitLabel: 'Send Message',
    successMessage: 'Thanks for your message. Our team will get back to you shortly.',
  },
  membership: {
    heading: 'Become a Member',
    description:
      'Join Parcelio Membership and unlock exclusive discounted rates, priority support, and faster processing on every shipment.',
    buttonLabel: 'Become a Member',
    to: PATHS.openAccount,
  },
  rates: {
    heading: 'Get the Best Rates & Vouchers',
    description:
      'Spending more than $1,000/week on freight? Contact our team directly for exclusive vouchers and negotiated rates tailored to your business.',
  },
};
