import { OrderBy, OrientationBy, PhotoData } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  DEFAULT_SORT,
  ORIENTATION_OPTIONS,
  SORT_OPTIONS,
  DOWNLOAD_OPTIONS,
} from "./constants";

import { saveAs } from "file-saver";

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

export const toCapitalize = (text: string) => {
  return text[0].toUpperCase() + text.substring(1);
};

export const downloadMedia = (image: PhotoData, size: string) => {
  let imageLink: string = "";

  switch (size) {
    case "small":
      imageLink = image?.urls?.small;
      break;
    case "medium":
      imageLink = image?.urls?.regular;
      break;
    case "large":
      imageLink = image?.urls?.full;
      break;
    case "original size":
      imageLink = image?.urls?.raw;
      break;
  }
  console.log(imageLink);

  return saveAs(
    imageLink,
    `${image?.alt_description?.replaceAll(" ", "-")}-${size}.jpeg`
  );
};
