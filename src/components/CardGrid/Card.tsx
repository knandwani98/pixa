import { PhotoData } from "@/types";
import { ArrowBigDownDash } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Loader } from "../ui/design/Loader";
import { saveAs } from "file-saver";

interface CardProps {
  image: PhotoData;
}

export const Card = ({ image }: CardProps) => {
  const downloadImage = () => {
    saveAs(
      image.urls.raw,
      `${image.alt_description?.replaceAll(" ", "-")}.png`
    );
  };

  if (!image) return <Loader />;

  return (
    <div className="relative cursor-pointer group overflow-hidden break-inside-avoid h-auto rounded-md shadow-lg">
      <Image
        src={image.urls?.regular || image.urls?.small || ""}
        alt={image.alt_description || ""}
        width={image.width / 9}
        height={image.height / 13}
        className="w-full object-cover"
        priority
      />
      <button
        onClick={downloadImage}
        className="flex justify-center items-center border-2 group-hover:bottom-3 w-10 h-10 rounded-md absolute -bottom-20 right-3 transition-all duration-200 ease-in-out group-hover:scale-110 bg-white/30 border-white/20 hover:bg-white/40"
      >
        <ArrowBigDownDash className="text-white " />
      </button>
    </div>
  );
};
