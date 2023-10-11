"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function setAsFavouriteAction(publicId: string) {
  await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  revalidatePath("/gallery");
}
export async function removeAsFavouriteAction(publicId: string) {
  await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  revalidatePath("/favourite");
}
