import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from '../../components/ui/Breadcrumb';
import CtaBanner from "../../components/CtaBanner";
import AccountBenefits from "../../components/Education/AccountBenefits";
import AccountFaqList from "../../components/Education/AccountFaqList";
import AccountHowToSteps from "../../components/Education/AccountHowToSteps";
import AccountMemberReviews from "../../components/Education/AccountMemberReviews";
import AccountSignupForm from "../../components/Account/AccountSignupForm";
import CategoryGrid from "../../components/Education/CategoryGrid";
import { ACCOUNT_SIGNUP_ANCHOR, PATHS } from "../../routes/paths";
import { AccountSignupDetails } from "../../types/account";

const AccountEnquiries: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (accountSignup: AccountSignupDetails) =>
    navigate(PATHS.openAccount, { state: { accountSignup } });

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto mb-4 w-full max-w-container px-6 pt-8">
        <Breadcrumb
          items={[
            { label: 'Home', to: PATHS.home },
            { label: 'Education Centre', to: PATHS.education },
            { label: 'Account Enquiries' },
          ]}
        />

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-ink">
            Open A Free Shipping Account With BEE DIRECT
          </h1>
          <p className="mt-3.5 text-lg font-bold text-ink">
            To start looking for answers, choose your category!
          </p>
        </div>

        <div className="mt-10">
          <CategoryGrid />
        </div>

        <section className="mt-12">
          <p className="text-start text-sm leading-relaxed text-muted">
            Want to save on every delivery you book? Open a free BEE DIRECT
            shipping account to enjoy member-only discounts, faster bookings and
            real-time parcel tracking – all from one simple-to-use dashboard. No
            matter what your shipping needs are, our courier account puts you in
            complete control.
          </p>
          <p className="mt-4 text-start">
            <Link
              to={`#${ACCOUNT_SIGNUP_ANCHOR}`}
              className="text-sm font-bold text-brand-deep transition-colors hover:text-brand-deep-hover"
            >
              Open an account now and start saving.
            </Link>
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">
            Save on Shipping by Becoming a Member
          </h2>
          <div className="mt-6">
            <AccountBenefits />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">
            How to Open a BEE DIRECT Shipping Account
          </h2>
          <div className="mt-6">
            <AccountHowToSteps />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">
            Reviews from Our Shipping Account Members
          </h2>
          <div className="mt-6">
            <AccountMemberReviews />
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-ink">
            Shipping Guidelines and Restrictions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            BEE DIRECT accepts most items for transport, from small parcels to
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

        <section className="mt-12 scroll-mt-8 focus:outline-none" id={ACCOUNT_SIGNUP_ANCHOR}>
          <h2 className="text-center text-2xl font-bold text-ink">
            Open Your BEE DIRECT Shipping Account Today
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
          <h2 className="text-center text-2xl font-bold text-ink">
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
