import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

/** Marketing sections for the Melbourne city landing (aligned with other city pages). */
const MelbourneLocationContent: React.FC = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-xl font-bold text-navy">
        Reliable Couriers and Freight Delivery Across Melbourne
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-navy">
        Sending something across the city or across the country? Parcelio makes Melbourne
        shipping simple. Compare courier options side by side and book with confidence, all
        in one place. We connect individuals and businesses with a network of dependable
        couriers, backed by flexible service levels and rates that don&apos;t punish you for
        shopping around — because you won&apos;t need to.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-navy">
        <Link
          to={PATHS.quote}
          className="underline underline-offset-2 transition-colors hover:text-brand"
        >
          Get an instant quote
        </Link>
        {' and find the right courier for your Melbourne delivery.'}
      </p>
    </section>

    <section>
      <h2 className="text-xl font-bold text-navy">Why Ship with Parcelio in Melbourne?</h2>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-sm font-bold leading-relaxed text-navy">
            Compare Melbourne Couriers in Seconds
          </h3>
          <p className="text-sm leading-relaxed text-navy">
            Parcelio pulls live pricing and service options from a network of national and
            regional couriers, so you can weigh up cost and speed in one screen instead of
            requesting quotes one by one.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold leading-relaxed text-navy">
            Real Savings, No Extra Legwork
          </h3>
          <p className="text-sm leading-relaxed text-navy">
            Enter your delivery details once and see every available option laid out
            together. No calling around, no waiting on quotes — just pick what fits your
            timing and your budget.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold leading-relaxed text-navy">
            Know Where Your Parcel Is, Always
          </h3>
          <p className="text-sm leading-relaxed text-navy">
            Once it&apos;s picked up, you&apos;ll get tracking updates the whole way through.
            Whether it&apos;s a business shipment on the clock or a personal parcel,
            you&apos;re never left wondering.{' '}
            <Link
              to={PATHS.trackShipment}
              className="underline underline-offset-2 transition-colors hover:text-brand"
            >
              Track a shipment
            </Link>
            .
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-xl font-bold text-navy">What our customers say</h2>

      <div className="mt-4 space-y-1">
        <p className="text-sm leading-relaxed text-navy">
          &quot;Booked a pickup on a Tuesday, had it delivered interstate by Friday morning,
          no surprises along the way. That&apos;s exactly what I needed.&quot;
        </p>
        <p className="text-sm leading-relaxed text-navy">
          &quot;I run a small business and time-sensitive deliveries used to be a headache.
          Parcelio&apos;s tracking actually kept me updated instead of leaving me
          guessing.&quot;
        </p>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        <Link
          to={PATHS.educationTestimonials}
          className="underline underline-offset-2 transition-colors hover:text-brand"
        >
          Read more customer reviews
        </Link>
      </p>
    </section>

    <section>
      <h2 className="text-xl font-bold text-navy">Booking Your Melbourne Courier</h2>

      <ol className="mt-4 list-none space-y-0.5 text-sm leading-relaxed text-navy">
        <li>
          Step 1 — Get your quote: Enter your parcel&apos;s size, weight and delivery
          details into our{' '}
          <Link
            to={PATHS.compareRates}
            className="underline underline-offset-2 transition-colors hover:text-brand"
          >
            online calculator
          </Link>
          .
        </li>
        <li>
          Step 2 — Book it: Choose the courier and service that suits you, fill out the
          booking form, and print your label.
        </li>
        <li>
          Step 3 — Track it: Follow your shipment on our{' '}
          <Link
            to={PATHS.trackShipment}
            className="underline underline-offset-2 transition-colors hover:text-brand"
          >
            tracking page
          </Link>{' '}
          right through to confirmed delivery.
        </li>
      </ol>
    </section>

    <section>
      <h2 className="text-xl font-bold text-navy">What Can You Send from Melbourne?</h2>
      <p className="mt-4 text-sm leading-relaxed text-navy">
        Our network handles a broad range of shipments, including:
      </p>

      <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-relaxed text-navy">
        <li>Business documents</li>
        <li>Consumer goods</li>
        <li>Electronics and components</li>
        <li>Clothing and accessories</li>
        <li>Product samples and more</li>
      </ul>

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
        .
      </p>
    </section>
  </div>
);

export default MelbourneLocationContent;
