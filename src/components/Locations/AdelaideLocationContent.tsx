import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const startingFrom = '$6.99';

/** Marketing sections for the Adelaide city landing (no rate tables). */
const AdelaideLocationContent: React.FC = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-navy">Use our Adelaide couriers today</h2>

      <p className="mt-4 text-sm font-bold leading-relaxed text-navy">
        Organise your freight delivery across Adelaide and interstate with the courier
        experts at Parcelio
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        Looking for Adelaide couriers that are reliable, timely, and cost efficient?
        Parcelio is the company to call. We operate right across the nation, including
        throughout Adelaide and South Australia, and have a wealth of experience within the
        courier industry. Whether you are a commercial or residential customer, we can
        assist you with:
      </p>

      <ul className="mt-1 list-disc space-y-2 pl-5 text-sm leading-relaxed text-navy">
        <li>
          <span className="font-bold">Pickup and Drop off</span> – Your consignment will be
          in our capable hands from the moment we pick it up from your door, to the minute
          we drop it at the receiver&apos;s.
        </li>
        <li>
          <span className="font-bold">Local and Interstate Services</span> – We deliver to
          and from Adelaide and South Australia, as well as nationwide.
        </li>
        <li>
          <span className="font-bold">Same Day Delivery</span> – Those on a strict timeframe
          will appreciate our speedy same day delivery services. We can arrange to have
          your goods picked up and delivered in a matter of hours.
        </li>
        <li>
          <span className="font-bold">Next Day/Overnight Delivery</span> – We even have an
          overnight courier service which will ensure your package is delivered safely
          anywhere in Adelaide while you&apos;re sleeping.
        </li>
        <li>
          <span className="font-bold">Package Delivery</span> – If you&apos;re not in need
          of one of our express freight options, you&apos;ll be able to take advantage of
          our super low rates for normal deliveries. Our regular courier packages still
          travel safely and rapidly, they just get to enjoy a couple more days in transit
          compared to those previously mentioned same day and overnight consignments.
          That&apos;s why the charges you&apos;ll see when booking a regular package
          delivery are so minimal.
        </li>
      </ul>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        Talk to the team at Parcelio about our freight services today, or discover the
        various other locations throughout Australia we can service.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-navy">Adelaide Courier Prices</h2>
      <p className="mt-4 text-sm leading-relaxed text-navy">
        With prices starting as low as {startingFrom} for deliveries within Adelaide and
        South Australia, Parcelio makes it easy to stick to your budget while still
        benefiting from our quality service. Whether you want your goods to travel a large
        or small distance, there&apos;s no need to look anywhere else for your freight and
        shipping needs — Parcelio has you covered. Get a free online quote for our courier
        service and find out exactly how little your shipment will cost. We think
        you&apos;ll be pleasantly surprised.
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

export default AdelaideLocationContent;
