import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

type ServiceItem = {
  title: string;
  description: React.ReactNode;
  to?: string;
};

const serviceItems: ServiceItem[] = [
  {
    title: 'Nationwide Road Express',
    description:
      'Transdirect’s network Carriers are the leading providers of Express Road Freight Services. With the Domestic ability to access All Capitals, Major Regionals, and Remote locations, Nationwide.',
  },
  {
    title: 'Nationwide Road Economy',
    description:
      'Take advantage of Transdirect’s network Carriers cost effective Nationwide Road Economy B2B, B2C and C2C Freight Services. These offer the delivery reach of our Nationwide Road Express Services, at a reduced cost.',
  },
  {
    title: 'Australia wide Same Day and Overnight Airfreight Services',
    description:
      'These are Transdirect’s network Carriers Priority suite of time specific B2B, B2C and C2C, Same day, Overnight services. These offer the Domestic ability to access All Capitals, Major Regionals, and Remote locations, Nationwide.',
  },
  {
    title: 'Same day local 1,2 and 4 hour delivery services within the same capital city',
    description:
      'Transdirect offers a Direct drive within the hour, a 1-2 hour, and a 3-4 hour delivery, after the advised collection time. This service is available within Metropolitan Melbourne, Sydney, Brisbane, Perth and Adelaide.',
  },
  {
    title: 'Interstate Couriers',
    to: PATHS.servicesExpertInterstateCouriers,
    description:
      'For a long distance delivery that traverses state lines, you want to be confident that your package will arrive in a safe and timely manner.',
  },
  {
    title: 'Same Day Delivery',
    to: `${PATHS.services}/same-day-courier`,
    description:
      'In a hurry? Our same day delivery services are available to major destinations Australia wide.',
  },
  {
    title: 'Next Day/Overnight Delivery',
    to: `${PATHS.services}/standard-shipping`,
    description:
      'Our reliable courier services will ensure your package is safely delivered to its intended recipient overnight by the next day.',
  },
  {
    title: 'Package Delivery',
    description:
      'Our standard package deliveries have all the same features of our express deliveries, and are ideal for people without a pressing time limit!',
  },
  {
    title: 'Specialty Delivery Services',
    description: (
      <>
        We handle a wide range of specialty deliveries across Australia, including{' '}
        <span className="underline underline-offset-2">medical equipment and medicine</span>,
        musical instruments, luggage and excess baggage, furniture, bikes, vehicle parts,
        important documents, sports gear, office equipment, eCommerce orders, enterprise and B2B
        consignments, small business goods, food and beverage products, event materials, flowers,
        as well as tools and machinery.
      </>
    ),
  },
];

const ServiceTitle: React.FC<Pick<ServiceItem, 'title' | 'to'>> = ({ title, to }) => {
  if (!to) return <strong>{title}:</strong>;

  return (
    <Link to={to} className="underline underline-offset-2 hover:text-brand">
      {title}:
    </Link>
  );
};

const OurServices: React.FC = () => {
  return (
    <article className="mx-auto w-full max-w-container px-6 pb-24 pt-3 text-navy sm:pt-5">
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
        <Link to={PATHS.home} className="transition-colors hover:text-brand">
          Home
        </Link>{' '}
        / <span aria-current="page">Our services</span>
      </nav>

      <div className="mx-auto mt-7 max-w-[760px] sm:mt-5">
        <h1 className="text-center text-2xl font-bold leading-tight text-navy sm:text-[26px]">
          Courier, Freight &amp; Shipping Services
        </h1>

        <div className="mt-7 text-[13px] leading-[1.55] sm:mt-8">
          <p>
            Transdirect has become known as one of the leading{' '}
            <span className="underline underline-offset-2">couriers in Australia</span> due to our
            provision of a comprehensive range of services. We understand that everyone has
            different needs when it comes to ensuring their packages are safely delivered, and as
            such offer a number of options to match.
          </p>

          <p className="mt-5 font-bold">Our services include:</p>

          <ul className="list-disc space-y-0.5 pl-5">
            {serviceItems.map((service) => (
              <li key={service.title}>
                <ServiceTitle title={service.title} to={service.to} />{' '}
                {service.description}
              </li>
            ))}
          </ul>

          <p className="mt-6">
            Contact Transdirect today to learn more about our services and how we are able to
            assist you.
          </p>
        </div>
      </div>
    </article>
  );
};

export default OurServices;
