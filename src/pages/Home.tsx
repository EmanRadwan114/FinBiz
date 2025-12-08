import React from "react";
import UpgradeSection from "../components/upgrade/UpgradeSection";
import PricingTable from "../components/pricing-table/PricingTable";

const Home: React.FC = () => {
  return (
    <>
      <PricingTable />
      <UpgradeSection />
    </>
  );
};

export default Home;
