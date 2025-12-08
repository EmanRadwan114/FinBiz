import React from "react";
import styles from "./style.module.scss";
import SectionHeader from "../section-header/SectionHeader";
import pricingImgLight from "@/assets/pricing.svg";
import pricingImgDark from "@/assets/pricing-dark.svg";
import { useTheme } from "next-themes";

interface IProps {}

const PricingTable: React.FC<IProps> = ({}) => {
  const { resolvedTheme } = useTheme();

  return (
    <section className={styles["pricing-section"]}>
      {/* header */}
      <SectionHeader
        icon={
          <img
            src={resolvedTheme === "light" ? pricingImgLight : pricingImgDark}
            alt="pricing icon"
          />
        }
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
