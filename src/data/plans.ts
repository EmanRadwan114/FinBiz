import type { TBtnVariant } from "../types/types";

export const plansInfo: {
  title: string;
  description: string;
  price: number;
  btnVariant: TBtnVariant;
  planActionText: string;
  items: string[];
}[] = [
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
  },
];
