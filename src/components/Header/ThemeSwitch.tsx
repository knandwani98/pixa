"use client";

import { cn } from "@/utils";
import { useTheme } from "next-themes";
import React from "react";

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
      className={cn(
        "w-4 h-4 border-2 rounded-md",
        isDark
          ? "border-white hover:bg-white"
          : "border-slate-900 hover:bg-slate-900",
        className
      )}
      onClick={() => {
        setTheme(flipTheme(theme!));
      }}
    ></button>
  );
};
