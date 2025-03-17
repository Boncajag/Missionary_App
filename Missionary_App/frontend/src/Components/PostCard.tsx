import { ImageGallery } from "./ImageGallery"; // Adjust the path if needed

interface PostCardProps {
  avatarUrl: string;
  name: string;
  mission: string;
  date: string;
  message: string;
  images: string[];
}

export const PostCard: React.FC<PostCardProps> = ({
  avatarUrl,
  name,
  mission,
  date,
  message,
  images,
}) => {
  return (
    <>
      <article className="flex flex-col">
        <div className="flex gap-3.5 items-start mt-14 ml-11 font-medium text-blue-950">
          <img
            src={avatarUrl}
            alt={`${name}'s avatar`}
            className="object-contain shrink-0 rounded-full aspect-[1.02] w-[47px]"
          />
          <div className="flex flex-col items-start">
            <h2 className="self-stretch text-xl font-bold">{name}</h2>
            <p className="mt-2 text-xs">{mission}</p>
            <time className="text-xs">{date}</time>
          </div>
        </div>
        <p className="mt-4 ml-9 text-sm text-blue-950">{message}</p>
        {images.length > 0 && <ImageGallery images={images} />}
      </article>
    </>
  );
};
