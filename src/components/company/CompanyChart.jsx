"use client";
import { getStockChartData } from "@/actions/getStockChartData";
import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import LineChart from "./chart/LineChart";
import { formatStockData } from "@/lib/formatStockChartdata";

const intervals = [
  {
    id: 1,
    interval: "1 min",
  },
  {
    id: 2,
    interval: "5 min",
  },
  {
    id: 3,
    interval: "15 min",
  },
  {
    id: 4,
    interval: "30 min",
  },
  {
    id: 5,
    interval: "60 min",
  },
];

const CompanyChart = ({ ticker }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    getStockChartData(ticker).then((data) =>
      // console.log(data))
      setStockData(data)
    );
  }, [ticker]);

  // console.log(stockData);
  const seriesData = useMemo(() => formatStockData(stockData), [stockData]);
  console.log(seriesData);

  return (
    <div className="h-fit border dark:border-zinc-800 rounded-md my-10 p-6 flex flex-col  gap-6">
      Chart here
      <LineChart stockData={seriesData} />
      {/* interval options  */}
      <div className="flex mx-auto space-x-1.5 w-fit rounded-lg py-1 px-2 dark:drop-shadow-md backdrop-filter backdrop-blur-xl  dark:bg-opacity-30">
        {intervals.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id
                ? "text-black dark:text-zinc-200"
                : "text-zinc-400 dark:text-zinc-600"
            } relative rounded px-4 py-1 text-sm font-medium transition focus-visible:outline-2`}
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
    </div>
  );
};

export default CompanyChart;
