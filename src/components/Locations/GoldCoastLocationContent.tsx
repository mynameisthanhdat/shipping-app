import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

/** Marketing sections for the Gold Coast city landing (no rate tables). */
const GoldCoastLocationContent: React.FC = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-navy">
        We have Couriers on the Gold Coast, QLD
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        Looking for a Gold Coast Courier to move a package locally or interstate?
        We&apos;re the most reliable and cost effective freight and shipping company in
        Australia and we&apos;ve perfected the art of delivering packages of all sizes in
        the quickest and safest ways possible. Parcelio provides a premium level of courier
        service to residents and business owners throughout Queensland. We are dedicated to
        making sure our valued customers receive reliable, cost-effective and timely
        services.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        So whether you&apos;re delivering to clients or just remembered it&apos;s your
        mum&apos;s birthday and need to send her gift off pronto, Parcelio is the company
        that will make it seem all too easy. Our expert couriers are available to cater to
        your delivery needs 24 hours a day. That means that if it&apos;s past five p.m. and
        you need the item to arrive at its destination by the next morning, we can make it
        happen. We offer same day, next day and overnight delivery services — perfect for
        those times when you&apos;re time-pressured. Our Gold Coast Courier services:
      </p>

      <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-relaxed text-navy">
        <li>Local deliveries</li>
        <li>Interstate deliveries to various states and territories outside of Queensland</li>
        <li>Door to door pickup and drop off services</li>
        <li>Progress reports on your items in transit</li>
        <li>Tracking tools</li>
        <li>Commercial and residential addresses</li>
        <li>Single and multiple packages</li>
        <li>Large and small consignments</li>
        <li>Same Day Delivery to keep within your limited timeframe</li>
        <li>Overnight Delivery for more relaxed turnaround times</li>
        <li>
          Standard Package Delivery which comes with the same reliability and competitive
          prices you&apos;d expect from our other services
        </li>
      </ul>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        Parcelio exists to meet your delivery needs. We strive to provide every one of our
        customers with exceptional service that ensures they use us again and to maintain
        our excellent reputation nationwide. We have an online quote tool which shows you
        what to expect to pay before you&apos;ve committed and we give you access to a clear
        system which allows you to track the entire journey of your package(s).
        Additionally, we offer the most competitive rates in freight delivery from anywhere
        in Australia.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        Contact Parcelio today, and find out how our experienced couriers can assist you on
        the Gold Coast or in any of our many locations nationwide.
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
        {' — or '}
        <Link
          to={PATHS.trackShipment}
          className="underline underline-offset-2 transition-colors hover:text-brand"
        >
          track a shipment
        </Link>
        .
      </p>
    </section>
  </div>
);

export default GoldCoastLocationContent;
