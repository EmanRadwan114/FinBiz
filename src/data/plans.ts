interface IPlanKey {
  keyTitle: string;
  keyDescription: string;
  price: number;
  btnVariant: "rounded" | "outlined";
  keyPlanActionText: string;
  keyItems: string[];
  withBadge: boolean;
}

export const plansInfo: IPlanKey[] = [
  {
    keyTitle: "pricing_page.plans.basic.name",
    keyDescription: "pricing_page.plans.basic.description",
    price: 499,
    btnVariant: "outlined",
    keyPlanActionText: "pricing_page.plans.basic.button",
    keyItems: [
      "pricing_page.plans.basic.features.0",
      "pricing_page.plans.basic.features.1",
      "pricing_page.plans.basic.features.2",
    ],
    withBadge: false,
  },
  {
    keyTitle: "pricing_page.plans.pro.name",
    keyDescription: "pricing_page.plans.pro.description",
    price: 499,
    btnVariant: "rounded",
    keyPlanActionText: "pricing_page.plans.pro.button",
    keyItems: [
      "pricing_page.plans.pro.features.0",
      "pricing_page.plans.pro.features.1",
      "pricing_page.plans.pro.features.2",
      "pricing_page.plans.pro.features.3",
      "pricing_page.plans.pro.features.4",
      "pricing_page.plans.pro.features.5",
    ],
    withBadge: true,
  },
  {
    keyTitle: "pricing_page.plans.enterprise.name",
    keyDescription: "pricing_page.plans.enterprise.description",
    price: 999,
    btnVariant: "rounded",
    keyPlanActionText: "pricing_page.plans.enterprise.button",
    keyItems: [
      "pricing_page.plans.enterprise.features.0",
      "pricing_page.plans.enterprise.features.1",
      "pricing_page.plans.enterprise.features.2",
      "pricing_page.plans.enterprise.features.3",
      "pricing_page.plans.enterprise.features.4",
      "pricing_page.plans.enterprise.features.5",
      "pricing_page.plans.enterprise.features.6",
      "pricing_page.plans.enterprise.features.7",
    ],
    withBadge: false,
  },
];
