import { useState, useEffect } from "react";  // Import hooks for state and side effects
import { StatusBar } from "../Components/StatusBar";
import { PostCard } from "../Components/PostCard";
import { motion } from "framer-motion"; // Import Framer Motion

const InboxPage = () => {
  // State for storing posts
  const [posts, setPosts] = useState<any[]>([]);  // Initialize as an empty array

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://localhost:5000/api/Missionary/allData");  // API endpoint
        const data = await response.json();  // Parse the JSON response
        console.log(data);
        // Set the posts in the state
        setPosts(data.posts);  // Assuming the posts are in `data.posts`
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();  // Call the function to fetch data
  }, []);  // Empty dependency array means it runs once when the component mounts

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
              staggerChildren: 0.2, // Faster stagger
              ease: "easeOut", // Smoother fade-in
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
                transition: { duration: 0.8, ease: "easeOut" }, // Smooth fade-in
              },
            }}
          >
            <PostCard 
                avatarUrl={`/avatars/${post.user_id}.png`}  // Profile picture from the API
              name={post.username}  // Username from the API
              mission={post.mission}  // Mission from the API
              date={new Date(post.created_at).toLocaleDateString()}  // Convert date to a readable format
              message={post.text}  // Message from the API
                images={[]} // Assuming you only want one image for now
            />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default InboxPage;
