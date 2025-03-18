import { ImageGallery } from "./ImageGallery";

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
        <article
            className="bg-gray-200 rounded-xl p-6 shadow-md w-full max-w-[600px] mx-auto mt-6 mb-8"
            style={{
                backgroundColor: "#E5E7EB",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
                marginLeft: "12px",
                marginRight: "12px",
                marginBottom: "32px",
            }}
        >
            {/* TOP SECTION: Profile Picture + Name/Mission/Date */}
            <div
                className="flex items-center gap-4"
                style={{display: "flex", alignItems: "center", gap: "16px"}}
            >
                {/* Profile Picture (Circular) */}
                <div style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "0.1px solid #111111111",
                    position: "relative"
                }}>
                    <img
                        src={avatarUrl}
                        alt={`${name}'s avatar`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            position: "absolute",
                            top: "0",
                            left: "0"
                        }}
                    />
                </div>

                {/* Name, Mission, Date */}
                <div className="flex flex-col -mt-1 -space-y-1">
                    <h2 className="text-lg font-bold text-blue-950 leading-tight -m-0">{name}</h2>
                    <p className="text-sm text-gray-600 leading-tight -mt-3">{mission}</p>
                    <time className="text-xs text-gray-500 leading-tight -mt-1">{date}</time>
                </div>
            </div>

            {/* POST CONTENT: Message */}
            <p
                className="mt-4 text-sm text-blue-950"
                style={{marginTop: "16px", fontSize: "14px", color: "#002952"}}
            >
                {message}
            </p>

            {/* IMAGE GALLERY */}
            {images.length > 0 && <ImageGallery images={images} />}
        </article>
    );
};
