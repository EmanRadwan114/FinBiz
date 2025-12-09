import React from "react";
import UpgradeSection from "../components/upgrade/UpgradeSection";
import PricingTable from "../components/pricing-table/PricingTable";
import HeroSection from "../components/hero-section/HeroSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PricingTable />
      <UpgradeSection />
    </>
  );
};

export default Home;
