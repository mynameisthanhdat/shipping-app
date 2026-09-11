import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const startingFrom = '$5.10';

/** Marketing sections for the Perth city landing (no rate tables). */
const PerthLocationContent: React.FC = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-navy">
        Perth Courier Services and Freight Transport
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        With 100,000+ small business customers, Parcelio is the Perth courier company you
        can trust to deliver. Local, interstate and international — our Perth couriers are
        ready to handle all of your shipping, freight and delivery needs.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        From residential parcel pickup to commercial freight, no matter how simple or
        complex your delivery requirements may be, you can rely on Australia&apos;s best
        courier companies (and enjoy the cheapest courier rates).
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        We&apos;re proud to pass along exclusive savings of up to 30% with Perth courier
        companies including Couriers Please, TNT, Toll Priority, Direct Couriers, Allied
        Express, and more. Plus, our Parcelio members can save even more — you can{' '}
        <Link
          to={PATHS.openAccount}
          className="underline underline-offset-2 transition-colors hover:text-brand"
        >
          sign up for a free account here
        </Link>
        .
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-navy">
        Save 30% on Perth&apos;s Best Courier &amp; Freight Services
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        Our expertise in the industry, commitment to providing a wide range of courier and
        shipping services, plus our localised knowledge for Western Australia all go into
        making Parcelio the best choice for courier services in Perth.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        Trust Parcelio with your shipping needs and you can:
      </p>

      <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-relaxed text-navy">
        <li>Track the progress of your delivery in 24/7 real time</li>
        <li>Arrange for same day delivery or next day delivery couriers</li>
        <li>Enjoy the exceptional value of our standard package delivery services</li>
        <li>
          Organise to have a package delivered outside of Western Australia through our
          interstate courier services
        </li>
        <li>
          Receive SMS notifications and email alerts so you can track your parcels or
          freight
        </li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-navy">
        Cheap Couriers, Parcel Delivery and Freight Transport from Perth
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        Our team at Parcelio are not only passionate about providing exceptional levels of
        service, but also the best budget-friendly prices. In fact, quotes for our local
        Perth couriers start from only {startingFrom} — incredible value, cheaper than
        parcel post!
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        So whether you need to ship large pallets or small parcels, in a quick, safe and
        economical way, you&apos;ve come to the right place. Let Parcelio help you with our
        first-rate courier, freight and shipping delivery solutions. Get a quick instant
        quote, then book the best price online today. Discover how easy and affordable
        we&apos;ve made it for you to send parcels and packages between Perth and other
        Australian locations, or to international destinations.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        Don&apos;t forget: Parcelio members save the most, so if you ship often but
        haven&apos;t signed up yet,{' '}
        <Link
          to={PATHS.openAccount}
          className="underline underline-offset-2 transition-colors hover:text-brand"
        >
          become a Parcelio Member now
        </Link>
        !
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        <Link
          to={PATHS.quote}
          className="underline underline-offset-2 transition-colors hover:text-brand"
        >
          Get an instant quote
        </Link>
        {' or '}
        <Link
          to={PATHS.compareRates}
          className="underline underline-offset-2 transition-colors hover:text-brand"
        >
          compare rates
        </Link>
        {` — local courier prices start from ${startingFrom}.`}
      </p>
    </section>
  </div>
);

export default PerthLocationContent;
