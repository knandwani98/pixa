import React from "react";
import { Card } from "./Card";
import { PhotoData } from "@/types";
import Masonry from "react-masonry-css";

export const CardGrid = ({
  data,
  cols,
}: {
  data: PhotoData[];
  cols: number;
}) => {
  return (
    <section className="pt-8 px-8">
      <ul>
        <Masonry
          breakpointCols={cols}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data?.map((image: PhotoData, index: number) => {
            return (
              <li key={index}>
                <Card image={image} />
              </li>
            );
          })}
        </Masonry>
      </ul>
    </section>
  );
};
