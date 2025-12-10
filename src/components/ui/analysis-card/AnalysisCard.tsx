import React, { type ReactNode } from "react";
import styles from "./Style.module.scss";

interface IProps {
  textAlign?: "center" | "start" | "end";
  children: ReactNode;
  title: string;
  textContent: string;
  subTitle?: string;
}

const AnalysisCard: React.FC<IProps> = ({
  textAlign = "center",
  children,
  textContent,
  title,
  subTitle,
}) => {
  return (
    <div style={{ textAlign }} className={styles.card}>
      <h3 className={styles.title}>
        <span>{title}</span>
        <span>{subTitle}</span>
      </h3>
      <p className={styles["text-content"]}>{textContent}</p>
      {children}
    </div>
  );
};

export default AnalysisCard;
