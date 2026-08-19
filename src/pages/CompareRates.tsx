import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Faq from '../components/CompareRates/Faq';
import HowItWorks from '../components/CompareRates/HowItWorks';
import LocationSelector from '../components/CompareRates/LocationSelector';
import MembershipCta from '../components/CompareRates/MembershipCta';
import RateTableCard from '../components/CompareRates/RateTableCard';
import ShippingTypeSelector from '../components/CompareRates/ShippingTypeSelector';
import {
  CityId,
  DEFAULT_ORIGIN,
  DEFAULT_SHIPPING_TYPE,
  ShippingTypeId,
  getRateCards,
} from '../mocks/compareRates';
import { PATHS } from '../routes/paths';

const CompareRates: React.FC = () => {
  const [shippingType, setShippingType] = useState<ShippingTypeId>(DEFAULT_SHIPPING_TYPE);
  const [origin, setOrigin] = useState<CityId>(DEFAULT_ORIGIN);

  const cards = useMemo(() => getRateCards(shippingType, origin), [shippingType, origin]);

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto w-full max-w-container px-6 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to={PATHS.home} className="transition-colors hover:text-navy">
            Home
          </Link>
          <span> / Compare Rates</span>
        </nav>

        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold text-navy">
            Domestic Shipping Rates &amp; Calculator
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted">
            Compare domestic shipping rates across Australia before you book. Select your
            freight profile, dispatch destination and weekly spend to view indicative pricing.
          </p>
        </div>

        <div className="mt-8 space-y-8 rounded-xl border border-black/10 px-7 py-7">
          <ShippingTypeSelector value={shippingType} onChange={setShippingType} />
          <LocationSelector value={origin} onChange={setOrigin} />

          <p className="text-center text-sm font-bold text-navy">
            Spending more than $1,000/week on freight? Contact us directly for the best rates.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-navy">
            Examples of our Domestic Delivery rates
          </h2>
          <p className="mt-2 text-sm text-muted">
            Explore your shipping rates across Australia. All prices include GST and fuel levy.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <RateTableCard key={card.destinationId} card={card} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted">
          All rates are estimates only and include GST and fuel levy · Member rates are
          indicative and based on your weekly spend · Frequent User requires a minimum of 3
          consignments per collection · Final pricing is confirmed at time of booking.
        </p>

        <div className="mt-16">
          <HowItWorks />
        </div>

        <div className="mt-16">
          <MembershipCta />
        </div>

        <div className="mt-16 pb-16">
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default CompareRates;
