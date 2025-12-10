import React from "react";
import styles from "./style.module.scss";
import { profitStats } from "../../data/stats";
import ProfitCard from "../ui/profit-card/ProfitCard";
import BalanceCard from "../balance-card/BalanceCard";
import MainChart from "../main-chart/MainChart";
import EmployeeInfo from "../employee-info/EmployeeInfo";

const Stats: React.FC = () => {
  return (
    <section className={styles["stats-sec"]}>
      <div className={`container ${styles["sec-container"]}`}>
        <div className={styles["stats-card"]}>
          <div className={styles["profit-cards"]}>
            {/* 1st row */}
            {profitStats.map((item) => (
              <div className={styles["profit-card"]} key={item.title}>
                <ProfitCard
                  title={item.title}
                  price={item.price}
                  percentage={item.percentage}
                />
              </div>
            ))}

            {/* 2nd row */}
            <div className={styles.balance}>
              <BalanceCard />
            </div>

            <div className={styles.chart}>
              <MainChart />
            </div>

            <div className={styles.employee}>
              <EmployeeInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
