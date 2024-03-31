export const vars = {
  brand: "pixa",
  UNSPLASH_ACCESS_KEY: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  UNSPLASH_SECRET_KEY: process.env.NEXT_PUBLIC_UNSPLASH_SECRET_KEY,
  MY_GITHUB: process.env.MY_GITHUB,
};

export const getApiUrl = (query: string, page: number) => {
  return `https://api.unsplash.com/search/photos?page=${page}&query=${query}`;
};

export const NO_DATA_VECTOR = "/assets/no-data.png";

export const SORT_OPTIONS = ["editorial", "relevant", "latest"];
export const ORIENTATION_OPTIONS = ["all", "squarish", "landscape", "portrait"];

export const DEFAULT_FILTER = {
  sort: false,
  orientation: false,
};
export const DEFAULT_QUERY = "outdoors";
export const DEFAULT_SORT = "relevant";
export const DEFAULT_ORIENTATION = "all";

const alphabet = "abcdefghijklmnopqrstuvwxyz";
export const DEFAULT_SEARCH_KEY =
  alphabet[Math.floor(Math.random() * 26)] || DEFAULT_QUERY;
