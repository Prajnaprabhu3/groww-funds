"use client";

import { useState } from "react";
import { getSearchedData } from "@/actions/getSearchedData";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [symbol, setSymbol] = useState(" ");
  const [data, setData] = useState([]);
  const [keyOnSearch, setKeyOnSearch] = useState(false);
  const pathname = usePathname();
  const lastItem = pathname.substring(pathname.lastIndexOf("/"));
  function handleOnKeyUp() {
    // try {
    //   getSearchedData(query).then((data) => {
    //     const lowerQ = query.toLowerCase();
    //     const reqArray = data.filter(
    //       (item) => lowerQ === item["1. symbol"].toLowerCase()
    //     );
    //     setSymbol(reqArray[0]["1. symbol"]);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
    try {
      setKeyOnSearch(true);
      getSearchedData(query).then((data) => {
        console.log(data);
        setData(data);
      });
    } catch (error) {
      console.log(error);
    }

    // setData(searchD);
    // setKeyOnSearch(false);
  }

  console.log(data);

  // if (data?.length == 0) return <p>Empty</p>;

  return (
    <div className="flex flex-col z-50">
      <div className="relative lg:w-96 flex items-center bg-gray-100 dark:bg-zinc-800 rounded-md px-4">
        <BiSearch className="text-zinc-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleOnKeyUp}
          type="text"
          placeholder="Search stocks & etfs"
          className="w-full text-sm px-4 py-1  lg:py-2 outline-none rounded-md bg-gray-100 dark:bg-zinc-800"
        />
      </div>

      {/* {data?.length > 0 ? (
        data.map((item, id) => <p key={id}>{item["1. symbol"]}</p>)
      ) : (
        <p>No results found</p>
      )} */}

      <div className="absolute top-12 w-60 lg:w-96 px-4 bg-gray-100 dark:bg-zinc-800 dark:border-zinc-800 rounded-md z-50">
        {data?.length > 0 &&
          keyOnSearch &&
          data.map((item, id) => (
            <Link
              href={
                lastItem === "company"
                  ? `/${item["1. symbol"]}`
                  : `/company/${item["1. symbol"]}`
              }
              // onClick={handleClick(item)}
              key={id}
              className="dark:border-zinc-800 py-1 m-1 px-4 cursor-pointer"
            >
              <p>{item["1. symbol"]}</p>
              {console.log(item["1. symbol"])}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Searchbar;
