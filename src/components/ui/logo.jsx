import { AiOutlineStock } from "react-icons/ai";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center lg:gap-x-3">
      <AiOutlineStock className="text-md lg:text-2xl text-gGreen" />
      <h2 className="font-semibold text-xs lg:text-xl">
        GrowIt <span className="text-gGreen">.</span>
      </h2>
    </Link>
  );
}

export default Logo;
