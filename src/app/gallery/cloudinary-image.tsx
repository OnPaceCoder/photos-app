"use client";

import Heart from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import cloudinary from "cloudinary";
import { removeAsFavouriteAction, setAsFavouriteAction } from "./actions";
import { useTransition } from "react";
import { FullHeart } from "@/components/icons/fullHeart";
export function CloudinaryImage(props: any & { public_id: string }) {
  const [transition, startTransition] = useTransition();
  const isFavourible = props.imageData.tags.includes("favourite");

  return (
    <div className="relative">
      <CldImage {...props} />
      {isFavourible ? (
        <FullHeart
          className={`absolute top-2 right-2 hover:text-red-500 cursor-pointer`}
          onClick={() => {
            startTransition(() => {
              removeAsFavouriteAction(props.public_id);
            });
          }}
        />
      ) : (
        <Heart
          className={`absolute top-2 right-2 hover:text-red-500 cursor-pointer`}
          onClick={() => {
            startTransition(() => {
              setAsFavouriteAction(props.public_id);
            });
          }}
        />
      )}
    </div>
  );
}
