import React from 'react';
import { useNavigate } from 'react-router-dom';
import PackageDetailsForm from '../components/Quote/PackageDetailsForm';
import { PATHS } from '../routes/paths';
import { PackageDetails } from '../types/quote';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Hands the filled-in form to the wizard, which seeds its draft from this state.
  const handleSubmit = (packageDetails: PackageDetails) =>
    navigate(PATHS.quote, { state: { packageDetails } });

  return (
    <div className="mx-auto w-full max-w-container px-6 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-navy">
          Compare couriers and book your delivery
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Tell us what you are sending and where it is going. We will line up the courier
          options side by side so you can pick on price and timing.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-black/10 bg-white px-7 py-7 shadow-card">
        <PackageDetailsForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Home;
