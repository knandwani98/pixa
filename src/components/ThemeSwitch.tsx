"use client";

import * as React from "react";
import { useTheme } from "next-themes";
//
import { Button } from "@/components/ui/button";
import { Zap, ZapOff } from "lucide-react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const flipTheme = (theme: string) => {
    return theme === "dark" ? "light" : "dark";
  };

  return (
    <Button
      onClick={() => setTheme(flipTheme(theme!))}
      variant="outline"
      size="icon"
      className="aspect-square"
    >
      <ZapOff className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Zap className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
