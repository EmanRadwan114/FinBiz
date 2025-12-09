import React, { type ReactNode } from "react";
import styles from "./style.module.scss";
import Button from "../button/Button";
import type { TBtnVariant } from "../../../types/types";

interface IProps {
  title: string;
  description: string;
  price: number | string;
  btnVariant?: TBtnVariant;
  planActionText?: string;
  items: string[];
}

const PricingPlan: React.FC<IProps> = ({
  title,
  description,
  price,
  btnVariant = "rounded",
  planActionText = "Get started",
  items,
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.description}>{description}</span>
      <span className={styles.price}>
        {price}
        <span className={styles["price-duration"]}>/month</span>
      </span>

      {/* plan items */}
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <Button variant={btnVariant}>{planActionText}</Button>
    </div>
  );
};

export default PricingPlan;
