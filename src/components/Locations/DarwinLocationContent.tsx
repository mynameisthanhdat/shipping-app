import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

/** Marketing sections for the Darwin city landing (no rate tables). */
const DarwinLocationContent: React.FC = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold text-navy">
        Trust the freight specialists to get your package delivered safely across Darwin
        and the surrounds
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        Parcelio&apos;s vast experience working in Darwin and throughout the Northern
        Territory allows us to provide the efficient, timely, and reliable courier services
        you require. We have worked with numerous individuals and businesses over the
        years, ensuring our freight delivery services meet their specific requirements.
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy">
        Our team of couriers can provide a number of services, including:
      </p>

      <ul className="mt-1 list-disc space-y-2 pl-5 text-sm leading-relaxed text-navy">
        <li>
          <span className="font-bold">Interstate Courier Services</span> – for packages
          that need delivering to other states and territories outside of Northern
          Territory
        </li>
        <li>
          <span className="font-bold">Same Day &amp; Next Day/Overnight Delivery</span> –
          for those with a specific timeframe to adhere to
        </li>
        <li>
          <span className="font-bold">Standard Package Delivery</span> – for when you
          don&apos;t have a time schedule, but still require reliable and affordable
          courier services across Darwin
        </li>
      </ul>

      <p className="mt-4 text-sm leading-relaxed text-navy">
        To learn more about how our Darwin couriers can help you, get in contact with the
        team at Parcelio today. You can also check out our various other Australian
        locations.
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
        .
      </p>
    </section>
  </div>
);

export default DarwinLocationContent;
