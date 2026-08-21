import React from 'react';
import { Link } from 'react-router-dom';
import { FREIGHT_AUDIENCES, FREIGHT_SERVICES } from '../../mocks/home';
import { PATHS } from '../../routes/paths';

const CheckList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="mt-5 space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
        <span className="mt-0.5 font-bold text-brand" aria-hidden="true">
          ✓
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const AustraliaWideFreight: React.FC = () => (
  <section>
    <div className="text-center">
      <h2 className="text-2xl font-bold text-navy">
        Take advantage of cheap freight Australia wide
      </h2>
    </div>

    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <article className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-card">
        <div className="space-y-4 p-6 text-sm leading-relaxed text-muted md:p-7">
          <p>
            Our shipping and air freight services make it easier than ever for businesses,
            individuals and families to move goods to and from any area nationwide in the
            most affordable way.
          </p>
          <p>
            We employ a number of features to ensure we are the most convenient and
            economical courier company operating in Australia.
          </p>
          <p>
            We can offer you a door to door service, same or next day delivery, real time
            tracking tools, email and SMS notifications, and most importantly, peace of
            mind. Your goods are safe with us.
          </p>
          <p>
            Parcelio isn&apos;t just for interstate deliveries. Our customers actually
            find our local courier service rates are cheaper than those at the post
            office.
          </p>

          <h3 className="pt-2 text-base font-bold text-navy">What we do:</h3>
          <CheckList items={FREIGHT_SERVICES} />
        </div>
      </article>

      <article className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-card">
        <div className="space-y-4 p-6 text-sm leading-relaxed text-muted md:p-7">
          <p>
            Whether you require our services frequently or just once, we are the most
            affordable, experienced and reliable couriers in Australia.
          </p>

          <h3 className="text-base font-bold text-navy">We have options to suit:</h3>
          <CheckList items={FREIGHT_AUDIENCES} />

          <p>
            If you&apos;re still doubting how cheap our freight services are, we implore
            you to use our quick online quote tool. Just type in your pickup and delivery
            locations, package type(s) and dimensions and you&apos;re good to go. It&apos;s
            a no obligation feature of the website so you really have nothing to lose.
          </p>
          <p>
            We look forward to helping you with your courier, freight and shipping
            delivery needs, no matter how big or small they may be.
          </p>
          <p className="font-semibold text-navy">The Parcelio team</p>
        </div>
      </article>
    </div>
  </section>
);

export default AustraliaWideFreight;
