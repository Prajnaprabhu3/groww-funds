import Section from "@/layouts/Section";

const SkeletonCompany = () => {
  return (
    <Section className="flex flex-col gap-4">
      {Array(1)
        .fill(0)
        .map((el, index) => (
          <div key={index} className="flex flex-col gap-y-10">
            <div className="flex flex-row bg-white shadow-sm items-center gap-2 h-20 dark:bg-zinc-900 p-4 rounded-lg">
              <div className="rounded-full bg-gray-300 w-[4.5rem] h-[4.5rem] py-2 mr-8 animate-pulse"></div>
              <div className="flex flex-col gap-2 w-9/12">
                <span className="w-11/12 bg-gray-300 h-2 rounded-full animate-pulse"></span>
                <span className="w-9/12 bg-gray-300 h-2 rounded-full animate-pulse"></span>
              </div>
            </div>

            <div className="flex flex-col bg-white shadow-md items-center gap-2 h-96 dark:bg-zinc-900 p-4 border dark:border-zinc-800 rounded-lg">
              {Array(5)
                .fill(0)
                .map((ele, index) => (
                  <div
                    className="flex flex-col items-center gap-10 w-full"
                    key={index}
                  >
                    <span className="w-9/12 bg-gray-300 h-2 rounded-full animate-pulse"></span>
                    <span className="w-11/12 bg-gray-300 h-2 rounded-full animate-pulse"></span>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </Section>
  );
};

export default SkeletonCompany;
