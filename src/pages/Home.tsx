import React from "react";
import UpgradeSection from "../components/upgrade/UpgradeSection";
import PricingTable from "../components/pricing-table/PricingTable";
import HeroSection from "../components/hero-section/HeroSection";
import ReviewsSlider from "../components/reviews-slider/ReviewsSlider";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ReviewsSlider />
      <PricingTable />
      <UpgradeSection />
    </>
  );
};

export default Home;
