"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { companies } from "@/data/companies";
import Section from "@/layouts/Section";
import CompanyDetails from "@/components/company/CompanyDetails";
import CompanyFundamentals from "@/components/company/CompanyFundamentals";
import CompanyHeader from "@/components/company/CompanyHeader";
import CompanyChart from "@/components/company/CompanyChart";
import SkeletonCompany from "@/components/ui/skeleton-loader/SkeletonCompany";

const Company = () => {
  const [fundamentalData, setFundamentalData] = useState([]);
  const [tickerData, setTickerData] = useState({});
  const pathname = usePathname();
  const lastItem = pathname.substring(pathname.lastIndexOf("/") + 1);

  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${lastItem}&apikey=${process.env.API_KEY}`
        );
        if (!res.ok) {
          throw new Error("failed to fetch users");
        }
        const data = await res.json();
        setFundamentalData(data);
      })();

      // get company specific data
      (async () => {
        const res = await fetch(
          `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.API_KEY}`
        );
        if (!res.ok) {
          throw new Error("failed to fetch users");
        }
        const data = await res.json();
        const reqDetails = [...data.top_gainers, ...data.top_losers];
        setTickerData(reqDetails.filter((item) => item.ticker === lastItem)[0]);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [lastItem]);

  // console.log(tickerData);
  // console.log(fundamentalData);

  // console.log(fundamentalData.length);

  if (fundamentalData.length < 1 || tickerData.length < 1) {
    return <SkeletonCompany />;
  }
  return (
    // <Section className="flex">
    <div className={`mx-40 px-10 2xl:px-60 my-14 flex`}>
      <div className="w-3/4">
        <CompanyHeader
          symbol={fundamentalData.Symbol}
          name={fundamentalData.Name}
          price={tickerData.price}
          percentage={tickerData.change_percentage}
          type={parseInt(tickerData.change_amount) > 0 ? "gain" : "loss"}
        />

        <CompanyChart ticker={lastItem} />

        <CompanyDetails
          symbol={fundamentalData.Symbol}
          details={fundamentalData.Description}
          industry={fundamentalData.Industry}
          sector={fundamentalData.Sector}
        />
      </div>

      <CompanyFundamentals />
    </div>
    // {/* </Section> */}
  );
};

export default Company;
