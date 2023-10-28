export const formatStockData = (stockData) => {
  const reqForm = [];
  if (stockData["Weekly Time Series"]) {
    Object.entries(stockData["Weekly Time Series"]).map((time, value) => {
      reqForm.push({
        x: time,
        y: [
          value["1. open"],
          value["2. high"],
          value["3. low"],
          value["4. close"],
        ],
      });
    });
  }
  return reqForm;
};