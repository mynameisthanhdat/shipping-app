import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/CtaBanner';
import { CONTACT_US_CONTENT } from '../mocks/contactUs';
import { PATHS } from '../routes/paths';

const BreadcrumbLink: React.FC<React.PropsWithChildren<{ to: string }>> = ({
  to,
  children,
}) => (
  <Link to={to} className="transition-colors hover:text-navy">
    {children}
  </Link>
);

const fieldClassName =
  'w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-navy outline-none transition-colors focus:border-navy';

const ContactUs: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <article className="mx-auto w-full max-w-container px-6 pb-24 pt-5 text-navy sm:pt-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <BreadcrumbLink to={PATHS.home}>Home</BreadcrumbLink> /{' '}
        <span aria-current="page">{CONTACT_US_CONTENT.breadcrumb}</span>
      </nav>

      <header className="mt-7 text-center">
        <h1 className="text-2xl font-bold leading-tight sm:text-[26px]">
          {CONTACT_US_CONTENT.title}
        </h1>
        <p className="mt-3 text-sm text-slate-500">{CONTACT_US_CONTENT.subtitle}</p>
      </header>

      <section className="mt-10 grid gap-10 rounded-lg border border-slate-200 px-7 py-6 md:grid-cols-2 md:px-10">
        <div className="text-center text-[13px] leading-[1.45]">
          <h2 className="text-base font-bold">{CONTACT_US_CONTENT.about.heading}</h2>
          <p className="mx-auto mt-4 max-w-md">{CONTACT_US_CONTENT.about.description}</p>

          <h2 className="mt-5 text-base font-bold">
            {CONTACT_US_CONTENT.contactDetails.heading}
          </h2>
          <div className="mt-4 space-y-3">
            <p>Phone: {CONTACT_US_CONTENT.contactDetails.phone}</p>
            <p>
              Email:{' '}
              <a
                href={`mailto:${CONTACT_US_CONTENT.contactDetails.email}`}
                className="transition-colors hover:text-brand"
              >
                {CONTACT_US_CONTENT.contactDetails.email}
              </a>
            </p>
            <p>Address: {CONTACT_US_CONTENT.contactDetails.address}</p>
            <p>Hours: {CONTACT_US_CONTENT.contactDetails.hours}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="text-center text-xs">
          <h2 className="text-base font-bold">{CONTACT_US_CONTENT.form.heading}</h2>
          <div className="mt-2 space-y-3">
            <label className="block">
              <span>{CONTACT_US_CONTENT.form.fields.name}</span>
              <input name="name" type="text" required className={fieldClassName} />
            </label>
            <label className="block">
              <span>{CONTACT_US_CONTENT.form.fields.email}</span>
              <input name="email" type="email" required className={fieldClassName} />
            </label>
            <label className="block">
              <span>{CONTACT_US_CONTENT.form.fields.subject}</span>
              <input name="subject" type="text" required className={fieldClassName} />
            </label>
            <label className="block">
              <span>{CONTACT_US_CONTENT.form.fields.message}</span>
              <textarea name="message" rows={4} required className={`${fieldClassName} resize-y`} />
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 rounded-md bg-brand px-8 py-2.5 font-bold text-white transition-colors hover:bg-brand-hover"
          >
            {CONTACT_US_CONTENT.form.submitLabel}
          </button>

          {submitted && (
            <p role="status" className="mt-3 text-sm text-success">
              {CONTACT_US_CONTENT.form.successMessage}
            </p>
          )}
        </form>
      </section>

      <section className="mt-5 rounded-lg border border-slate-200 px-6 py-7 text-center">
        <h2 className="text-xl font-bold">{CONTACT_US_CONTENT.membership.heading}</h2>
        <p className="mt-3 text-[13px]">{CONTACT_US_CONTENT.membership.description}</p>
        <Link
          to={CONTACT_US_CONTENT.membership.to}
          className="mt-6 inline-flex rounded-md bg-brand px-6 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-hover"
        >
          {CONTACT_US_CONTENT.membership.buttonLabel}
        </Link>
      </section>

      <section className="mt-5 rounded-lg border border-slate-200 px-6 py-7 text-center">
        <h2 className="text-xl font-bold">{CONTACT_US_CONTENT.rates.heading}</h2>
        <p className="mt-3 text-[13px]">{CONTACT_US_CONTENT.rates.description}</p>
      </section>

      <div className="mt-14">
        <CtaBanner />
      </div>
    </article>
  );
};

export default ContactUs;
