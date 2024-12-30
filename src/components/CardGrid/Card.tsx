import { PhotoData } from "@/types";
import { ArrowBigDownDash } from "lucide-react";
import React from "react";
import { Loader } from "../Loader";
import { downloadMedia } from "@/lib/utils";
import { Dropdown } from "../Dropdown";
import { DOWNLOAD_OPTIONS } from "@/lib/constants";
import Link from "next/link";

interface CardProps {
  image: PhotoData;
}

export const Card = ({ image }: CardProps) => {
  if (!image) return <Loader />;

  if (!image.urls?.small) return null;

  console.log(image);

  return (
    <>
      {/* Mobile: Artist Details */}
      <div className="sm:hidden"></div>

      <div className="cursor-default relative group overflow-hidden break-inside-avoid h-auto rounded-md shadow-lg">
        <img
          className="w-full object-cover"
          src={image.urls?.small}
          alt={image.alt_description || ""}
        />

        {/* Artist Details */}
        <div className="absolute w-full flex justify-between items-center p-4  transition-all duration-200 ease-in-out top-0 bg-gradient-to-b from-black/30 to-transparent  cursor-default">
          {/* Avatar */}
          <div className="flex items-center gap-2">
            <img
              className="rounded-full w-12 h-12"
              src={image.user.profile_image.medium}
              alt={image.user.name}
            />

            {/* Name */}
            <div className="flex flex-col">
              <h3 className="text-white font-bold text-xs">
                {image.user.name}
              </h3>

              {/* Instagram username */}
              {image.user.instagram_username && (
                <Link
                  target="_blank"
                  href={
                    "https://www.instagram.com/" + image.user.instagram_username
                  }
                  className="text-white font-light text-xs"
                >
                  @{image.user.instagram_username}
                </Link>
              )}
            </div>
          </div>
          {/* DOWNLOAD BUTTON */}
          <Dropdown
            buttonStyle="w-12 h-12 flex justify-center items-center bg-primary/30 border-none"
            noTitle
            data={{
              headerIcon: (
                <ArrowBigDownDash className="dark:text-white -mr-1" />
              ),
              header: "Download Free",
              items: [...DOWNLOAD_OPTIONS],
              otherItems: ["original size"],
            }}
            setFunction={(size) => downloadMedia(image, size)}
          />
        </div>
      </div>
    </>
  );
};
