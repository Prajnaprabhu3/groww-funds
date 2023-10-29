import Searchbar from "../search/Searchbar";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import Logo from "../ui/logo";

const Header = () => {
  return (
    <div className="-z-50 py-2.5 lg:py-4 border-b dark:border-zinc-800">
      <div className="flex justify-between items-center w-full lg:max-w-6xl mx-auto px-2 lg:px-20">
        <Logo />
        <Searchbar />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
