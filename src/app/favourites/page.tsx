import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";
import { CloudinaryImage } from "../gallery/cloudinary-image";

const page = async () => {
  const results = (await cloudinary.v2.search
    .expression("tags:favourite")
    .sort_by("created_at", "desc")
    .max_results(10)
    .with_field("tags")
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-4">
        <div className="flex  justify-between">
          <h1 className="text-4xl font-bold">Favourite</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImage
              key={result.public_id}
              src={result.public_id}
              public_id={result.public_id}
              imageData={result}
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
