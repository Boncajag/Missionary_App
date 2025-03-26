import { useState, useEffect } from "react";
import { StatusBar } from "../Components/StatusBar";
import { PostCard } from "../Components/PostCard";
import { motion } from "framer-motion";

// Define TypeScript interfaces for Post and User
// TypeScript interfaces for users and posts
interface User {
    user_id: number;
    first_name: string;
    last_name: string;
    mission: string;
}

interface Post {
    post_id: number;
    user_id: number;
    title: string;  // Add this line
    text: string;
    image: string;
    created_at: string;
}


// InboxPage Component
const InboxPage: React.FC = () => {
    const [posts, setPosts] = useState<(Post & User)[]>([]);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                // Fetch all data from the same endpoint
                const response: Response = await fetch("https://localhost:5000/api/Missionary/allData");
                const data: { users: User[]; posts: Post[] } = await response.json();
                console.log("Fetched Data:", data);

                // Merge posts with user data
                // Merge posts with user data
                const mergedPosts = data.posts.map((post: Post) => {
                    const user = data.users.find((user: User) => user.user_id === post.user_id);

                    return {
                        ...post,
                        first_name: user?.first_name || "Unknown",
                        last_name: user?.last_name || "User",
                        mission: user?.mission || "Unknown Mission",
                    };
                });


                // Update the state with merged data
                setPosts(mergedPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchData(); // Call the function to fetch data
    }, []);

    return (
        <main className="flex flex-col items-center mx-auto w-full bg-white max-w-[480px] px-4">
            <StatusBar />
            <h1 className="z-10 text-center mt-4 text-3xl font-semibold text-blue-950">Inbox</h1>

            {/* Motion wrapper for staggered animation */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.2,
                            ease: "easeOut",
                        },
                    },
                }}
                className="flex flex-col gap-6 w-full"
            >
                {posts.map((post, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, ease: "easeOut" },
                            },
                        }}
                    >
                        <PostCard
                            avatarUrl={`/avatars/${post.user_id}.png`}
                            name={`${post.first_name} ${post.last_name}`}
                            mission={post.mission}
                            date={new Date(post.created_at).toLocaleDateString()}
                            title={post.title}  // Pass the title
                            message={post.text}
                            images={[]}
                        />

                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
};

export default InboxPage;
