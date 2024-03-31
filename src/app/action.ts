"use server";

import {
  DEFAULT_QUERY,
  DEFAULT_SEARCH_KEY,
  DEFAULT_SORT,
  vars,
} from "@/lib/constants";
import { OrderBy, OrientationBy } from "@/types";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: vars.UNSPLASH_ACCESS_KEY!,
});

interface Props {
  query?: string;
  page?: number;
  perPage?: number;
  orderBy?: OrderBy;
  orientationBy?: OrientationBy;
}

export const fetchImages = async ({
  query,
  page,
  orderBy,
  perPage,
  orientationBy,
}: Props) => {
  const response = await api.search.getPhotos({
    query: query || DEFAULT_SEARCH_KEY,
    orderBy: orderBy || DEFAULT_SORT,
    orientation: orientationBy,
    perPage: perPage || 18,
    page: page || 1,
  });

  return {
    total: response.response?.total || 0,
    data: response.response?.results || [],
    totalPages: response.response?.total_pages || 0,
  };
};
