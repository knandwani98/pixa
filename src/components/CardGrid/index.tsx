"use client";

import { PhotoData } from "@/types";
import { vars } from "@/utils/constants";
import { ArrowBigDownDash } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { Loader } from "./Loader";

interface Props {
  className: string;
  searchQuery: string;
}

interface SearchProps {
  images: PhotoData[];
  keyword: string;
  page?: number;
  retry?: boolean;
}

export const CardGrid = ({ className, searchQuery }: Props) => {
  const [searchData, setSearchData] = useState<SearchProps>({
    images: [],
    keyword: "",
    page: 1,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [doRetry, setDoRetry] = useState<boolean>(false);

  const api = createApi({
    accessKey: vars.UNSPLASH_ACCESS_KEY!,
  });

  const query = searchQuery || "outdoors";

  useEffect(() => {
    setIsLoading(true);
    setDoRetry(false);
    api.search
      .getPhotos({
        query: query,
        orderBy: "relevant",
        perPage: 30,
        page: searchData.page,
      })
      .then(({ response }) => {
        if (!response) throw new Error();

        const data = response?.results;

        if (response.total === 0) {
          setDoRetry(true);
        }

        if (query === searchData.keyword) {
          // @ts-ignore
          setSearchData((oldState) => ({
            ...oldState,
            images: [...oldState.images, data],
          }));
        } else {
          setSearchData({
            images: data,
            keyword: query,
            page: 1,
            retry: false,
          });
        }
      })
      .catch(() => {
        console.log("something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <section className={className}>
      {isLoading ? (
        <div className="h-full w-full flex-center">
          <Loader />
        </div>
      ) : doRetry ? (
        <div className="h-full w-full flex-center">
          <p>No Match Found</p>
        </div>
      ) : (
        <ul className="columns-1 sm:columns-3 lg:columns-4">
          {searchData.images?.map((image: PhotoData) => {
            return (
              <li
                key={image.id}
                className="mb-5 relative w-full flex-center cursor-pointer group overflow-hidden"
              >
                <Image
                  src={image.urls?.regular || image.urls?.small || ""}
                  alt={image.alt_description || ""}
                  width={image.width / 9}
                  height={image.height / 13}
                  className="w-full rounded-md object-contain"
                  priority
                />
                <button className="flex-center group-hover:bottom-3 w-10 h-10 bg-slate-300/30 border-2 border-white/20 hover:bg-slate-300/50 rounded-md absolute -bottom-20 right-3 transition-all duration-200 ease-in-out group-hover:scale-110">
                  <ArrowBigDownDash className="text-white" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};
