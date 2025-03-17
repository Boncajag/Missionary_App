interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="flex gap-4 self-center mt-6 w-full max-w-[333px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery image ${index + 1}`}
          className="object-contain shrink-0 max-w-full rounded aspect-[1.14] w-[101px]"
        />
      ))}
    </div>
  );
};
