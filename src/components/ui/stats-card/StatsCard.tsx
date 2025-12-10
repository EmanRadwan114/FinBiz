import React, { type ReactNode } from "react";
import styles from "./style.module.scss";

interface IProps {
  children: ReactNode;
  paddingInline?: string | number;
  paddingBlock?: string | number;
}

const StatsCard: React.FC<IProps> = ({
  children,
  paddingBlock,
  paddingInline,
}) => {
  return (
    <div className={styles.card} style={{ paddingBlock, paddingInline }}>
      {children}
    </div>
  );
};

export default StatsCard;
