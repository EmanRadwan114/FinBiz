import React from "react";
import AnalysisCard from "../ui/analysis-card/AnalysisCard";
import MultiLineChart from "../charts/MultiLineChart";

const SecCard: React.FC = () => {
  return (
    <AnalysisCard
      title="Boosting Business."
      subTitle="Today and Tomorrow."
      textContent="Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of mind for you."
    >
      <MultiLineChart />
    </AnalysisCard>
  );
};

export default SecCard;
