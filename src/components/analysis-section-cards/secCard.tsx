import React from "react";
import AnalysisCard from "../ui/analysis-card/AnalysisCard";
import MultiLineChart from "../charts/MultiLineChart";
import { useTranslation } from "react-i18next";

const SecCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AnalysisCard
      title={t("features.main_pitch.title_1")}
      subTitle={t("features.main_pitch.title_2")}
      textContent={t("features.main_pitch.description")}
    >
      <MultiLineChart />
    </AnalysisCard>
  );
};

export default SecCard;
