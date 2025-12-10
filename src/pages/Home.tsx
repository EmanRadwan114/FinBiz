import React from "react";
import UpgradeSection from "../components/upgrade/UpgradeSection";
import PricingTable from "../components/pricing-table/PricingTable";
import HeroSection from "../components/hero-section/HeroSection";
import ReviewsSlider from "../components/reviews-slider/ReviewsSlider";
import Stats from "../components/stats-section/Stats";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Stats />
      <ReviewsSlider />
      <PricingTable />
      <UpgradeSection />
    </>
  );
};

export default Home;
