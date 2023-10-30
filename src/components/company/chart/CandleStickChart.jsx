"use client";
import { useState, useEffect, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { candleStickOptions } from "@/constants/candlestick";
import { getStockChartData } from "@/actions/getStockChartData";
import { formatStockData } from "@/lib/formatStockChartdata";
import { useRouter } from "next/navigation";

const CandleStickChart = ({ seriesD }) => {
  const [stockData, setStockData] = useState({});

  // useEffect(() => {
  //   getStockChartData(ticker).then((data) => setStockData(data));
  // }, []);

  // console.log(stockData);

  // const seriesData = useMemo(() => formatStockData(stockData), [stockData]);

  // console.log(seriesData);

  // const handleChange = () => {
  //   router.refresh();
  // };

  return (
    // <ReactApexChart
    //   // series={[{ data: seriesData }]}
    //   series={seriesData2}
    //   options={candleStickOptions}
    //   type={type}
    //   onChange={handleChange}
    // />

    // <ReactApexChart
    //   series={[
    //     {
    //       data: dataC,
    //     },
    //   ]}
    //   options={candleStickOptions}
    //   type="candlestick"
    // />

    <ReactApexChart
      options={candleStickOptions}
      series={seriesD}
      type="candlestick"
    />
  );
};

export default CandleStickChart;
