import React from "react";
import StatsSection from "../stats-section/StatsSection";
import AnalysisSection from "../analysis-section/AnalysisSection";

const ChartsSections: React.FC = () => {
  return (
    <div>
      <StatsSection />
      <AnalysisSection />
    </div>
  );
};

export default ChartsSections;
