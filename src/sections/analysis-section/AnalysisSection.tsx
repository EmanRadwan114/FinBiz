import React from "react";
import styles from "./style.module.scss";
import FrCard from "../../components/analysis-section-cards/FrCard";
import SecCard from "../../components/analysis-section-cards/secCard";
import ThrdCard from "../../components/analysis-section-cards/thrdCard";
import ForthCard from "../../components/analysis-section-cards/forthCard";
import FifthCard from "../../components/analysis-section-cards/FifthCard";

const AnalysisSection: React.FC = () => {
  return (
    <section className={styles["analysis-sec"]}>
      <div className={`container ${styles["sec-container"]}`}>
        <div className={styles.cards}>
          {/* --------------1st row-------------- */}
          {/* card1 */}
          <FrCard />

          {/* card2 */}
          <SecCard />

          {/* card3 */}
          <ThrdCard />

          {/* --------------2nd row-------------- */}
          {/* card1 */}
          <ForthCard />

          {/* card2 */}
          <FifthCard />
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
