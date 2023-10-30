"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "@/layouts/Section";
import TopGainerLoser from "@/components/explore/TopGainerLoser";
import { getGainerLoser } from "@/actions/getGainerLoser";
import SkeletonExplore from "@/components/ui/skeleton-loader/SkeletonExplore";
import Error from "@/components/ui/error";
import { companies } from "@/data/companies";

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
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      getGainerLoser().then((data) => {
        setData(data);
        // setData(companies);
        console.log(data);
      });
    } catch (error) {
      setError(true);
    }

    // if (
    //   data?.top_gainers?.length === undefined ||
    //   data?.top_losers?.length === undefined
    // ) {
    //   setError(true);
    // }
    // if (!data) {
    //   setError(true);
    // }
  }, []);

  console.log(data);

  if (error) {
    return <Error />;
  }

  return (
    <Section className="flex flex-col">
      {/* navigation tabs */}
      <div className="flex space-x-1.5 w-fit rounded-lg py-1 mx-10 lg:mx-0 px-2 bg-gray-100 dark:bg-inherit dark:border border-zinc-800 dark:drop-shadow-md backdrop-filter backdrop-blur-xl  dark:bg-opacity-30">
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
        <div>
          {error ? (
            <Error />
          ) : (
            <TopGainerLoser
              choice={activeTab == 1 ? "gainer" : "loser"}
              data={data}
            />

            // {/* only 20 elements api response  */}
            // {/* <button className="flex mx-auto bg-gGreen px-4 py-1 rounded-md text-white">
            //   Load more
            // </button> */}
          )}
        </div>
      )}
    </Section>
  );
};

export default ExploreStocks;
