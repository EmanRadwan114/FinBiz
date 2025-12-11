import { useRef, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { useTheme } from "next-themes";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartData,
  type ChartOptions,
  Chart,
} from "chart.js";
import StatsCard from "../ui/stats-card/StatsCard";
import styles from "./style.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// --- Static Data ---
const labels: string[] = ["", "", "", "", "", "", "", "", "", ""];
const primaryDataPoints: number[] = [
  1100, 2000, 2100, 1300, 1500, 3000, 2900, 4500, 5500, 5200, 6000,
];
const secondaryDataPoints: number[] = [
  500, 1100, 800, 400, 600, 1800, 1500, 3100, 3500, 4000, 3800,
];

// --- Types and Theme Logic ---
type ChartColors = {
  tickColor: string;
  gridColor: string;
  primaryBorder: string;
  secondaryBorder: string;
  pointBg: string;
  containerBg: string;
};

const getChartColors = (theme: string | undefined): ChartColors => {
  const primaryColor = "#1e40af";
  const secondaryColor = "#6b7280";

  if (theme === "dark") {
    return {
      tickColor: "#E0E0E0",
      gridColor: "#4F4F4F",
      primaryBorder: primaryColor,
      secondaryBorder: secondaryColor,
      pointBg: "#FFFFFF",
      containerBg: "transparent",
    };
  } else {
    return {
      tickColor: "#333333",
      gridColor: "#DDDDDD",
      primaryBorder: primaryColor,
      secondaryBorder: secondaryColor,
      pointBg: "#FFFFFF",
      containerBg: "transparent",
    };
  }
};

// --- Component ---
const MultiLineChart: React.FC = () => {
  const chartRef = useRef<Chart<"line"> | null>(null);
  const { resolvedTheme } = useTheme();

  // Calculate colors synchronously based on theme
  const colors = getChartColors(resolvedTheme);

  // Use useMemo to calculate chart data (data depends only on colors/theme)
  const chartData = useMemo<ChartData<"line">>(
    () => ({
      labels,
      datasets: [
        {
          label: "Primary Data",
          data: primaryDataPoints,
          borderColor: colors.primaryBorder,
          backgroundColor: "transparent",
          fill: false,
          pointBackgroundColor: colors.pointBg,
          pointBorderColor: colors.primaryBorder,
          pointHoverRadius: 7,
          pointRadius: 0,
          borderWidth: 2,
        },
        {
          label: "Secondary Data",
          data: secondaryDataPoints,
          borderColor: colors.secondaryBorder,
          backgroundColor: "transparent",
          fill: false,
          borderDash: [5, 5],
          pointBackgroundColor: colors.pointBg,
          pointBorderColor: colors.secondaryBorder,
          pointHoverRadius: 7,
          pointRadius: 0,
          borderWidth: 2,
        },
      ],
    }),
    [colors]
  );

  // Use useMemo to calculate chart options (options depend only on colors/theme)
  const chartOptions = useMemo<ChartOptions<"line">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: false },
        tooltip: {
          enabled: true,
          mode: "index",
          intersect: false,
        },
      },
      scales: {
        x: {
          display: false,
          grid: {}, // Empty grid config is type-safe
          border: {
            display: false, // Hides axis line
          },
        },
        y: {
          display: false,
          grid: {}, // Empty grid config is type-safe
          border: {
            display: false, // Hides axis line
          },
        },
      },
      backgroundColor: "rgba(0, 0, 0, 0)",
    }),
    []
  );

  return (
    <div className={styles["multiline-chart"]}>
      <StatsCard paddingBlock={23} paddingInline={27}>
        <div
          style={{
            backgroundColor: colors.containerBg,
            height: 200,
          }}
        >
          {/* Data and options are now derived from useMemo */}
          <Line ref={chartRef} data={chartData} options={chartOptions} />
        </div>
      </StatsCard>
    </div>
  );
};

export default MultiLineChart;
