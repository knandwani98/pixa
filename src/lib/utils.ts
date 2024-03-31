import { OrderBy, OrientationBy, PhotoData } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  DEFAULT_ORIENTATION,
  DEFAULT_SORT,
  ORIENTATION_OPTIONS,
  SORT_OPTIONS,
} from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const validateOrientation = (searchOrientation: string) => {
  if (searchOrientation === "all") {
    return undefined;
  }

  if (searchOrientation && ORIENTATION_OPTIONS.includes(searchOrientation)) {
    return searchOrientation as OrientationBy;
  }

  return undefined;
};
