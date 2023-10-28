const SkeletonExplore = () => {
  return (
    <div className="grid grid-cols-3 gap-10 py-10">
      {Array(20)
        .fill(0)
        .map((el, index) => (
          <div key={index}>
            <div
              className="flex flex-row bg-white shadow-md items-center gap-2 h-20 dark:bg-zinc-900 p-4 border dark:border-zinc-800 rounded-lg
               cursor-pointer delay-75 hover:-translate-y-1 transition-transform
              duration-300 ease-out"
            >
              <div className="rounded-full bg-gray-300 w-[4.5rem] h-[4.5rem] animate-pulse"></div>
              <div className="flex flex-col gap-2 w-9/12">
                <span className="w-11/12 bg-gray-300 h-2 rounded-full animate-pulse"></span>
                <span className="w-9/12 bg-gray-300 h-2 rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>
          //     <div
          //       key={index}
          //       className="h-20 dark:bg-zinc-900 p-4 border dark:border-zinc-800 rounded-lg
          // cursor-pointer delay-75 hover:-translate-y-1 transition-transform
          // duration-300 ease-out "
          //     >
          //       <h2 className="font-medium pb-2 animate-pulse"></h2>
          //       <div className="flex gap-x-4 animate-pulse">
          //         <p className="text-md font-semibold animate-pulse"> </p>
          //         <div className="flex items-center gap-x-2 text-sm animate-pulse">
          //           <p className="animate-pulse"></p>
          //         </div>
          //       </div>
          //     </div>
        ))}
    </div>
  );
};

export default SkeletonExplore;
