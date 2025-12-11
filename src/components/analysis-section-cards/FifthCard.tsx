import React from "react";
import styles from "./style.module.scss";
import AnalysisCard from "../ui/analysis-card/AnalysisCard";
import Button from "../ui/button/Button";
import { useTranslation } from "react-i18next";

const FifthCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AnalysisCard
      // Key: expense_management.title
      title={t("expense_management.title")}
      // Key: features.main_pitch.description (Reusing the textContent from the main pitch,
      // as 'expense_management' in your JSON does not have a dedicated 'description' key)
      textContent={t("features.main_pitch.description")}
      textAlign="start"
    >
      <Button variant="rounded" className={styles["explore-btn"]}>
        {/* Key: expense_management.explore_more_button */}
        {t("expense_management.explore_more_button")}
      </Button>
    </AnalysisCard>
  );
};

export default FifthCard;
