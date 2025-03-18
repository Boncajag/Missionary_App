"use client";

import { StatusBar } from "../Components/StatusBar";
import { PostCard } from "../Components/PostCard";
import { motion } from "framer-motion"; // Import Framer Motion

const InboxPage = () => {
  const posts = [
    {
      avatarUrl: "/avatars/E1.png",
      name: "Elder Johnson",
      mission: "San Jose South Mission",
      date: "January 8th, 2020",
      message: `"hey everyone! \nThis week I ate the best taco I've ever had in my life. It strengthened my testimony more than I knew it could..."`,
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/601b58582c3ff5b2664a8eccb3dbf0b52bd14631aafba8f01d72a19f6460041d",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4fd00d6d2385292e07643adadb42f3d7555f6074d6634ba9f2e5dbbd0e4aea9e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ae4bfbba836e2e57a757e06d1f4294174a26714279cbd2c7adcffe5f8745aa02",
      ],
    },
    {
      avatarUrl: "/avatars/S1.png",
      name: "Sister Smith",
      mission: "San Jose South Mission",
      date: "January 8th, 2020",
      message: `"hey everyone! \nThis week I ate the best taco I've ever had in my life. It strengthened my testimony more than I knew it could..."`,
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4fd00d6d2385292e07643adadb42f3d7555f6074d6634ba9f2e5dbbd0e4aea9e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/601b58582c3ff5b2664a8eccb3dbf0b52bd14631aafba8f01d72a19f6460041d",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ae4bfbba836e2e57a757e06d1f4294174a26714279cbd2c7adcffe5f8745aa02",
      ],
    },
    {
      avatarUrl: "/avatars/E2.png",
      name: "Elder Anderson",
      mission: "San Jose South Mission",
      date: "January 8th, 2020",
      message: `"hey everyone! \nThis week I ate the best taco I've ever had in my life. It strengthened my testimony more than I knew it could..."`,
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4fd00d6d2385292e07643adadb42f3d7555f6074d6634ba9f2e5dbbd0e4aea9e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/601b58582c3ff5b2664a8eccb3dbf0b52bd14631aafba8f01d72a19f6460041d",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ae4bfbba836e2e57a757e06d1f4294174a26714279cbd2c7adcffe5f8745aa02",
      ],
    },
  ];

  return (
      <main className="flex flex-col items-center mx-auto w-full bg-white max-w-[480px] px-4">
        <StatusBar />
        <h1 className="z-10 text-center mt-4 text-3xl font-semibold text-blue-950">
          Inbox
        </h1>

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
                    avatarUrl={post.avatarUrl}
                    name={post.name}
                    mission={post.mission}
                    date={post.date}
                    message={post.message}
                    images={post.images}
                />
              </motion.div>
          ))}
        </motion.div>
      </main>
  );
};

export default InboxPage;
