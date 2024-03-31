"use client";

import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState, useTransition } from "react";

export const Input = ({ searchQuery }: { searchQuery: string }) => {
  const router = useRouter();

  const [isSearching, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState<string>(searchQuery || "");

  const search = () => {
    startTransition(() => {
      router.push(`?query=${query.toLowerCase()}`);
    });
  };

  return (
    <div className="relative flex items-center justify-between w-full">
      <button
        onClick={search}
        className="absolute right-0 top-0 bottom-0 p-4 flex-center rounded-md rounded-l-none"
      >
        {isSearching ? (
          <Loader2 className="h-6 w-6 animate-spin dark:text-white" />
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
  );
};
