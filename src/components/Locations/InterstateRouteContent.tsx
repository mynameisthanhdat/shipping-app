import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../CtaBanner';
import RateTableCard from '../CompareRates/RateTableCard';
import FaqAccordion from '../Education/FaqAccordion';
import WeeklySpendSlider, {
  DEFAULT_WEEKLY_SPEND,
  getWeeklySpendMultiplier,
} from './WeeklySpendSlider';
import { InterstateRouteData } from '../../types/locations';
import { RateCard } from '../../mocks/compareRates';
import { PATHS } from '../../routes/paths';

const HEADING = 'text-lg font-bold text-navy';
const LINK = 'underline underline-offset-2 transition-colors hover:text-brand';

type InterstateRouteContentProps = {
  data: InterstateRouteData;
};

const scaleRateCards = (cards: RateCard[], multiplier: number): RateCard[] =>
  cards.map((card) => ({
    ...card,
    rows: card.rows.map((row) => ({
      ...row,
      member: Number((row.member * multiplier).toFixed(2)),
      frequentUser: Number((row.frequentUser * multiplier).toFixed(2)),
    })),
  }));

const InterstateRouteContent: React.FC<InterstateRouteContentProps> = ({ data }) => {
  const { from, to, intro, rateCards, benefits, keyInfo, faqs } = data;
  const corridor = `${from} to ${to}`;
  const [weeklySpend, setWeeklySpend] = useState(DEFAULT_WEEKLY_SPEND);

  const pricedCards = useMemo(
    () => scaleRateCards(rateCards, getWeeklySpendMultiplier(weeklySpend)),
    [rateCards, weeklySpend]
  );

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl font-bold text-navy sm:text-3xl">
          {corridor} Courier Services – Fast, Reliable &amp; Affordable
        </h1>
        {intro.map((paragraph) => (
          <p key={paragraph} className={`text-sm leading-relaxed text-navy mt-4`}>
            {paragraph}
          </p>
        ))}
        <p className={`text-sm leading-relaxed text-navy mt-3`}>
          <Link to={PATHS.openAccount} className={LINK}>
            Sign up as a Parcelio member
          </Link>{' '}
          to unlock additional savings on already competitive interstate rates.
        </p>
        <p className={`text-sm leading-relaxed text-navy mt-3`}>
          <Link to={PATHS.quote} className={LINK}>
            Get an instant quote
          </Link>{' '}
          for your {corridor} delivery, or{' '}
          <Link to={PATHS.compareRates} className={LINK}>
            compare domestic rates
          </Link>{' '}
          before you book.
        </p>
      </section>

      <section>
        <h2 className={HEADING}>{`Rates from ${corridor}`}</h2>
        <p className={`text-sm leading-relaxed text-navy mt-3`}>
          Compare parcel, crate and pallet pricing for this route. All prices include GST and
          fuel levy. Adjust your weekly spend to see indicative member pricing.
        </p>

        <div className="mt-6">
          <WeeklySpendSlider value={weeklySpend} onChange={setWeeklySpend} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {pricedCards.map((card) => (
            <RateTableCard key={card.title} card={card} />
          ))}
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted">
          All rates are estimates only and include GST and fuel levy · Based on commercial
          pick-up and drop-off · Member rates are indicative and based on your weekly spend ·{' '}
          <Link to={PATHS.compareRates} className={LINK}>
            Open the full rate calculator
          </Link>{' '}
          for more lanes and shipping profiles.
        </p>

        <p className={`text-sm leading-relaxed text-navy mt-4`}>
          <Link to={PATHS.openAccount} className={LINK}>
            Open a free member account
          </Link>{' '}
          to access volume-discounted pricing and start shipping today.
        </p>
      </section>

      <section>
        <h2 className={HEADING}>{`Why Choose Parcelio for ${corridor} Delivery?`}</h2>
        <div className="mt-4 space-y-4">
          {benefits.map((benefit) => (
            <div key={benefit.id}>
              <h3 className={`text-sm leading-relaxed text-navy font-bold`}>{benefit.title}</h3>
              <p className={`text-sm leading-relaxed text-navy`}>{benefit.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={HEADING}>{`Shipping from ${corridor}: Key Information`}</h2>
        <div className="mt-4 space-y-4">
          {keyInfo.map((item) => (
            <div key={item.id}>
              <h3 className={`text-sm leading-relaxed text-navy font-bold`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed text-navy`}>
                {item.body}
                {item.showPackagingLink ? (
                  <>
                    {' '}
                    Please read our{' '}
                    <Link to={PATHS.educationPackaging} className={LINK}>
                      packaging requirements
                    </Link>{' '}
                    for full details.
                  </>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={HEADING}>{`${corridor} Delivery FAQs`}</h2>
        <div className="mt-4">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner title={`Get a quote for your ${corridor} delivery today.`} />
    </div>
  );
};

export default InterstateRouteContent;
