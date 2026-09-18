import React from "react";
import Breadcrumb from '../../components/ui/Breadcrumb';
import CtaBanner from "../../components/CtaBanner";
import CartonMeasurementCard from "../../components/Education/CartonMeasurementCard";
import CategoryGrid from "../../components/Education/CategoryGrid";
import PackagingChecklist from "../../components/Education/PackagingChecklist";
import { PACKAGING_REQUIREMENTS_ITEMS } from "../../mocks/education/packagingRequirements";
import { PATHS } from "../../routes/paths";

const PackagingRequirements: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="mx-auto mb-4 w-full max-w-container px-6 pt-8">
        <Breadcrumb
          items={[
            { label: 'Home', to: PATHS.home },
            { label: 'Education Centre', to: PATHS.education },
            { label: 'Packaging Requirements' },
          ]}
        />

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-ink">
            Packaging Requirements for Courier, Parcel &amp; Freight
          </h1>
          <p className="mt-3.5 text-lg font-bold text-ink">
            To start looking for answers, choose your category!
          </p>
        </div>

        <div className="mt-10">
          <CategoryGrid />
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">
            Packaging Requirements
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            The following are guidelines to follow before you ship with
            BEE DIRECT.
          </p>
          <div className="mt-5">
            <PackagingChecklist items={PACKAGING_REQUIREMENTS_ITEMS} />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Please note: we are unable to ship dangerous goods, unpackaged
            items, or objects over 4 metres in length. If you have any questions
            about packaging your shipment, contact our customer service team on{" "}
            <a
              href="tel:1300000000"
              className="font-semibold text-brand-deep transition-colors hover:text-brand-deep-hover"
            >
              1300 000 000
            </a>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">Measuring the Carton</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            To correctly measure the size of your carton, please review the
            illustration below:
          </p>
          <div className="mt-6">
            <CartonMeasurementCard
              title="Carton Diagram (L x W x H)"
              caption="Measure Length x Width x Height for accurate quoting"
            />
          </div>
        </section>
      </div>

      <div className="mx-auto mt-auto w-full max-w-container px-6 py-8">
        <CtaBanner />
      </div>
    </div>
  );
};

export default PackagingRequirements;
