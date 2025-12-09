import React, { type ReactNode } from "react";
import styles from "./style.module.scss";
import SubHeader from "../ui/sub-header/SubHeader";

interface IProps {
  children: ReactNode;
  icon: ReactNode;
  subTitle: string;
}

const SectionHeader: React.FC<IProps> = ({ children, icon, subTitle }) => {
  return (
    <header className={styles.header}>
      <SubHeader icon={icon} text={subTitle} />
      <div className={styles.content}>{children}</div>
    </header>
  );
};

export default SectionHeader;
