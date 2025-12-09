import React from "react";
import styles from "./style.module.scss";
import SectionHeader from "../ui/section-header/SectionHeader";
import pricingImgLight from "@/assets/pricing.svg";
import pricingImgDark from "@/assets/pricing-dark.svg";
import { useTheme } from "next-themes";
import PricingPlan from "../ui/pricing-plan/PricingPlan";
import { plansInfo } from "../../data/plans";

const PricingTable: React.FC = () => {
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
          "Invest in your company's future with our comprehensive financial
          solution. Contact us for pricing details and see how we can help you
          streamline your finances and reach your business goals.
        </p>
      </SectionHeader>

      {/* content */}
      <div className={styles.plans}>
        {plansInfo.map((plan) => (
          <PricingPlan
            key={plan.title}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            btnVariant={plan.btnVariant}
            planActionText={plan.planActionText}
            items={plan.items}
            withBadge={plan.withBadge}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
