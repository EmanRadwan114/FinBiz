import React from "react";
import styles from "./style.module.scss";
import StatsCard from "../ui/stats-card/StatsCard";
import { balance } from "../../data/stats";
import Button from "../ui/button/Button";
import { useTranslation } from "react-i18next";

const BalanceCard: React.FC = () => {
  const { t } = useTranslation();

  const translatedBalance = balance.map((item) => ({
    ...item,
    title: t(item.keyTitle),
    price: t(item.keyPrice),
  }));

  return (
    <StatsCard paddingBlock={20} paddingInline={22}>
      <div className={styles.box}>
        {translatedBalance.map((item, indx) => (
          <div className={styles["card-item"]} key={item.title}>
            <div className={styles.header}>
              <h3 className={styles["item-title"]}>{item.title}</h3>
              {item.percentage !== undefined && (
                <span className={styles.percentage}>{item.percentage}%</span>
              )}
            </div>
            <span className={styles["item-price"]}>{item.price}</span>
            {indx === 0 && (
              <div>
                <Button paddingVertical={10} className={styles["item-action"]}>
                  {t("dashboard.actions.transfer")}
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
