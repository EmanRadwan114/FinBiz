import React from "react";
import styles from "./style.module.scss";
import StatsCard from "../ui/stats-card/StatsCard";
import { balance } from "../../data/stats";
import Button from "../ui/button/Button";

const BalanceCard: React.FC = () => {
  return (
    <StatsCard paddingBlock={20} paddingInline={22}>
      <div className={styles.box}>
        {balance.map((item, indx) => (
          <div className={styles["card-item"]} key={item.title}>
            <div className={styles.header}>
              <h3 className={styles["item-title"]}>{item.title}</h3>
              {item.percentage && (
                <span className={styles.percentage}>{item.percentage}%</span>
              )}
            </div>
            <span className={styles["item-price"]}>${item.price}</span>
            {indx === 0 && (
              <div>
                <Button paddingVertical={10} className={styles["item-action"]}>
                  Transfer
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </StatsCard>
  );
};

export default BalanceCard;
