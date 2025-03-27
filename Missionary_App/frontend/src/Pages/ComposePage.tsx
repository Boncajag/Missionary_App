import { useState } from "react";

const ComposePage = () => {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");

    const handlePost = () => {
        console.log("Post title:", postTitle);
        console.log("Post content:", postContent);
        // Add your post submission logic here
    };

    return (
        <main className="compose-page-container">
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
            {/* Title Input */}
            <input
                type="text"
                className="compose-title-input"
                placeholder="Title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            {/* Body Text Area */}
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
