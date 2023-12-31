"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Section from "@/layouts/Section";
import CompanyDetails from "@/components/company/CompanyDetails";
import CompanyFundamentals from "@/components/company/CompanyFundamentals";
import CompanyHeader from "@/components/company/CompanyHeader";
import CompanyChart from "@/components/company/CompanyChart";
import SkeletonCompany from "@/components/ui/skeleton-loader/SkeletonCompany";
import Error from "@/components/ui/error";

const Company = () => {
  const [fundamentalData, setFundamentalData] = useState([]);
  const [tickerData, setTickerData] = useState({});
  const [error, setError] = useState(false);
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
      setError(true);
      console.log(error);
    }

    // if (!fundamentalData.Symbol || !tickerData.ticker) setError(true);
  }, [lastItem]);

  if (fundamentalData.length < 1 || tickerData.length < 1) {
    return <SkeletonCompany />;
  }

  console.log(fundamentalData.Symbol);
  console.log(tickerData.ticker);

  if (error) {
    return <Error />;
  }
  return (
    // <Section className="flex flex-col items-center lg:flex-row">
    <div
      className={`flex flex-col items-center lg:flex-row lg:items-start mx-2 lg:mx-40 lg:px-10 2xl:px-60 py-8 lg:my-14`}
    >
      <div className="w-full lg:w-3/4">
        <CompanyHeader
          symbol={fundamentalData.Symbol}
          name={fundamentalData.Name}
          assetType={fundamentalData.AssetType}
          exchange={fundamentalData.Exchange}
          price={tickerData.price}
          percentage={tickerData.change_percentage}
          type={
            tickerData.change_amount && tickerData.change_amount.includes("-")
              ? "loss"
              : "gain"
          }
        />

        <CompanyChart ticker={lastItem} />
        <CompanyDetails
          symbol={fundamentalData.Symbol}
          details={fundamentalData.Description}
          industry={fundamentalData.Industry}
          sector={fundamentalData.Sector}
          currentPrice={tickerData.price}
          weekHigh={fundamentalData["52WeekHigh"]}
          weekLow={fundamentalData["52WeekLow"]}
        />
      </div>

      <CompanyFundamentals
        marketCap={fundamentalData.MarketCapitalization}
        peRatio={fundamentalData.PERatio}
        beta={fundamentalData.Beta}
        dividendYied={fundamentalData.DividendYield}
        profitMargin={fundamentalData.ProfitMargin}
        exchange={fundamentalData.Exchange}
        bookValue={fundamentalData.BookValue}
        eps={fundamentalData.EPS}
        MV50={fundamentalData["50DayMovingAverage"]}
        MV200={fundamentalData["200DayMovingAverage"]}
      />
    </div>
    // {/* </Section> */}
  );
};

export default Company;
