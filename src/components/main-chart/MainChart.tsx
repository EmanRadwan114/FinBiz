import React from "react";
import StatsCard from "../ui/stats-card/StatsCard";

interface IProps {}

const MainChart: React.FC<IProps> = ({}) => {
  return (
    <StatsCard paddingBlock={20} paddingInline={25}>
      MainChart
    </StatsCard>
  );
};

export default MainChart;
