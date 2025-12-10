import React from "react";
import styles from "./style.module.scss";
import { profitStats } from "../../data/stats";
import ProfitCard from "../../components/ui/profit-card/ProfitCard";
import BalanceCard from "../../components/balance-card/BalanceCard";
import MainChart from "../../components/main-chart/MainChart";
import EmployeeInfo from "../../components/employee-info/EmployeeInfo";
import Tabs from "../../components/navs-and-tabs/Tabs";
import AnalysisSection from "../analysis-section/AnalysisSection";

const StatsSection: React.FC = () => {
  return (
    <div className={styles["radial-gradient"]}>
      <div className={styles.gradient}>
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
        <Tabs />
        <AnalysisSection />
      </div>
    </div>
  );
};

export default StatsSection;
