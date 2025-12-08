import React, { type ReactNode } from "react";
import styles from "./style.module.scss";

interface IProps {
  icon: ReactNode;
  text: string;
}

const SubHeader: React.FC<IProps> = ({ icon, text }) => {
  return (
    <div className={styles.box}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default SubHeader;
