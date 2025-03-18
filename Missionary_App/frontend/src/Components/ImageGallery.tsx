interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px", // Adds spacing between images
            marginTop: "24px", // Moves the gallery down a bit
            width: "100%",
            maxWidth: "333px",
            paddingLeft: "16px", // Adds left padding
            paddingRight: "16px", // Adds right padding
          }}
      >
        {images.map((image, index) => (
            <img
                key={index}
                src={image}
                alt={`Gallery image ${index + 1}`}
                style={{
                  width: "101px",
                  maxWidth: "100%",
                  borderRadius: "8px", // Rounds corners
                  objectFit: "contain",
                  paddingLeft: "8px", // Adds padding on the left
                  paddingRight: "8px", // Adds padding on the right
                }}
            />
        ))}
      </div>
  );
};
