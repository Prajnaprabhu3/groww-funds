// "use client";
import { useState, useEffect, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
// import { getStockChartData } from "@/actions/getStockChartData";
// import { formatStockData } from "@/lib/formatStockChartdata";
// import { seriesData2 } from "@/data/chart";
import { lineChartOptions } from "@/constants/linechart";

const LineChart = ({ seriesD }) => {
  //   const [stockData, setStockData] = useState({});

  //   useEffect(() => {
  //     getStockChartData(ticker).then((data) => setStockData(data));
  //   }, []);

  //   const seriesData = useMemo(() => formatStockData(stockData), [stockData]);

  return (
    // <ReactApexChart
    //   // series={[{ data: seriesData }]}
    //   series={seriesData2}
    //   options={candleStickOptions}
    //   type={type}
    //   onChange={handleChange}
    // />
    <ReactApexChart
      series={seriesD}
      options={lineChartOptions}
      type="line"
      //   color="#ffff"
    />
  );
};

export default LineChart;
