import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const HEADING = 'text-[15px] font-bold text-navy';
const BODY = 'text-sm leading-relaxed text-navy';
const LINK = 'underline transition-colors hover:text-brand';

const SENDABLE_ITEMS = [
  'Business documents',
  'Consumer goods',
  'Electronics and components',
  'Clothing and accessories',
  'Product samples and more',
];

const TESTIMONIALS = [
  'Booked a pickup on a Tuesday, had it delivered interstate by Friday morning, no surprises along the way. That’s exactly what I needed.',
  'I run a small business and time-sensitive deliveries used to be a headache. Parcelio’s tracking actually kept me updated instead of leaving me guessing.',
];

export type QuoteLocationContentProps = {
  /** City the copy is written about. Drives every headline and body mention. */
  city?: string;
};

/**
 * Location marketing copy that sits under the package-details form. Rendered by
 * the step 1 screen only, so it never follows the user deeper into the wizard.
 */
const QuoteLocationContent: React.FC<QuoteLocationContentProps> = ({ city = 'Melbourne' }) => (
  <div className="space-y-8">
    <section>
      <h2 className={HEADING}>{`Reliable Couriers and Freight Delivery Across ${city}`}</h2>
      <p className={`${BODY} mt-3`}>
        {`Sending something across the city or across the country? Parcelio makes ${city} shipping simple. Compare courier options side by side and book with confidence, all in one place. We connect individuals and businesses with a network of dependable couriers, backed by flexible service levels and rates that don't punish you for shopping around — because you won't need to.`}
      </p>
      <p className={`${BODY} mt-3`}>
        <Link to={PATHS.quote} className={LINK}>
          Get an instant quote
        </Link>
        {` and find the right courier for your ${city} delivery.`}
      </p>
    </section>

    <section>
      <h2 className={HEADING}>{`Why Ship with Parcelio in ${city}?`}</h2>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className={BODY}>{`Compare ${city} Couriers in Seconds`}</h3>
          <p className={BODY}>
            Parcelio pulls live pricing and service options from a network of national and
            regional couriers, so you can weigh up cost and speed in one screen instead of
            requesting quotes one by one.
          </p>
        </div>

        <div>
          <h3 className={BODY}>Real Savings, No Extra Legwork</h3>
          <p className={BODY}>
            Enter your delivery details once and see every available option laid out together.
            No calling around, no waiting on quotes — just pick what fits your timing and your
            budget.
          </p>
        </div>

        <div>
          <h3 className={BODY}>Know Where Your Parcel Is, Always</h3>
          <p className={BODY}>
            {`Once it's picked up, you'll get tracking updates the whole way through. Whether it's a business shipment on the clock or a personal parcel, you're never left wondering. `}
            <Link to={PATHS.trackShipment} className={LINK}>
              Track a shipment
            </Link>
            .
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 className={HEADING}>{`Why Ship with Parcelio in ${city}?`}</h2>

      <div className="mt-3 space-y-1">
        {TESTIMONIALS.map((quote) => (
          <p key={quote} className={BODY}>
            {`"${quote}"`}
          </p>
        ))}
      </div>

      <p className={`${BODY} mt-3`}>
        <Link to={PATHS.educationTestimonials} className={LINK}>
          Read more customer reviews
        </Link>
      </p>
    </section>

    <section>
      <h2 className={HEADING}>{`Booking Your ${city} Courier`}</h2>

      <ol className="mt-3 list-none space-y-0.5">
        <li className={BODY}>
          {`Step 1 — Get your quote: Enter your parcel's size, weight and delivery details into our `}
          <Link to={PATHS.compareRates} className={LINK}>
            online calculator
          </Link>
          .
        </li>
        <li className={BODY}>
          Step 2 — Book it: Choose the courier and service that suits you, fill out the booking
          form, and print your label.
        </li>
        <li className={BODY}>
          {'Step 3 — Track it: Follow your shipment on our '}
          <Link to={PATHS.trackShipment} className={LINK}>
            tracking page
          </Link>
          {' right through to confirmed delivery.'}
        </li>
      </ol>
    </section>

    <section>
      <h2 className={HEADING}>{`What Can You Send from ${city}?`}</h2>
      <p className={`${BODY} mt-3`}>Our network handles a broad range of shipments, including:</p>

      <ul className="mt-1 list-disc space-y-0.5 pl-5">
        {SENDABLE_ITEMS.map((item) => (
          <li key={item} className={BODY}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default QuoteLocationContent;
