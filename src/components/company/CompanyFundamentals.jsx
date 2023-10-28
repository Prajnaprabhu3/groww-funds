import DetailsLayout from "@/layouts/DetailsSection";
import React from "react";

const CompanyFundamentals = () => {
  return (
    <DetailsLayout className=" sticky top-6 w-1/4 ml-6 p-3">
      <h1 className="text-sm font-semibold">Company Fundamentals</h1>

      <div className="flex flex-col gap-4 my-4">
        <div className="text-sm">
          Market Cap: <span className="text-gGreen">$2.77T</span>
        </div>
        <div className="text-sm">
          P/E Ratio: <span className="text-gGreen">27.77</span>
        </div>
        <div className="text-sm">
          Beta: <span className="text-gGreen">1.308</span>
        </div>
        <div className="text-sm">
          Dividend Yield: <span className="text-gGreen">0.54%</span>
        </div>
        <div className="text-sm">
          Profit Margin:<span className="text-gGreen">0.247</span>
        </div>
        <div className="text-sm">
          Beta: <span className="text-gGreen">1.308</span>
        </div>
        <div className="text-sm">
          Dividend Yield: <span className="text-gGreen">0.54%</span>
        </div>
        <div className="text-sm">
          Profit Margin:<span className="text-gGreen">0.247</span>
        </div>
      </div>
    </DetailsLayout>
  );
};

export default CompanyFundamentals;
