import React from "react";
import styles from "./style.module.scss";
import SectionHeader from "../../components/ui/section-header/SectionHeader";
import pricingImgLight from "@/assets/pricing.svg";
import pricingImgDark from "@/assets/pricing-dark.svg";
import { useTheme } from "next-themes";
import PricingPlan from "../../components/ui/pricing-plan/PricingPlan";
import { plansInfo } from "../../data/plans";
import { useTranslation } from "react-i18next";

const PricingTable: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();

  const translatedPlans = plansInfo.map((plan) => ({
    price: plan.price,
    btnVariant: plan.btnVariant,
    withBadge: plan.withBadge,

    title: t(plan.keyTitle),
    description: t(plan.keyDescription),
    planActionText: t(plan.keyPlanActionText),

    items: plan.keyItems.map((key) => t(key)),
  }));

  return (
    <section className={styles["pricing-section"]}>
      <div className="container">
        <SectionHeader
          icon={
            <img
              src={resolvedTheme === "light" ? pricingImgLight : pricingImgDark}
              alt="pricing icon"
            />
          }
          subTitle={t("pricing_page.badge")}
        >
          <h2>{t("pricing_page.title")}</h2>
          <p>{t("pricing_page.description")}</p>
        </SectionHeader>

        <div className={styles.plans}>
          {translatedPlans.map((plan) => (
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
      </div>
    </section>
  );
};

export default PricingTable;
