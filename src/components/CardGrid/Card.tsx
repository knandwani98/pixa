import { PhotoData } from "@/types";
import { ArrowBigDownDash } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Loader } from "../Loader";
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

  if (!image.urls?.small) return null;

  return (
    <>
      {/* Mobile: Artist Details */}
      <div className="sm:hidden"></div>

      <div className="cursor-zoom-in relative group overflow-hidden break-inside-avoid h-auto rounded-md shadow-lg">
        <img
          className="w-full object-cover"
          src={image.urls?.small}
          alt={image.alt_description || ""}
        />

        <div className="absolute -bottom-20 w-full flex justify-between items-center p-4  transition-all duration-200 ease-in-out group-hover:bottom-0 group-hover:bg-gradient-to-t from-black/30 to-transparent  cursor-default">
          {/* AVATAR */}
          <div className="flex items-center gap-2">
            <img
              className="rounded-full"
              src={image.user.profile_image.medium}
              alt={image.user.name}
            />

            <h3 className="text-white font-semibold">{image.user.name}</h3>
          </div>

          {/* DOWNLOAD BUTTON */}
          <button
            onClick={downloadImage}
            className="w-10 h-10 border-2 flex justify-center items-center rounded-md bg-white/30 border-white/20 hover:bg-white/40 group-hover:scale-110"
          >
            <ArrowBigDownDash className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
};
