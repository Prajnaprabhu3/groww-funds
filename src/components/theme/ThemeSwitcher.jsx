"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        type="button"
        className="rounded p-2 hover:bg-gray-200 dark:hover:bg-zinc-800"
      >
        {theme === "dark" ? (
          <BiSun className="text-md lg:text-lg" />
        ) : (
          <BiMoon className="text-md lg:text-lg" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
