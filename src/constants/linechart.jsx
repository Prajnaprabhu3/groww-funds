export const lineChartOptions = {
  chart: {
    type: "line",
    height: 350,
  },
  title: {
    text: "Line Chart",
    align: "left",
  },
  stroke: {
    curve: "smooth",
    // colors: ["#ffff"],
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};
