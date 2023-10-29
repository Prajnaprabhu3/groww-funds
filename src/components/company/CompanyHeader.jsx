import DetailsLayout from "@/layouts/DetailsSection";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const CompanyHeader = ({ symbol, name, price, percentage, type }) => {
  return (
    <div className="flex justify-between items-center px-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-medium">{name}</h2>
        <div className="flex items-center text-sm">
          <p>{symbol},</p>
          <p className="">Common Stock</p>
        </div>
        <p className="text-sm">NSQ</p>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-medium">${price}</h2>
        <div className="flex items-center gap-x-2 text-s text-gGreen">
          <p>{percentage}</p>
          {type == "gain" ? (
            <BiSolidUpArrow className="text-gGreen text-xs" />
          ) : (
            <BiSolidDownArrow className="text-red-400 text-xs" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
