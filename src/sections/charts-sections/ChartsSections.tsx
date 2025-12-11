import React from "react";
import StatsSection from "../stats-section/StatsSection";
import AnalysisSection from "../analysis-section/AnalysisSection";
import styles from "";

const ChartsSections: React.FC = () => {
  return (
    <div className={styles.rad}>
      <StatsSection />
      <AnalysisSection />
    </div>
  );
};

export default ChartsSections;
