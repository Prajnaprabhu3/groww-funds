import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const CompanyCard = () => {
  const type = "gai";
  return (
    <div className="dark:bg-zinc-900 p-4 border dark:border-zinc-800 rounded-lg cursor-pointer delay-75 hover:-translate-y-1 transition-transform duration-300 ease-out ">
      <h2 className="font-medium pb-2">Apple</h2>

      <div className="flex gap-x-4">
        <p className="text-md font-semibold">$ 183</p>
        <div className="flex items-center gap-x-2 text-sm">
          {type == "gain" ? (
            <BiSolidUpArrow className="text-gGreen" />
          ) : (
            <BiSolidDownArrow className="text-red-400" />
          )}
          <p>1.29%</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
