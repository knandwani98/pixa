import { alphabet } from "./utils";

export const vars = {
  brand: "pixa",
  UNSPLASH_ACCESS_KEY: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  UNSPLASH_SECRET_KEY: process.env.NEXT_PUBLIC_UNSPLASH_SECRET_KEY,
  MY_GITHUB: process.env.MY_GITHUB,
};

export const getApiUrl = (query: string, page: number) => {
  return `https://api.unsplash.com/search/photos?page=${page}&query=${query}`;
};

export const NO_DATA_VECTOR =
  "https://unsplash-assets.imgix.net/empty-states/photos.png?auto=format&fit=crop&q=60";

export const SORT_OPTIONS = ["editorial", "relevant", "latest"];
export const DEFAULT_FILTER = {
  sort: false,
};

export const DEFAULT_SEARCH_KEY = alphabet[Math.ceil(Math.random() * 26)];
export const DEFAULT_SORT = "relevant";
