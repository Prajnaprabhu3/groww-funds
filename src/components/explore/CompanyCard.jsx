import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Link from "next/link";

const CompanyCard = ({ ticker, price, percentage, type }) => {
  return (
    <Link
      href={`/company/${ticker}`}
      className="dark:bg-zinc-900 p-4 border dark:border-zinc-800 rounded-lg
      cursor-pointer delay-75 hover:-translate-y-1 transition-transform
      duration-300 ease-out "
    >
      <h2 className="font-medium pb-2">{ticker}</h2>
      <div className="flex gap-x-4">
        <p className="text-md font-semibold">${price}</p>
        <div className="flex items-center gap-x-2 text-sm">
          {type == "gain" ? (
            <BiSolidUpArrow className="text-gGreen" />
          ) : (
            <BiSolidDownArrow className="text-red-400" />
          )}
          <p className={`${type == "gain" ? "text-gGreen" : "text-red-400"}`}>
            {parseFloat(percentage).toFixed(2)}%
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
