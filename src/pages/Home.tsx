import React from "react";
import UpgradeSection from "../sections/upgrade/UpgradeSection";
import PricingTable from "../sections/pricing-table/PricingTable";
import HeroSection from "../sections/hero-section/HeroSection";
import ReviewsSlider from "../sections/reviews-slider/ReviewsSlider";
import StatsSection from "../sections/stats-section/StatsSection";
import AnalysisSection from "../sections/analysis-section/AnalysisSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AnalysisSection />
      <ReviewsSlider />
      <PricingTable />
      <UpgradeSection />
    </>
  );
};

export default Home;
