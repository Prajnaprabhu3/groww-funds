"use client";

// import { companies } from "@/data/companies";
import CompanyCard from "./CompanyCard";

const TopGainerLoser = ({ choice, data }) => {
  if (choice == "gainer") {
    return (
      <div className="grid grid-cols-1  md:grid-cols-3 2xl:grid-cols-3  gap-8 2xl:gap-10 py-10">
        {data.top_gainers &&
          data.top_gainers.map((company) => (
            <CompanyCard
              key={company.ticker}
              ticker={company.ticker}
              price={company.price}
              percentage={company.change_percentage}
              type="gain"
            />
          ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-8 py-10">
      {data.top_losers &&
        data.top_losers.map((company) => (
          <CompanyCard
            key={company.ticker}
            ticker={company.ticker}
            price={company.price}
            percentage={company.change_percentage}
            type="loss"
          />
        ))}
    </div>
  );
};

export default TopGainerLoser;
