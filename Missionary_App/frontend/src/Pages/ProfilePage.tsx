import { useState, useEffect } from "react";
import { StatusBar } from "../Components/StatusBar";
import { motion } from "framer-motion";
import { Pencil } from "lucide-react";

const ProfilePage = () => {
    const [user, setUser] = useState<any>(null);
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch("https://localhost:5000/api/Missionary/allData");
                const data = await response.json();
                setUser(data.users[0]); // Assuming the first user is the current user
                setPosts(data.posts.filter((post: { user_id: number }) => post.user_id === data.users[0].user_id));
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };
        fetchProfile();
    }, []);

    return (
        <main
            className="flex flex-col items-center justify-center mx-auto w-full bg-white max-w-[480px] px-4 py-8 text-center">
            <StatusBar/>
            <h1 className="text-3xl font-semibold text-blue-950">Profile</h1>
            {user && (
                <div className="flex flex-col items-center gap-4 mt-6">
                    <div className="profile-image-container">
                        <img
                            src={`/avatars/${user.user_id}.png`}
                            alt="Profile Picture"
                            className="profile-image"
                        />
                    </div>
                    <div className="profile-info">
                        {Object.entries(user).filter(([key]) => key !== "profile_picture" && key !== "user_id").map(([key, value]) => (
                            <div key={key} className="profile-info-item">
                                <span className="profile-label">{key.replace("_", " ")}:</span>
                                <div className="profile-pill">
                                    <span>{key === "password" ? "●●●●●●●●" : String(value)}</span>
                                    <Pencil className="pencil-icon w-5 h-5" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <h2 className="text-2xl font-semibold text-blue-950 mt-8">My Posts</h2>
            <section className="flex flex-col items-center gap-4 mt-4 w-full">
                {posts.map((post, index) => (
                    <motion.div
                        key={index}
                        className="post-card text-center"
                        whileHover={{scale: 1.02}}
                    >
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-text">
                            {post.text.split(" ").slice(0, 10).join(" ")}...
                        </p>
                        <span className="post-date">{new Date(post.created_at).toLocaleDateString()}</span>
                    </motion.div>
                ))}
            </section>


        </main>
    );
};

export default ProfilePage;
