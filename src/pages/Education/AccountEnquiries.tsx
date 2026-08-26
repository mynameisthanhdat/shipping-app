import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CtaBanner from "../../components/CtaBanner";
import AccountBenefits from "../../components/Education/AccountBenefits";
import AccountFaqList from "../../components/Education/AccountFaqList";
import AccountHowToSteps from "../../components/Education/AccountHowToSteps";
import AccountMemberReviews from "../../components/Education/AccountMemberReviews";
import AccountSignupForm from "../../components/Education/AccountSignupForm";
import CategoryGrid from "../../components/Education/CategoryGrid";
import { PATHS } from "../../routes/paths";
import { AccountSignupDetails } from "../../types/account";

const AccountEnquiries: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (accountSignup: AccountSignupDetails) =>
    navigate(PATHS.openAccount, { state: { accountSignup } });

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto mb-4 w-full max-w-container px-6 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link to={PATHS.home} className="transition-colors hover:text-navy">
            Home
          </Link>
          <span> / </span>
          <Link
            to={PATHS.education}
            className="transition-colors hover:text-navy"
          >
            Education Centre
          </Link>
          <span> / Account Enquiries</span>
        </nav>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-navy">
            Open A Free Shipping Account With Transdirect
          </h1>
          <p className="mt-3.5 text-lg font-bold text-navy">
            To start looking for answers, choose your category!
          </p>
        </div>

        <div className="mt-10">
          <CategoryGrid />
        </div>

        <section className="mt-12">
          <p className="text-start text-sm leading-relaxed text-muted">
            Want to save on every delivery you book? Open a free Transdirect
            shipping account to enjoy member-only discounts, faster bookings and
            real-time parcel tracking – all from one simple-to-use dashboard. No
            matter what your shipping needs are, our courier account puts you in
            complete control.
          </p>
          <p className="mt-4 text-start">
            <a
              href="#account-signup"
              className="text-sm font-bold text-brand transition-colors hover:text-brand-hover"
            >
              Open an account now and start saving.
            </a>
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">
            Save on Shipping by Becoming a Member
          </h2>
          <div className="mt-6">
            <AccountBenefits />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">
            How to Open a Transdirect Shipping Account
          </h2>
          <div className="mt-6">
            <AccountHowToSteps />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">
            Reviews from Our Shipping Account Members
          </h2>
          <div className="mt-6">
            <AccountMemberReviews />
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-navy">
            Shipping Guidelines and Restrictions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Transdirect accepts most items for transport, from small parcels to
            larger freight deliveries. The maximum length we can carry is 5
            metres (500cm).
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Important: We are unable to transport hazardous materials,
            perishable goods or any items classified as dangerous or restricted.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Please refer to our packaging requirements for details on preparing
            your parcel.
          </p>
        </section>

        <section className="mt-12" id="account-signup">
          <h2 className="text-center text-2xl font-bold text-navy">
            Open Your Transdirect Shipping Account Today
          </h2>
          <p className="mt-3 text-center text-sm leading-relaxed text-muted">
            Ready to start saving? Take advantage of membership discounts by
            opening your free courier account today.
          </p>
          <div className="mt-8">
            <AccountSignupForm onSubmit={handleSubmit} />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-center text-2xl font-bold text-navy">
            Shipping Account FAQs
          </h2>
          <div className="mt-8">
            <AccountFaqList />
          </div>
        </section>
      </div>

      <div className="mx-auto mt-auto w-full max-w-container px-6 py-8">
        <CtaBanner />
      </div>
    </div>
  );
};

export default AccountEnquiries;
