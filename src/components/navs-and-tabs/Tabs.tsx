import React from "react";
import styles from "./style.module.scss";

const tabs = ["product", "integration", "demo", "pricing", "login"];

const Tabs: React.FC = () => {
  return (
    <div className={styles.tabs}>
      <div className="container">
        <ul>
          {tabs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
