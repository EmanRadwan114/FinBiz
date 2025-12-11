import React from "react";
import styles from "./style.module.scss";
import Button from "../button/Button";
import { FiCheck } from "react-icons/fi";
import { PiStarFourBold } from "react-icons/pi";
import type { IPricePlan } from "../../../types/interfaces";
import { useTranslation } from "react-i18next";

const PricingPlan: React.FC<IPricePlan> = ({
  title,
  description,
  price,
  btnVariant = "rounded",
  planActionText = "Get started",
  items,
  withBadge,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      {withBadge && (
        <div className={styles.badge}>
          <PiStarFourBold />
          <span>{t("pricing_page.plans.pro.badge")}</span>
        </div>
      )}
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <span className={styles.price}>
        ${price}
        <span className={styles["price-duration"]}>
          {t("pricing_page.plans.basic.duration")}
        </span>
      </span>

      <div className={styles.line}></div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <FiCheck /> <span>{item}</span>
          </li>
        ))}
      </ul>

      <Button variant={btnVariant}>{planActionText}</Button>
    </div>
  );
};

export default PricingPlan;
