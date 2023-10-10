import { CldImage } from "next-cloudinary";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import { CloudinaryImage } from "./cloudinary-image";
type SearchResult = {
  public_id: string;
};

const page = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image ")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-4">
        <div className="flex  justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImage
              key={result.public_id}
              src={result.public_id}
              alt="an image of something"
              height="300"
              width="400"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
