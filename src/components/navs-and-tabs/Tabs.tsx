import React from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

const tabKeys = ["product", "integration", "demo", "pricing", "login"];

const Tabs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.tabs}>
      <div className="container">
        <ul>
          {tabKeys.map((key) => (
            <li key={key}>
              {/* Key mapping: navigation.[key] */}
              {t(`navigation.${key}`)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
