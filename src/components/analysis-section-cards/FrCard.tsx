import React from "react";
import AnalysisCard from "../ui/analysis-card/AnalysisCard";
import SingleLineChart from "../charts/SingleLineChart";

const FrCard: React.FC = () => {
  return (
    <AnalysisCard
      title="Simple analytics"
      textContent="Make informed decisions backed by 
data through our analytics tools."
    >
      <SingleLineChart />
    </AnalysisCard>
  );
};

export default FrCard;
