import React from "react";
import { ThemeSwitch } from "../ThemeSwitch";
import { vars } from "@/lib/constants";
import { Input } from "../Input";

export const Header = ({ searchQuery }: { searchQuery?: string }) => {
  return (
    <header className="shadow-xl shadow-slate-200/30 dark:shadow-slate-800/30">
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-4 gap-4 sm:gap-8">
        <div className="flex gap-1 items-center justify-between w-full">
          <a
            className="uppercase text-5xl font-extrabold text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white sm:flex"
            href="/"
          >
            {vars.brand}
          </a>
          <div className="sm:hidden">
            <ThemeSwitch />
          </div>
        </div>

        {/* Input */}
        <Input searchQuery={searchQuery!} />
        <div className="max-sm:hidden">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};
