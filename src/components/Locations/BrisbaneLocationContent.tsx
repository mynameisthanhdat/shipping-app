import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const startingFrom = '$6.99';

/** Marketing sections for the Brisbane city landing (no rate tables). */
const BrisbaneLocationContent: React.FC = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-navy">
        Find out about our Brisbane courier service
      </h2>

      <p className="mt-4 text-sm font-bold leading-relaxed text-navy">
        Trust the premium freight services of Parcelio for your Brisbane shipping needs
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        When it comes to couriers in Brisbane and throughout Queensland, Parcelio leads
        the way in terms of reliability, time efficiency, affordability, and providing a
        range of services. Individuals and businesses are able to depend on the cheap
        courier options we provide, no matter what the specifics of their needs are.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        Our Brisbane Couriers Services include
      </p>

      <ul className="mt-1 list-disc space-y-2 pl-5 text-sm leading-relaxed text-navy">
        <li>
          <span className="font-bold">Last minute deliveries:</span> For those times when
          everything&apos;s a bit rushed, Parcelio offers same day, next day and overnight
          deliveries.
        </li>
        <li>
          <span className="font-bold">Standard package deliveries:</span> When
          everything&apos;s going to plan and your freight isn&apos;t in a rush to reach
          its destination, we offer a standard package at an unbelievably low cost. This
          service is not any less professional, safe or reliable than our others, it simply
          takes a bit longer to travel. This being said, it&apos;s still a timely package,
          but suits those with a less pressing time-frame.
        </li>
        <li>
          <span className="font-bold">Interstate Deliveries:</span> We can move your goods
          locally within the borders of Brisbane and Queensland or interstate. We aim to
          keep your consignment safe and secure while it&apos;s travelling for shipments
          made anywhere nationwide.
        </li>
        <li>
          <span className="font-bold">Door to door service:</span> At Parcelio we
          don&apos;t want you to lift a finger beyond booking our courier services. We pick
          up the freight from our senders and deliver it directly to the receiver&apos;s
          door.
        </li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-navy">Prices</h2>
      <p className="mt-4 text-sm leading-relaxed text-navy">
        With our local prices starting out as low as {startingFrom}, you can trust Parcelio
        to deliver a service that suits your budget perfectly and even leaves you with a
        bit of extra change. Use our quick and easy online quoting system to find out
        exactly how much (or should we say how little) it will cost you to move your
        freight to and from Brisbane. We hope we&apos;ve made everything clear but please
        don&apos;t hesitate to contact us with anything we haven&apos;t covered. A member
        of our friendly team is always more than happy to help.
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

export default BrisbaneLocationContent;
