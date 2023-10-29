import DetailsLayout from "@/layouts/DetailsSection";
import React from "react";

const CompanyFundamentals = ({
  marketCap,
  peRatio,
  beta,
  dividendYield,
  profitMargin,
  exchange,
  bookValue,
  eps,
  MV50,
  MV200,
}) => {
  // marketCap = 2.77;
  // peRatio = 1.4;
  // beta = 13.43;
  // dividendYield = 2232;
  // profitMargin = 1233;
  // exchange = 1232;
  // bookValue = 12;
  // eps = 3;
  // MV50 = 12232;
  // MV200 = 12323;

  const fundamentals = [
    {
      label: "Market Cap",
      value: marketCap,
    },
    {
      label: "PE Ratio",
      value: peRatio,
    },
    {
      label: "Beta",
      value: beta,
    },
    {
      label: "Dividend Yield",
      value: dividendYield,
    },
    {
      label: "Profit Margin",
      value: profitMargin,
    },
    {
      label: "Exchange",
      value: exchange,
    },
    {
      label: "Book Value",
      value: bookValue,
    },
    {
      label: "EPS",
      value: eps,
    },
    {
      label: "50 Days MV",
      value: MV50,
    },
    {
      label: "200 Days MV",
      value: MV200,
    },
  ];

  return (
    <DetailsLayout className="sticky top-6 w-full md:w-1/4 lg:ml-6 p-3">
      <h1 className="text-md lg:text-sm font-semibold">Company Fundamentals</h1>

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 my-4">
        {fundamentals.map((item) => (
          <div className="flex items-center text-sm gap-x-1.5" key={item.label}>
            <p className="font-semibold">{item.label} : </p>{" "}
            <span className="text-gGreen"> {item.value}</span>
          </div>
        ))}
      </div>
    </DetailsLayout>
  );
};

export default CompanyFundamentals;
