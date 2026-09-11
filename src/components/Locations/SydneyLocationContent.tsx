import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const startingFrom = '$5.10';

const SydneyLocationContent: React.FC = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-navy">The Best Couriers in Sydney and NSW</h2>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        If you&apos;re after cheap couriers in Sydney and New South Wales who can offer
        you a safe door to door service between local and interstate locations, then look
        no further. Parcelio is proud to provide a comprehensive range of interstate
        courier services to suit a broad range of needs. It is our aim to ensure our
        varied clientele in and around Sydney receives timely, reliable and cost
        efficient freight shipping, in a way that best serves their intended purpose.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        We pride ourselves on being a dependable freight partner in Sydney, consistently
        delivering quality service to our customers all over Australia. Specialising in
        both local and interstate delivery, with options to suit even the most modest
        budget, Parcelio connects you with trusted carriers that have stood the test of
        time.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">Our couriers can:</p>

      <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-relaxed text-navy">
        <li>Organise speedy same day delivery to wherever your package is going</li>
        <li>
          Arrange for overnight delivery so your recipient will receive their package the
          next day
        </li>
        <li>
          Utilise our standard package delivery if you have a more relaxed time frame to
          work with
        </li>
        <li>Organise delivery across states for those outside of New South Wales</li>
        <li>Offer door to door service for both residential and commercial locations</li>
        <li>Provide you with progress reports so you can track your delivery</li>
        <li>Send SMS and email alerts</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-navy">Prices</h2>
      <p className="mt-4 text-sm leading-relaxed text-navy">
        At Parcelio, we not only provide a premium level of service, we also strive to keep
        our costs as low as possible. With local courier prices starting from {startingFrom},
        you can feel confident you&apos;ll stay within your budget. Get an instant online
        quote to find out just how affordable our services can be. We look forward to
        working with you.
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

export default SydneyLocationContent;
