export const vars = {
  brand: "pixa",
  UNSPLASH_ACCESS_KEY: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  UNSPLASH_SECRET_KEY: process.env.NEXT_PUBLIC_UNSPLASH_SECRET_KEY,
  MY_GITHUB: process.env.MY_GITHUB,
};

export const getApiUrl = (query: string, page: number) => {
  return `https://api.unsplash.com/search/photos?page=${page}&query=${query}`;
};
