"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LineChart from "./chart/LineChart";
import { AiOutlineStock } from "react-icons/ai";
import { RiStockLine } from "react-icons/ri";

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

  function changeChartType() {
    setChartType(chartType === "candlestick" ? "line" : "candlestick");
    router.reload();
  }

  return (
    <div className="h-fit border dark:border-zinc-800 rounded-md my-10 p-6 flex flex-col  gap-6">
      <LineChart ticker={ticker} type={chartType} />

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
          {chartType === "candlestick" ? <RiStockLine /> : <AiOutlineStock />}
        </button>
      </div>
    </div>
  );
};

export default CompanyChart;
