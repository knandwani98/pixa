"use client";

import React, { useRef, useState, useTransition } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { vars } from "@/utils/constants";
import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState<string>("");
  const [isSearching, startTransition] = useTransition();

  const search = () => {
    startTransition(() => {
      router.push(`?query=${query.toLowerCase()}`);
    });
  };

  return (
    <header className="shadow-xl shadow-slate-200/30 dark:shadow-slate-800/30">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex gap-1">
          <ThemeSwitch className={"w-5 h-5"} />
          <a
            className="uppercase text-5xl font-extrabold text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
            href="/"
          >
            {vars.brand}
          </a>
        </div>
        <div className="relative flex items-center justify-between w-[50%]">
          <button
            onClick={search}
            className="absolute right-0 top-0 bottom-0 p-4 flex-center rounded-md rounded-l-none"
          >
            {isSearching ? (
              <Loader2 className="h-6 w-6 animate-spin text-white" />
            ) : (
              <Search className="text-slate-400 transition-all duration-200 ease-in-out hover:scale-110 hover:text-slate-900 dark:hover:text-white" />
            )}
          </button>

          <input
            value={query}
            disabled={isSearching}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search();
              }
              if (e.key === "Escape") {
                inputRef?.current?.blur();
              }
            }}
            ref={inputRef}
            type="text"
            placeholder="Search high-resolution images"
            className="text-sm w-full p-4 pr-20 rounded-md bg-slate-200/40 dark:bg-slate-800/40 outline-none"
          />
        </div>
      </div>
    </header>
  );
};
