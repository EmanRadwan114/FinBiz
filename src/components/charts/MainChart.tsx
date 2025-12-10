import { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { useTheme } from "next-themes"; // Import useTheme
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

const labels = [
  "0",
  "12:00AM",
  "01:00AM",
  "02:00AM",
  "03:00AM",
  "04:00AM",
  "05:00AM",
  "06:00AM",
  "07:00AM",
  "08:00AM",
  "09:00AM",
  "10:00AM",
  "11:00AM",
  "12:00PM",
];
const dataPoints = [
  7000, 4800, 5000, 6800, 7500, 7000, 5200, 3200, 3600, 3800, 6500, 7500, 7400,
  6500,
];

const getChartColors = (theme: string | undefined) => {
  if (theme === "dark") {
    return {
      tickColor: "#4F4F4F",
      gridColor: "#333333",
      datasetBorder: "#4DC5AE",
      pointBg: "#FFFFFF",
      gradientStart: "#4DC5AE2B",
      gradientEnd: "#3AA08700",
    };
  } else {
    return {
      // Light Mode Colors
      tickColor: "#333333",
      gridColor: "#9b9ca1",
      datasetBorder: "#4DC5AE",
      pointBg: "#FFFFFF",
      gradientStart: "#4DC5AE2B",
      gradientEnd: "#3AA08700",
    };
  }
};

const chartHeaderData = ["daily", "weekly", "monthly", "yearly"];

const MainChart = () => {
  const chartRef = useRef(null);
  const { resolvedTheme } = useTheme();

  const [chartData, setChartData] = useState({
    labels,
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  // Effect to update chart configuration when theme changes or mounts
  useEffect(() => {
    const colors = getChartColors(resolvedTheme);
    const chart = chartRef.current;

    if (!chart) return;

    // 1. Generate the dynamic gradient using the current chart context
    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, colors.gradientStart);
    gradient.addColorStop(1, colors.gradientEnd);

    // 2. Update the DATA state with theme-dependent colors/gradients
    setChartData({
      labels,
      datasets: [
        {
          data: dataPoints,
          borderColor: colors.datasetBorder,
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: colors.pointBg,
          pointBorderColor: colors.datasetBorder,
          pointRadius: [0, 0, 0, 0, 0, 0, 5, 0, 0],
          pointHoverRadius: 7,
        },
      ],
    });

    // 3. Update the OPTIONS state with theme-dependent colors
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            color: colors.gridColor, // Dynamic grid color
          },
          border: {
            dash: [2, 2],
          },
          ticks: {
            color: colors.tickColor, // Dynamic tick color
            callback: function (
              value: string,
              index: number,
              values: string[]
            ) {
              if (index === 0 || index === values.length - 1) {
                return "";
              }
              return this.getLabelForValue(value);
            },
          },
        },
        y: {
          grid: {
            color: colors.gridColor,
          },
          border: {
            dash: [2, 2],
          },
          ticks: {
            color: colors.tickColor,
            font: {
              size: 10,
              family: '"DM Sans", sans-serif',
              letterSpacing: 1.5,
              fontWeight: 300,
            },
            callback: function (value: number) {
              const hiddenValues = [7000, 8000];
              if (hiddenValues.includes(value)) {
                return "";
              }
              return value.toLocaleString();
            },
            stepSize: 1000,
          },
          min: 1000,
          max: 8000,
        },
      },
      backgroundColor: "rgba(0, 0, 0, 0)",
    });
  }, [resolvedTheme]);

  return (
    <StatsCard paddingBlock={0} paddingInline={0}>
      <div className={styles["chart-header"]}>
        <h3>spend overview</h3>
        <div>
          {chartHeaderData.map((item) => (
            <span>{item}</span>
          ))}
        </div>
      </div>
      <div>
        <div
          style={{
            padding: "20px 0 37px 23px",
            height: "400px",
            backgroundColor: "transparent",
          }}
        >
          <Line ref={chartRef} data={chartData} options={chartOptions} />
        </div>
      </div>
    </StatsCard>
  );
};

export default MainChart;
