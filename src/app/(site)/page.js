"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "@/layouts/Section";
import TopGainerLoser from "@/components/explore/TopGainerLoser";
import { getGainerLoser } from "@/actions/getGainerLoser";
import SkeletonExplore from "@/components/ui/skeleton-loader/SkeletonExplore";

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

const ExploreStocks = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [reqData, setReqData] = useState([]);
  // const [error, setError] = useState(false);

  useEffect(() => {
    try {
      getGainerLoser().then((data) => {
        setData(data);
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // console.log(data);

  return (
    <Section>
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

      {data.length < 1 ? (
        <SkeletonExplore />
      ) : (
        <TopGainerLoser
          choice={activeTab == 1 ? "gainer" : "loser"}
          data={data}
        />
      )}
    </Section>
  );
};

export default ExploreStocks;
