"use client";
// import { useState, useEffect, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { candleStickOptions } from "@/constants/candlestick";
// import { getStockChartData } from "@/actions/getStockChartData";
// import { formatStockData } from "@/lib/formatStockChartdata";

const CandleStickChart = ({ seriesD }) => {
  // const [stockData, setStockData] = useState({});

  // useEffect(() => {
  //   getStockChartData(ticker).then((data) => setStockData(data));
  // }, []);

  // console.log(stockData);

  // const seriesData = useMemo(() => formatStockData(stockData), [stockData]);

  // console.log(seriesData);

  // const handleChange = () => {
  //   router.refresh();
  // };

  console.log(seriesD);
  return (
    <ReactApexChart
      series={[{ data: seriesD }]}
      // series={seriesData2}
      options={candleStickOptions}
      type="candlestick"
      // onChange={handleChange}
    />

    // <ReactApexChart
    //   options={candleStickOptions}
    //   series={seriesD}
    //   type="candlestick"
    // />
  );
};

export default CandleStickChart;
