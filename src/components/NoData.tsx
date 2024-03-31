import { NO_DATA_VECTOR } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NoData = () => {
  return (
    <div className="text-center">
      <Image
        src={NO_DATA_VECTOR}
        alt="No data found"
        width={300}
        height={300}
        priority
      />

      <p className="text-gray-500 font-light text-sm">
        Go Back to
        <a href="/" className="hover:text-blue-500 ml-1 font-semibold">
          Homepage
        </a>
      </p>
    </div>
  );
};
