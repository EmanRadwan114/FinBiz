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
import { FaArrowUp } from "react-icons/fa6";

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

const labels = ["", "", "", "", "", "", "", "", "", "", ""];
const dataPoints = [
  1100, 2000, 2100, 1300, 1500, 3000, 2900, 4500, 5500, 5200, 6000,
];

const getChartColors = (theme: string | undefined) => {
  const tealColor = "#4DC5AE";

  if (theme === "dark") {
    return {
      tickColor: "#E0E0E0",
      gridColor: "#4F4F4F",
      datasetBorder: tealColor,
      pointBg: "#FFFFFF",
      gradientStart: `#1b1b1b`,
      gradientEnd: `#1b1b1b`,
      containerBg: "transparent",
    };
  } else {
    return {
      tickColor: "#333333",
      gridColor: "#DDDDDD",
      datasetBorder: tealColor,
      pointBg: "#FFFFFF",
      gradientStart: `#edefef`,
      gradientEnd: `#edefef`,
      containerBg: "transparent",
    };
  }
};

const SingleLineChart = () => {
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

    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, colors.gradientStart);
    gradient.addColorStop(1, colors.gradientEnd);

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
          pointHoverRadius: 7,
          pointRadius: 0,
        },
      ],
    });

    // Options are updated to hide all axes and ticks
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
          display: false, // Hide X-axis completely
          grid: { drawBorder: false },
        },
        y: {
          display: false, // Hide Y-axis completely
          grid: { drawBorder: false },
        },
      },
      backgroundColor: "rgba(0, 0, 0, 0)", // Ensure canvas itself is transparent
    });
  }, [resolvedTheme]);

  const colors = getChartColors(resolvedTheme);

  return (
    <div className={styles["single-chart"]}>
      <StatsCard paddingBlock={0} paddingInline={0}>
        <div className={styles.percentage}>
          <div>
            <FaArrowUp size={12} />
          </div>
          14.12%
        </div>
        <div
          style={{
            backgroundColor: colors.containerBg,
            paddingBlockStart: 64,
            minHeight: "250px",
          }}
        >
          <Line ref={chartRef} data={chartData} options={chartOptions} />
        </div>
      </StatsCard>
    </div>
  );
};

export default SingleLineChart;
