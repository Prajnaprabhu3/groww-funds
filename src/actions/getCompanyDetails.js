import { companies } from "@/data/companies";
import { details } from "@/data/details";

export const getCompanyDetails = async (symbol) => {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.API_KEY}`
  );

  if (!res.ok) {
    throw new Error("failed to fetch users");
  }

  const data = await res.json();
  // const data = companies;

  return data;
};

export const getSpecificCompany = async (ticker) => {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.API_KEY}`
  );

  // let data = companies;

  if (!res.ok) {
    throw new Error("failed to fetch users");
  }

  const data = await res.json();
  const reqDetails = [...data.top_gainers, ...data.top_losers];

  data = reqDetails.filter((company) => company.ticker === ticker)[0];

  return data;
};
