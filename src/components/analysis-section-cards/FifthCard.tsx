import React from "react";
import styles from "./style.module.scss";
import AnalysisCard from "../ui/analysis-card/AnalysisCard";
import Button from "../ui/button/Button";

const FifthCard: React.FC = () => {
  return (
    <AnalysisCard
      title="Optimise expense
  Management as a team"
      textContent="Bring harmony to team expenses with budget limits and
  real-time monitiring. Freedom for your staff. Peace of
  mind for you."
      textAlign="start"
    >
      <Button variant="rounded" className={styles["explore-btn"]}>
        Explore more
      </Button>
    </AnalysisCard>
  );
};

export default FifthCard;
