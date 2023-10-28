// import { companies } from "@/data/companies";

export const getGainerLoser = async () => {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.API_KEY}`
  );
  if (!res.ok) {
    throw new Error("failed to fetch users");
  }

  const data = await res.json();

  // const data = companies;
  return data;
};
