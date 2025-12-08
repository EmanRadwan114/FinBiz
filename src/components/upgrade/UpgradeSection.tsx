import React from "react";
import styles from "./style.module.scss";
import secImg from "@/assets/man.png";
import Button from "../ui/button/Button";
import { Link } from "react-router";

const UpgradeSection: React.FC = () => {
  return (
    <section className={styles["upgrade-sec"]}>
      <div className={styles.card}>
        {/* start col */}
        <div className={styles["start-col"]}>
          <div>
            <p>Let’s Upgrade your finances experience by using FinBiz</p>

            <div className={styles.btns}>
              <Button variant="rounded" paddingVertical={18}>
                <Link to={"/"}>Request Demo</Link>
              </Button>
              <Button variant="rounded" paddingVertical={18}>
                <Link to={"/"}>Watch Video</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* end col */}
        <div className={styles["end-col"]}>
          <div>
            <img src={secImg} alt="man looking to a wall full of papers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpgradeSection;
