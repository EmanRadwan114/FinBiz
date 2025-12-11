import { useState, useEffect, useRef } from "react";
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
} from "chart.js";
import StatsCard from "../ui/stats-card/StatsCard";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

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

// Map the original labels to the keys in your JSON (dashboard.chart_labels)
const labelKeys = [
  "0",
  "am12",
  "am1",
  "am2",
  "am3",
  "am4",
  "am5",
  "am6",
  "am7",
  "am8",
  "am9",
  "am10",
  "am11",
  "12:00PM", // Assuming 12:00PM is not an AM key, using the literal string '12:00PM' for simplicity if no key exists.
];

const dataPoints = [
  7000, 4800, 5000, 6800, 7500, 7000, 5200, 3200, 3600, 3800, 6500, 7500, 7400,
  6500,
];

const getChartColors = (theme) => {
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
      tickColor: "#333333",
      gridColor: "#9b9ca1",
      datasetBorder: "#4DC5AE",
      pointBg: "#FFFFFF",
      gradientStart: "#4DC5AE2B",
      gradientEnd: "#3AA08700",
    };
  }
};

// Keys from dashboard.time_filters
const chartHeaderKeys = ["daily", "weekly", "monthly", "yearly"];

const MainChart = () => {
  const chartRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();

  const [chartData, setChartData] = useState({
    labels: labelKeys,
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  // Use a function to safely translate the time labels (using '0' and '12:00PM' as fallback keys if no translation is found)
  const translatedLabels = labelKeys.map((key) => {
    if (key === "0" || key === "12:00PM") {
      return key; // Return as is
    }
    return t(`dashboard.chart_labels.${key}`);
  });

  const translatedHeaderData = chartHeaderKeys.map((key) =>
    t(`dashboard.time_filters.${key}`)
  );

  useEffect(() => {
    const colors = getChartColors(resolvedTheme);
    const chart = chartRef.current;

    if (!chart) return;

    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, colors.gradientStart);
    gradient.addColorStop(1, colors.gradientEnd);

    setChartData({
      labels: translatedLabels,
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
            color: colors.gridColor,
          },
          border: {
            dash: [2, 2],
          },
          ticks: {
            color: colors.tickColor,
            callback: function (value, index, values) {
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
            callback: function (value) {
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
        {/* Key: dashboard.title */}
        <h3>{t("dashboard.title")}</h3>
        <div>
          {translatedHeaderData.map((item) => (
            <span key={item}>{item}</span>
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
