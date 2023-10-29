export const HighLowSlider = ({ high, low, current }) => {
  const prices = [
    {
      label: "52 Week High",
      value: high,
    },
    {
      label: "Current Price",
      value: current,
    },
    {
      label: "52 Week Low",
      value: low,
    },
  ];

  return (
    <div className="flex gap-x-3 lg:gap-x-10 justify-center my-6">
      {prices.map((item) => (
        <div
          key={item.label}
          className="w-[150px] lg:w-[200px] items-center border p-2 lg:p-4 dark:border-zinc-800 rounded-md"
        >
          <p className="text-xs lg:text-lg font-semibold text-gGreen pb-2">
            {item.label}
          </p>
          <p className="text-xs lg:text-sm font-medium">${item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default HighLowSlider;
