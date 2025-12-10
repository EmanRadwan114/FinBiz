import React from "react";
import styles from "./style.module.scss";

const employeeData = [
  "Employee",
  "Independent Contractor",
  "Contracted Employee",
  "Stakeholders",
];

const EmployeeInfo: React.FC = () => {
  return (
    <div className={styles["employee-info"]}>
      {employeeData.map((item) => (
        <div className={styles.employee} key={item}>
          <h3 className={styles.title}>{item}</h3>
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
