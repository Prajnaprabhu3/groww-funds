import DetailsLayout from "@/layouts/DetailsSection";

const CompanyDetails = ({ symbol, details, industry, sector }) => {
  return (
    // <DetailsLayout>
    <div className="h-fit border dark:border-zinc-800 rounded-md my-10 p-6 flex flex-col gap-6">
      <h1 className="text-base font-semibold">About {symbol}</h1>
      <p className="text-sm">{details}</p>

      {/* badge  */}
      <div className="flex gap-x-4">
        <div className="flex gap-1 text-sm font-semibold text-gGreen bg-[#eaf8f5] dark:bg-[#10362d] rounded-full px-4 py-2">
          <p>Industry : </p>
          <p className="font-medium">{industry}</p>
        </div>

        <div className="flex gap-1 text-sm font-semibold text-gGreen bg-[#eaf8f5] dark:bg-[#10362d] rounded-full px-4 py-2">
          <p>Sector : </p>
          <p className="font-medium">{sector}</p>
        </div>
      </div>

      {/* slider  */}
    </div>
    // {/* </DetailsLayout> */}
  );
};

export default CompanyDetails;
