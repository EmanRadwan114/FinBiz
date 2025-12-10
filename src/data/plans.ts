import { type IPricePlan } from "./../types/interfaces";

export const plansInfo: IPricePlan[] = [
  {
    title: "basic",
    description: "Get a professional website designed according to your needs.",
    price: 499,
    btnVariant: "outlined",
    planActionText: "Get started",
    items: [
      "Get a fully designed Website.",
      "Webflow Development",
      "Limited Support",
    ],
    withBadge: false,
  },
  {
    title: "pro",
    description: "Get a professional website designed according to your needs.",
    price: 499,
    btnVariant: "rounded",
    planActionText: "Get started",
    items: [
      "Get a fully designed Website.",
      "Webflow Development",
      "Limited Support",
      "Standart integrations",
      "Email support",
      "Email support",
    ],
    withBadge: true,
  },
  {
    title: "enterprise",
    description: "Get a professional website designed according to your needs.",
    price: 999,
    btnVariant: "rounded",
    planActionText: "Contact Us",
    items: [
      "Get a fully designed Website.",
      "Webflow Development",
      "Limited Support",
      "Standart integrations",
      "Email support",
      "Email support",
      "Email support",
      "Email support",
    ],
    withBadge: false,
  },
];
