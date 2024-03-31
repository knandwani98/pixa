import { OrderBy, PhotoData } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DEFAULT_SORT, SORT_OPTIONS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("a".charCodeAt(0) + i)
);

export const findTotal = (count: number) => {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count;
};

export const validateOrder = (searchOrder: string) => {
  if (searchOrder && SORT_OPTIONS.includes(searchOrder)) {
    return searchOrder as OrderBy;
  }

  return DEFAULT_SORT;
};
