"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import sun from '../images/sun.png'
import moon from '../images/moon.png'
import Image from "next/image";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      className={`rounded-md hover:scale-110 active:scale-100 duration-150 flex items-center`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <Image
        src={moon}
        width={25}
        height={25}
        alt="Data Analyst Illustration"
      />
      ) : (
        <Image
        src={sun}
        width={25}
        height={25}
        alt="Data Analyst Illustration"
      />
      )}
    </button>
  );
};