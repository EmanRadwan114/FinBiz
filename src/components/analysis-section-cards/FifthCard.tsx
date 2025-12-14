import React from "react";
import styles from "./style.module.scss";
import AnalysisCard from "../ui/analysis-card/AnalysisCard";
import Button from "../ui/button/Button";
import { useTranslation } from "react-i18next";

const FifthCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AnalysisCard
      title={t("expense_management.title")}
      textContent={t("features.main_pitch.description")}
      textAlign="start"
    >
      <Button variant="rounded" className={styles["explore-btn"]}>
        {t("expense_management.explore_more_button")}
      </Button>
    </AnalysisCard>
  );
};

export default FifthCard;
