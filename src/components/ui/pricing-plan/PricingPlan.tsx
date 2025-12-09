import React from "react";
import styles from "./style.module.scss";
import Button from "../button/Button";
import { FiCheck } from "react-icons/fi";
import type { IPricePlan } from "../../../data/interfaces";
import { PiStarFourBold } from "react-icons/pi";

const PricingPlan: React.FC<IPricePlan> = ({
  title,
  description,
  price,
  btnVariant = "rounded",
  planActionText = "Get started",
  items,
  withBadge,
}) => {
  return (
    <div className={styles.card}>
      {withBadge && (
        <div className={styles.badge}>
          <PiStarFourBold />
          <span>popular</span>
        </div>
      )}
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <span className={styles.price}>
        ${price}
        <span className={styles["price-duration"]}>/month</span>
      </span>

      <div className={styles.line}></div>
      {/* plan items */}
      <ul>
        {items.map((item) => (
          <li>
            <FiCheck /> <span>{item}</span>
          </li>
        ))}
      </ul>

      <Button variant={btnVariant}>{planActionText}</Button>
    </div>
  );
};

export default PricingPlan;
