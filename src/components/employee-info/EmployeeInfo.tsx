import React from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

const employeeKeys = [
  "employee",
  "independent_contractor",
  "contracted_employee",
  "stakeholders",
];

const EmployeeInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["employee-info"]}>
      {employeeKeys.map((key) => (
        <div className={styles.employee} key={key}>
          <h3 className={styles.title}>
            {/* Key mapping: dashboard.categories.[key] */}
            {t(`dashboard.categories.${key}`)}
          </h3>
          <div className={styles.placeholder}>
            <div></div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeInfo;
