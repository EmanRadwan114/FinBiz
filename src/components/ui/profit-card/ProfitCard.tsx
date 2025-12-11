import React from "react";
import styles from "./style.module.scss";
import StatsCard from "../stats-card/StatsCard";

interface IProps {
  title: string;
  price: string | number;
  percentage: string | number;
}

const ProfitCard: React.FC<IProps> = ({ title, price, percentage }) => {
  return (
    <StatsCard paddingBlock={30} paddingInline={30}>
      <div className={styles.box}>
        <div className={styles.header}>
          <h3 className={styles["stats-title"]}>{title}</h3>
          <p className={styles.price}>{price}</p>
        </div>
        <div className={styles.profit}>
          <span className={styles.percentage}>{percentage}</span>
          <div className={styles.chart}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </StatsCard>
  );
};

export default ProfitCard;
