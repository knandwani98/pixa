"use client";

import React, { useEffect, useState } from "react";
import { Loader } from "../Loader";
import { useInView } from "react-intersection-observer";
import { fetchImages } from "@/app/action";
import { PhotoData } from "@/types";
import { CardGrid } from "../CardGrid";
import { TitleBar } from "../TitleBar";
import { validateOrder, validateOrientation } from "@/lib/utils";
import { NoData } from "../NoData";

interface Props {
  searchQuery: string;
  searchOrder: string;
  searchOrientation: string;
}

export const LoadMore = (props: Props) => {
  const { searchQuery, searchOrder, searchOrientation } = props;

  const { ref, inView } = useInView();
  const [columns, setColumns] = useState<number>(3);
  const [data, setData] = useState<PhotoData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [width, setWidth] = useState(window.innerWidth);

  const [keyword, setKeyword] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [orientation, setOrientation] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width < 768) setColumns(1);
    if (width >= 768 && width < 1024) setColumns(2);
    if (width >= 1024) setColumns(3);
  }, [width]);

  useEffect(() => {
    if (
      searchQuery === keyword &&
      validateOrder(searchOrder) === sortBy &&
      validateOrientation(searchOrientation) === orientation
    ) {
      if (inView) {
        fetchImages({
          page,
          query: searchQuery,
          orderBy: validateOrder(searchOrder),
          orientationBy: validateOrientation(searchOrientation),
        }).then((res) => {
          setData((prev) => [...prev, ...res.data]);
          setPage((prev) => prev + 1);
        });
      }
    } else {
      setData([]);
      fetchImages({
        page: 1,
        query: searchQuery,
        orderBy: validateOrder(searchOrder),
        orientationBy: validateOrientation(searchOrientation),
      }).then((res) => {
        setData(res.data);
        setKeyword(searchQuery);
        setPage(2);
        setTotalPages(res.totalPages);
        setTotal(res.total);
        setSortBy(validateOrder(searchOrder));
        setOrientation(validateOrientation(searchOrientation));
      });
    }
  }, [inView, searchQuery, searchOrder, searchOrientation]);

  if (!totalPages) {
    return (
      <div ref={ref} className="flex items-center justify-center mt-8">
        <NoData />
      </div>
    );
  }

  return (
    <>
      {searchQuery && (
        <TitleBar
          total={total}
          searchQuery={searchQuery}
          searchOrder={searchOrder}
          searchOrientation={searchOrientation}
        />
      )}
      <CardGrid data={data} cols={columns} />
      {page < totalPages && (
        <div ref={ref} className="flex items-center justify-center mt-8">
          <Loader />
        </div>
      )}
    </>
  );
};
