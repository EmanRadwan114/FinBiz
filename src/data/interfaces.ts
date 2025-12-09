import type { TBtnVariant } from "../types/types";

export interface IPricePlan {
  title: string;
  description: string;
  price: number;
  btnVariant: TBtnVariant;
  planActionText: string;
  items: string[];
  withBadge: boolean;
}
