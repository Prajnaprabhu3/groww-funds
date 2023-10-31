import { searchD } from "@/data/search";

export const getSearchedData = async (symbol) => {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}o&apikey=${process.env.API_KEY}`
  );

  const data = await res.json();
  const reqData = data.bestMatches;
  // const reqData = searchD;

  return reqData;
};
