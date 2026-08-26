import React from "react";
import { useNavigate } from "react-router-dom";
import AustraliaWideFreight from "../components/Home/AustraliaWideFreight";
import CompareInstantRates from "../components/Home/CompareInstantRates";
import CourierNetwork from "../components/Home/CourierNetwork";
import Hero from "../components/Home/Hero";
import HomeTestimonialGrid from "../components/Home/HomeTestimonialGrid";
import IntegrationGrid from "../components/Home/IntegrationGrid";
import RateExampleGrid from "../components/Home/RateExampleGrid";
import ScrollToTop from "../components/Home/ScrollToTop";
import SolutionCards from "../components/Home/SolutionCards";
import WhyChoose from "../components/Home/WhyChoose";
import PackageDetailsForm from "../components/Quote/PackageDetailsForm";
import { PATHS } from "../routes/paths";
import { PackageDetails } from "../types/quote";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (packageDetails: PackageDetails) =>
    navigate(PATHS.quote, { state: { packageDetails } });

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <ScrollToTop />
      <Hero />

      <div className="mx-auto w-full max-w-container px-6">
        <div className="relative z-10 -mt-12 md:-mt-16">
          <section className="rounded-xl border border-black/10 bg-white px-6 py-7 shadow-card md:px-8">
            <h2 className="text-lg font-bold text-navy">
              Instant quote. Book now and Save!
            </h2>
            <div className="mt-6">
              <PackageDetailsForm onSubmit={handleSubmit} />
            </div>
          </section>
        </div>

        <div className="mt-16">
          <CompareInstantRates />
        </div>

        <div className="mt-16">
          <RateExampleGrid />
        </div>

        <div className="mt-16">
          <HomeTestimonialGrid />
        </div>

        <div className="mt-16">
          <IntegrationGrid />
        </div>

        <div className="mt-16">
          <SolutionCards />
        </div>

        <div className="mt-16">
          <CourierNetwork />
        </div>
      
        <div className="mt-16">
          <WhyChoose />
        </div>

        <div className="my-16">
          <AustraliaWideFreight />
        </div>
      </div>
    </div>
  );
};

export default Home;
