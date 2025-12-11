// data/stats.ts (or wherever profitStats lives)

export const profitStats = [
  {
    keyTitle: "dashboard.metrics.total_profit",
    keyPrice: "dashboard.values.profit_amount",
    keyPercentage: "dashboard.values.profit_change",
  },
  {
    keyTitle: "dashboard.metrics.total_revenue",
    keyPrice: "dashboard.values.revenue_amount",
    keyPercentage: "dashboard.values.revenue_change",
  },
  {
    keyTitle: "dashboard.metrics.products_sold",
    keyPrice: "dashboard.values.products_sold_amount",
    keyPercentage: "dashboard.values.products_sold_change",
  },
];

export const balance: {
  keyTitle: string;
  keyPrice: string;
  percentage?: number;
}[] = [
  {
    keyTitle: "dashboard.metrics.total_balance",
    keyPrice: "dashboard.values.balance_amount",
  },
  {
    keyTitle: "dashboard.metrics.total_income",
    keyPrice: "dashboard.values.income_amount",
    percentage: 92,
  },
  {
    keyTitle: "dashboard.metrics.total_expense",
    keyPrice: "dashboard.values.expense_amount",
    percentage: 92,
  },
];

export const analysisData: {
  title: string;
  content: string;
  subTitle?: string;
}[] = [
  {
    title: "Simple analytics",
    content: `Make informed decisions backed by 
data through our analytics tools.`,
  },
  {
    title: `Boosting Business.`,
    subTitle: "Today and Tomorrow.",
    content: `Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of mind for you.`,
  },
  {
    title: "Easy collaboration",
    content: `Seamlessly collaborate with your team 
members like never before.`,
  },
  {
    title: "Real-time accounting at your fingertips.",
    content: `Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders. There\`s now a new way of accounting.`,
  },
  {
    title: `Optimise expense
Management as a team`,
    content: `Bring harmony to team expenses with budget limits and
real-time monitiring. Freedom for your staff. Peace of
mind for you.`,
  },
];
