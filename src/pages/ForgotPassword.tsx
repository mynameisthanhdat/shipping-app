import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from '../components/Account/ForgotPasswordForm';
import CtaBanner from '../components/CtaBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import { PATHS } from '../routes/paths';

const ForgotPassword: React.FC = () => {
  const [sentTo, setSentTo] = useState<string>();

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto w-full max-w-container px-6 pt-8">
        <Breadcrumb
          items={[
            { label: 'Home', to: PATHS.home },
            { label: 'Forgot Password' },
          ]}
        />

        <div className="mt-10 text-center">
          <h1 className="text-3xl font-bold text-ink">Reset Your Password</h1>
          <p className="mx-auto mt-3.5 max-w-xl text-muted">
            Enter the email on your Bee Direct account and we will send you a link to choose
            a new password.
          </p>
        </div>

        <div className="mt-10">
          {sentTo ? (
            <div className="mx-auto max-w-md rounded-2xl border border-black/10 bg-white p-7 text-center shadow-card sm:p-9">
              <h2 className="text-[15px] font-bold text-ink">Check your inbox</h2>
              {/*
                Deliberately does not say whether an account exists for this
                address — that would let anyone probe for registered emails.
              */}
              <p className="mt-2 text-sm text-ink">
                {`If ${sentTo} belongs to a Bee Direct account, a reset link is on its way. The link expires in 30 minutes.`}
              </p>
              <p className="mt-4 text-sm text-muted">
                Nothing arrived? Check your spam folder, or{' '}
                <button
                  type="button"
                  onClick={() => setSentTo(undefined)}
                  className="font-semibold text-brand-deep underline transition-colors hover:text-brand-deep-hover"
                >
                  try a different email
                </button>
                .
              </p>
              <p className="mt-6 text-sm text-muted">
                Sending emails is not connected to a backend yet, so no message was actually
                sent.
              </p>
            </div>
          ) : (
            <ForgotPasswordForm onSubmit={setSentTo} />
          )}

          <p className="mt-6 text-center text-sm text-muted">
            Remembered it?{' '}
            <Link
              to={PATHS.signIn}
              className="font-bold text-brand-deep transition-colors hover:text-brand-deep-hover"
            >
              Back to login
            </Link>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-container px-6 pb-8">
        <CtaBanner title="We've got you covered. Send with Bee Direct and start saving today!" />
      </div>
    </div>
  );
};

export default ForgotPassword;
