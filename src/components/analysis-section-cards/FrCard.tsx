import React from "react";
import styles from "./style.module.scss";
import AnalysisCard from "../ui/analysis-card/AnalysisCard";

const FrCard: React.FC = () => {
  return (
    <AnalysisCard
      title="Simple analytics"
      textContent="Make informed decisions backed by 
data through our analytics tools."
    >
      hi
    </AnalysisCard>
  );
};

export default FrCard;
