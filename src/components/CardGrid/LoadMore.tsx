"use client";

import React, { useEffect, useState } from "react";
import { Loader } from "../ui/design/Loader";
import { useInView } from "react-intersection-observer";
import { fetchImages } from "@/app/action";
import { PhotoData } from "@/types";
import { CardGrid } from ".";
import Image from "next/image";
import { NO_DATA_VECTOR } from "@/lib/constants";
import { TitleBar } from "./TitleBar";
import { validateOrder } from "@/lib/utils";

interface Props {
  searchQuery: string;
  searchOrder: string;
}

export const LoadMore = (props: Props) => {
  const { searchQuery, searchOrder } = props;

  const { ref, inView } = useInView();
  const [columns, setColumns] = useState<number>(3);
  const [data, setData] = useState<PhotoData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [keyword, setKeyword] = useState<string>("");
  const [width, setWidth] = useState(window.innerWidth);

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
    if (searchQuery === keyword) {
      if (inView) {
        fetchImages({
          page,
          query: searchQuery,
          orderBy: validateOrder(searchOrder),
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
      }).then((res) => {
        setData(res.data);
        setKeyword(searchQuery);
        setPage(2);
        setTotalPages(res.totalPages);
        setTotal(res.total);
      });
    }
  }, [inView, searchQuery, searchOrder]);

  if (!totalPages)
    return (
      <div ref={ref} className="flex items-center justify-center mt-8">
        <Image
          src={NO_DATA_VECTOR}
          alt="No data found"
          width={400}
          height={400}
          priority
        />
      </div>
    );

  return (
    <>
      {searchQuery && (
        <TitleBar
          total={total}
          searchQuery={searchQuery}
          searchOrder={searchOrder}
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
