import { useState } from "react";
import { StatusBar } from "../Components/StatusBar";

const ComposePage = () => {
    const [postContent, setPostContent] = useState("");

    const handlePost = () => {
        console.log("Post content:", postContent);
        // Add your post submission logic here
    };

    return (
        <main className="flex flex-col items-center justify-center mx-auto w-full bg-white max-w-[480px] px-4 py-8">
            <StatusBar/>
            <div className="profile-info-container">
                <div className="profile-image-container">
                    <img
                        src="/avatars/1.png"
                        alt="Profile Picture"
                        className="profile-image-small"
                    />
                </div>
                <div className="profile-info">
                    <h2 className="text-xl font-semibold text-blue-950">James Johnson</h2>
                    <p className="text-gray-500 text-sm">
                        {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
            <textarea
                className="compose-textbox"
                placeholder="What's on your mind?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
            />
            <button
                className="post-button"
                onClick={handlePost}
            >
                Post
            </button>
        </main>

    );
};

export default ComposePage;
