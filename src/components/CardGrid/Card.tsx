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

  console.log(image);

  return (
    <div className="cursor-zoom-in relative group overflow-hidden break-inside-avoid h-auto rounded-md shadow-lg">
      <Image
        src={image.urls?.regular || image.urls?.small || ""}
        alt={image.alt_description || ""}
        width={image.width / 9}
        height={image.height / 13}
        className="w-full object-cover"
        priority
      />

      <div className="absolute -bottom-20 w-full flex justify-between items-center p-3 group-hover:bottom-0 transition-all duration-200 ease-in-out group-hover:bg-gradient-to-t from-black/30 to-transparent  cursor-default">
        {/* AVATAR */}
        <div className="flex items-center gap-2">
          <Image
            src={image.user.profile_image.medium}
            width={40}
            height={40}
            alt={image.user.name}
            className="rounded-full"
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
  );
};
