"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import Section from "@/layouts/Section";
import Tabs, { GainersOrLosers } from "@/components/ui/tabs";

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

const ExploreStocks = ({ options }) => {
  const [activeTab, setActiveTab] = useState(1);
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

      {/* details  */}
      <div className="w-full my-20">
        {stockTypes.map(
          (service, id) =>
            activeTab === service.id && (
              <div key={id} className="flex justify-between gap-x-20">
                {service.label}
              </div>
            )
        )}
      </div>
    </Section>
  );
};

export default ExploreStocks;
