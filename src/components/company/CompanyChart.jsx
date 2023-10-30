"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import CandleStickChart from "./chart/CandleStickChart";
import { AiOutlineStock } from "react-icons/ai";
import { RiStockLine } from "react-icons/ri";
import { seriesData2 } from "@/data/chart";
import LineChart from "./chart/LineChart";
import { formatStockData } from "@/lib/formatStockChartdata";
import { getStockChartData } from "@/actions/getStockChartData";

const intervals = [
  {
    id: 1,
    interval: "1 M",
  },
  {
    id: 2,
    interval: "5 M",
  },
  {
    id: 3,
    interval: "15 M",
  },
  {
    id: 4,
    interval: "30 M",
  },
  {
    id: 5,
    interval: "60 M",
  },
];

const CompanyChart = ({ ticker }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [chartType, setChartType] = useState("candlestick");

  const [stockData, setStockData] = useState({});

  useEffect(() => {
    getStockChartData(ticker).then((data) => setStockData(data));
  }, []);

  const seriesData = useMemo(() => formatStockData(stockData), [stockData]);

  function changeChartType() {
    setChartType(chartType === "candlestick" ? "line" : "candlestick");
  }

  return (
    <div className="h-fit border dark:border-zinc-800 rounded-md my-10 p-6 flex flex-col  gap-6">
      {chartType === "candlestick" ? (
        <CandleStickChart seriesD={seriesData2} />
      ) : (
        <LineChart seriesD={seriesData2} />
      )}

      {/* interval options  */}
      <div className="flex items-center justify-center gap-x-4">
        <div className="flex  lg:space-x-1.5 w-fit rounded-lg py-1 px-2 border dark:border-zinc-800 dark:drop-shadow-md backdrop-filter backdrop-blur-xl  dark:bg-opacity-30">
          {intervals.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "text-black dark:text-zinc-200"
                  : "text-zinc-400 dark:text-zinc-600"
              } relative rounded px-2 lg:px-4 py-1 text-xs lg:text-sm font-medium transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-20 bg-gray-100 dark:bg-[#232323] py-1.5 "
                  style={{ borderRadius: 8 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.interval}
            </button>
          ))}
        </div>

        {/* change chart-type  */}
        <button
          className="border dark:border-zinc-800 p-2 rounded-md text-gGreen"
          onClick={changeChartType}
        >
          {chartType === "candlestick" ? <AiOutlineStock /> : <RiStockLine />}
        </button>
      </div>
    </div>
  );
};

export default CompanyChart;
