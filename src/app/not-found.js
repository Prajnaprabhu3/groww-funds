import Section from "@/layouts/Section";
import Link from "next/link";

const NotFound = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-3 lg:gap-4 h-[600px] lg:h-96">
      <h1 className="text-6xl lg:text-8xl font-semibold text-zinc-800 dark:text-gray-200">
        404
      </h1>
      <p className="text-xl font-medium">Not found</p>
      <p className="test-xs lg:text-base">
        Oops! The page you are looking for is cannot found
      </p>
      <Link href="/" className="text-gGreen font-semibold text-lg">
        Home
      </Link>
    </Section>
  );
};

export default NotFound;
