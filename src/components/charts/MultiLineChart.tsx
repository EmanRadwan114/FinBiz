import { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
// The 'next-themes' dependency is assumed to be available in the user's environment.
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

const labels = ["", "", "", "", "", "", "", "", "", ""];

// Data points for the solid blue line (matches the image's primary line shape)
const primaryDataPoints = [
  1100, // Start low
  2000,
  2100,
  1300, // Sharp drop
  1500,
  3000,
  2900,
  4500,
  5500, // High peak
  5200, // Slight drop at end
  6000, // Final peak (if you want 11 points)
];

// Data points for the dashed gray line (mirrors the primary line's shape but lower)
const secondaryDataPoints = [
  500, // Start low
  1100,
  800,
  400, // Sharp drop
  600,
  1800,
  1500,
  3100,
  3500,
  4000,
  3800, // Final point (if you want 11 points)
];

const getChartColors = (theme: string | undefined) => {
  const primaryColor = "#1e40af"; // A vibrant blue
  const secondaryColor = "#6b7280"; // A standard gray

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

const MultiLineChart = () => {
  const chartRef = useRef(null);
  const { resolvedTheme } = useTheme();

  const [chartData, setChartData] = useState({
    labels,
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const colors = getChartColors(resolvedTheme);
    const chart = chartRef.current;

    if (!chart) return;

    // Set chart data for multiple lines
    setChartData({
      labels,
      datasets: [
        {
          label: "Primary Data",
          data: primaryDataPoints,
          borderColor: colors.primaryBorder,
          backgroundColor: "transparent", // No fill for multiple lines
          fill: false,
          pointBackgroundColor: colors.pointBg,
          pointBorderColor: colors.primaryBorder,
          pointHoverRadius: 7,
          pointRadius: 0, // Hide points
          borderWidth: 2,
        },
        {
          label: "Secondary Data",
          data: secondaryDataPoints,
          borderColor: colors.secondaryBorder,
          backgroundColor: "transparent", // No fill for multiple lines
          fill: false,
          borderDash: [5, 5], // Dashed line style
          pointBackgroundColor: colors.pointBg,
          pointBorderColor: colors.secondaryBorder,
          pointHoverRadius: 7,
          pointRadius: 0, // Hide points
          borderWidth: 2,
        },
      ],
    });

    setChartOptions({
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
          grid: { drawBorder: false, display: false },
        },
        y: {
          display: false,
          grid: { drawBorder: false, display: false },
        },
      },
      backgroundColor: "rgba(0, 0, 0, 0)",
    });
  }, [resolvedTheme]);

  const colors = getChartColors(resolvedTheme);

  return (
    <div className={styles["multiline-chart"]}>
      <StatsCard paddingBlock={23} paddingInline={27}>
        <div
          style={{
            backgroundColor: colors.containerBg,
            height: 200,
          }}
        >
          <Line ref={chartRef} data={chartData} options={chartOptions} />
        </div>
      </StatsCard>
    </div>
  );
};

export default MultiLineChart;
