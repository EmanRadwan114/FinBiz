import React from "react";
import styles from "./style.module.scss";
import secImg from "@/assets/man.png";
import Button from "../../components/ui/button/Button";
import { Link } from "react-router";
import { useTranslation } from "react-i18next"; // Hook for translation

const UpgradeSection: React.FC = () => {
  // Destructure the translation function 't'
  const { t } = useTranslation();

  return (
    <section className={styles["upgrade-sec"]}>
      <div className="container">
        <div className={styles.card}>
          {/* start col */}
          <div className={styles["start-col"]}>
            <div>
              <p>
                {/* Key: finbiz_cta.title */}
                {t("finbiz_cta.title")}
              </p>

              <div className={styles.btns}>
                <Button variant="rounded" paddingVertical={18}>
                  <Link to={"/"}>
                    {/* Key: finbiz_cta.request_demo_button */}
                    {t("finbiz_cta.request_demo_button")}
                  </Link>
                </Button>
                <Button variant="rounded" paddingVertical={18}>
                  <Link to={"/"}>
                    {/* Key: finbiz_cta.watch_video_button */}
                    {t("finbiz_cta.watch_video_button")}
                  </Link>
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
      </div>
    </section>
  );
};

export default UpgradeSection;
