import { useState, useEffect } from "react"; // Import hooks for state and side effects
import { StatusBar } from "../Components/StatusBar";
import { FriendProfile } from "../Components/FriendProfile";
import { User } from "../types/User"; // Import the User type
import { motion } from "framer-motion"; // Import Framer Motion

const FriendsPage = () => {
  const [friends, setFriends] = useState<User[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch(
          "https://localhost:5000/api/Missionary/allData"
        ); // API endpoint
        const data = await response.json(); // Parse the JSON response

        // Set the posts in the state
        setFriends(data.users); // Assuming the posts are in `data.posts`
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchFriends(); // Call the function to fetch data
  }, []);

  return (
    <main className="flex flex-col items-center mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <h1 className="z-10 mt-0 text-3xl font-semibold text-slate-100">
        Friends
      </h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a7d00675114a9bf2ca39835903c760505e63b61a91443155e84940e5ad4d9f?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
        alt="Friends icon"
        className="object-contain self-start -mt-5 ml-6 aspect-square w-[30px]"
      />
      <section className="flex flex-col gap-4 mt-7">
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
          {friends.map((friend, index) => (
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
              <FriendProfile
                key={friend.user_id}
                imageSrc={friend.profile_picture} // Use the profile picture from the database
                title={friend.email} // Assuming you want first name as title
                name={`${friend.first_name} ${friend.last_name}`} // Full name
                mission={friend.mission} // Mission field
                postCount={21} // Placeholder, you might need to get this dynamically later
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default FriendsPage;
