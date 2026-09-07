import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Account/LoginForm';
import CtaBanner from '../components/CtaBanner';
import { PATHS } from '../routes/paths';

const SignIn: React.FC = () => {
  const [notice, setNotice] = useState<string>();

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto w-full max-w-container px-6 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to={PATHS.home} className="transition-colors hover:text-navy">
            Home
          </Link>
          <span> / Login</span>
        </nav>

        <div className="mt-10 text-center">
          <h1 className="text-3xl font-bold text-navy">Welcome Back</h1>
          <p className="mx-auto mt-3.5 max-w-xl text-muted">
            Log in to your Parcelio account to manage shipments and track savings.
          </p>
        </div>

        <div className="mt-10">
          <LoginForm
            notice={notice}
            onSubmit={() =>
              setNotice('Sign-in is not connected to an accounts API yet.')
            }
          />

          <p className="mt-6 text-center text-sm text-muted">
            Don&apos;t have an account?{' '}
            <Link
              to={PATHS.openAccount}
              className="font-bold text-brand transition-colors hover:text-brand-hover"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-container px-6 pb-8">
        <CtaBanner title="We've got you covered. Send with Parcelio and start saving today!" />
      </div>
    </div>
  );
};

export default SignIn;
