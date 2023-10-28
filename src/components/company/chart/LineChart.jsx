import React from "react";
import ReactApexChart from "react-apexcharts";
import { candleStickOptions } from "@/constants/candlestick";

const LineChart = ({ stockData }) => {
  return (
    <ReactApexChart
      series={[{ data: stockData }]}
      options={candleStickOptions}
      type="candlestick"
    />
  );
};

export default LineChart;
