import React, { type ReactNode } from "react";
import styles from "./style.module.scss";

interface IProps {
  children: ReactNode;
}

const Icon: React.FC<IProps> = ({ children }) => {
  return <div className={styles["icon-container"]}>{children}</div>;
};

export default Icon;
