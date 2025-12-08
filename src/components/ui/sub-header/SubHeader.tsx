import React, { type ReactNode } from "react";
import styles from "./style.module.scss";
import Button from "../button/Button";

interface IProps {
  icon: ReactNode;
  text: string;
}

const SubHeader: React.FC<IProps> = ({ icon, text }) => {
  return (
    <Button className={styles.box}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </Button>
  );
};

export default SubHeader;
