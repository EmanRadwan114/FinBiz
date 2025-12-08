import React from "react";
import styles from "./style.module.scss";
import SectionHeader from "../section-header/SectionHeader";
import pricingImg from "@/assets/pricing.svg";

interface IProps {}

const PricingTable: React.FC<IProps> = ({}) => {
  return (
    <section className={styles["pricing-section"]}>
      {/* header */}
      <SectionHeader
        icon={<img src={pricingImg} alt="pricing icon" />}
        subTitle="Pricing"
      >
        <h2>Find the right plan</h2>
        <p>
          Invest in your company's future with our comprehensive financial
          solution. Contact us for pricing details and see how we can help you
          streamline your finances and reach your business goals.
        </p>
      </SectionHeader>

      {/* content */}
    </section>
  );
};

export default PricingTable;
