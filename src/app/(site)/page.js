"use client";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Section from "@/layouts/Section";
import TopGainerLoser from "@/components/explore/TopGainerLoser";
import getGainersLosers from "@/actions/getGainerLoser";

const stockTypes = [
  {
    id: 1,
    label: "Top Gainer",
  },
  {
    id: 2,
    label: "Top Loser",
  },
];

useEffect;

const ExploreStocks = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [reqData, setReqData] = useState([]);
  const [error, setError] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      getGainersLosers().then((data) => {
        setData(data);
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // console.log(data);
  // console.log(process.env.NEXT_PUBLIC_API_KEY);

  return (
    <Section>
      {/* <div className="mx-40 px-10 2xl:px-60 my-14"> */}
      {/* navigation tabs */}
      <div className="flex space-x-1.5 w-fit rounded-lg py-1 px-2 bg-gray-100 dark:bg-inherit dark:border border-zinc-800 dark:drop-shadow-md backdrop-filter backdrop-blur-xl  dark:bg-opacity-30">
        {stockTypes.map((tab) => (
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
                className="absolute inset-0 -z-20 bg-white dark:bg-[#232323] py-1.5 "
                style={{ borderRadius: 8 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      <TopGainerLoser
        choice={activeTab == 1 ? "gainer" : "loser"}
        data={data}
      />
      {/* </div> */}
    </Section>
  );
};

export default ExploreStocks;
