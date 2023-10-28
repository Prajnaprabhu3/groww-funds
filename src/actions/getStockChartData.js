export const getStockChartData = async (symbol) => {
  const res = fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${process.env.API_KEY}`
  );

  const data = (await res).json();
  return data;
};
