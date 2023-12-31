import DetailsLayout from "@/layouts/DetailsSection";
import HighLowSlider from "./HighLowSlider";

const CompanyDetails = ({
  symbol,
  details,
  industry,
  sector,
  weekHigh,
  weekLow,
  currentPrice,
}) => {
  // industry = "IT Services";
  // sector = "Software";
  // details =
  //   "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924. IBM is incorporated in New York. IBM produces and sells computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most annual U.S. patents generated by a business (as of 2020) for 28 consecutive years. Inventions by IBM include the automated teller machine (ATM), the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.";

  return (
    // <DetailsLayout>
    <div className="h-fit border dark:border-zinc-800 rounded-md my-10 p-6 flex flex-col gap-6">
      <h1 className="text-base font-semibold">About {symbol}</h1>
      <p className="text-xs font-light lg:font-normal lg:text-sm">{details}</p>

      {/* badge  */}
      <div className="flex gap-x-1 lg:gap-x-4">
        <div className="flex lg:gap-1 text-[8px] lg:text-sm font-semibold text-gGreen bg-[#eaf8f5] dark:bg-[#10362d] rounded-full px-4 py-2">
          <p>Industry:</p>
          <p className="font-medium">{industry}</p>
        </div>

        <div className="flex lg:gap-1 text-[8px] lg:text-sm font-semibold text-gGreen bg-[#eaf8f5] dark:bg-[#10362d] rounded-full px-4 py-2">
          <p>Sector:</p>
          <p className="font-medium">{sector}</p>
        </div>
      </div>

      {/* slider  */}
      <HighLowSlider high={weekHigh} low={weekLow} current={currentPrice} />
    </div>
    // {/* </DetailsLayout> */}
  );
};

export default CompanyDetails;
