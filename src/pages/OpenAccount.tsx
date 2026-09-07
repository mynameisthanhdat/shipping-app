import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AccountSignupForm from '../components/Account/AccountSignupForm';
import CtaBanner from '../components/CtaBanner';
import { PATHS } from '../routes/paths';
import { AccountSignupDetails } from '../types/account';

/** Details handed over by another page, e.g. the Account Enquiries form. */
type OpenAccountState = { accountSignup?: AccountSignupDetails } | null;

const OpenAccount: React.FC = () => {
  const { state } = useLocation();
  const handedOver = (state as OpenAccountState)?.accountSignup;
  const [createdFor, setCreatedFor] = useState<string>();

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto w-full max-w-container px-6 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to={PATHS.home} className="transition-colors hover:text-navy">
            Home
          </Link>
          <span> / Sign Up</span>
        </nav>

        <div className="mt-10 text-center">
          <h1 className="text-3xl font-bold text-navy">Create Your Free Account</h1>
          <p className="mx-auto mt-3.5 max-w-xl text-muted">
            Join Parcelio in minutes and start saving on every shipment with member-only rates.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          {createdFor ? (
            <div className="rounded-2xl border border-black/10 bg-white p-8 text-center shadow-card">
              <h2 className="text-[15px] font-bold text-navy">Account details captured</h2>
              <p className="mt-2 text-sm text-navy">
                {`Thanks ${createdFor} — your details passed validation. The accounts API is not connected yet, so no account has been created.`}
              </p>
              <button
                type="button"
                onClick={() => setCreatedFor(undefined)}
                className="mt-6 rounded-lg border border-black/10 px-6 py-2.5 text-sm font-bold text-navy transition-colors hover:border-navy/30"
              >
                Back to the form
              </button>
            </div>
          ) : (
            <>
              <AccountSignupForm
                initialValue={handedOver}
                onSubmit={(details) => setCreatedFor(details.name.trim())}
              />

              <p className="mt-6 text-center text-sm text-muted">
                Already have an account?{' '}
                <Link
                  to={PATHS.signIn}
                  className="font-bold text-brand transition-colors hover:text-brand-hover"
                >
                  Log in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-container px-6 pb-8">
        <CtaBanner title="We've got you covered. Send with Parcelio and start saving today!" />
      </div>
    </div>
  );
};

export default OpenAccount;
