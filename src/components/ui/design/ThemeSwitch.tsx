"use client";

import React from "react";
import { useTheme } from "next-themes";

interface Props {
  className?: string;
}

export const ThemeSwitch = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();

  const flipTheme = (theme: string) => {
    return theme === "dark" ? "light" : "dark";
  };

  const isDark = theme === "dark";

  return (
    <button
      className={`w-5 h-5 border-2 rounded-md ${
        isDark
          ? "border-white hover:bg-white"
          : "border-slate-900 hover:bg-slate-900"
      }
      `}
      onClick={() => {
        setTheme(flipTheme(theme!));
      }}
    ></button>
  );
};
