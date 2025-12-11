import React from "react";
import AnalysisCard from "../ui/analysis-card/AnalysisCard";
import SingleLineChart from "../charts/SingleLineChart";
import { useTranslation } from "react-i18next";

const FrCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AnalysisCard
      title={t("features.simple_analytics.title")}
      textContent={t("features.simple_analytics.description")}
    >
      <SingleLineChart />
    </AnalysisCard>
  );
};

export default FrCard;
