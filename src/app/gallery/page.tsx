"use client";

import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";

export default function GalleryPage() {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <CldUploadButton onUpload={(result: UploadResult) => {}} />
      </div>
      <h1>Gallery</h1>
    </section>
  );
}
