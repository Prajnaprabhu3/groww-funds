export const getStockChartData = async (symbol) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${process.env.API_KEY}`
  );
  const data = await response.json();
  return data;
};
