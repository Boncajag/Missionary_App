"use client";

import { StatusBar } from "../Components/StatusBar";
import { PostCard } from "../Components/PostCard";

const InboxPage = () => {
  const posts = [
    {
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ef551e9c5f1d70ea3b9df8ac24def55a8eccfe5aed04362c00fc6219ecfc9915?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
      name: "Elder Johnson",
      mission: "San Jose South Mission",
      date: "January 8th, 2020",
      message: `"hey everyone! \nThis week I ate the best taco I've ever had in my life. It strengthened my testimony more than I knew it could..."`,
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/601b58582c3ff5b2664a8eccb3dbf0b52bd14631aafba8f01d72a19f6460041d?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4fd00d6d2385292e07643adadb42f3d7555f6074d6634ba9f2e5dbbd0e4aea9e?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ae4bfbba836e2e57a757e06d1f4294174a26714279cbd2c7adcffe5f8745aa02?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
      ],
    },
    {
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ef551e9c5f1d70ea3b9df8ac24def55a8eccfe5aed04362c00fc6219ecfc9915?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
      name: "Elder Johnson",
      mission: "San Jose South Mission",
      date: "January 8th, 2020",
      message: `"hey everyone! \nThis week I ate the best taco I've ever had in my life. It strengthened my testimony more than I knew it could..."`,
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4fd00d6d2385292e07643adadb42f3d7555f6074d6634ba9f2e5dbbd0e4aea9e?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/601b58582c3ff5b2664a8eccb3dbf0b52bd14631aafba8f01d72a19f6460041d?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ae4bfbba836e2e57a757e06d1f4294174a26714279cbd2c7adcffe5f8745aa02?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
      ],
    },
    {
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ef551e9c5f1d70ea3b9df8ac24def55a8eccfe5aed04362c00fc6219ecfc9915?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
      name: "Elder Johnson",
      mission: "San Jose South Mission",
      date: "January 8th, 2020",
      message: `"hey everyone! \nThis week I ate the best taco I've ever had in my life. It strengthened my testimony more than I knew it could..."`,
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4fd00d6d2385292e07643adadb42f3d7555f6074d6634ba9f2e5dbbd0e4aea9e?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/601b58582c3ff5b2664a8eccb3dbf0b52bd14631aafba8f01d72a19f6460041d?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ae4bfbba836e2e57a757e06d1f4294174a26714279cbd2c7adcffe5f8745aa02?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
      ],
    },
  ];

  return (
    <main className="flex flex-col items-start mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <h1 className="z-10 self-center mt-0 text-3xl font-semibold text-slate-100">
        Inbox
      </h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a7d00675114a9bf2ca39835903c760505e63b61a91443155e84940e5ad4d9f?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
        alt="Inbox icon"
        className="object-contain mt-0 ml-6 aspect-square w-[30px]"
      />
      {posts.map((post, index) => (
        <PostCard
          key={index}
          avatarUrl={post.avatarUrl}
          name={post.name}
          mission={post.mission}
          date={post.date}
          message={post.message}
          images={post.images}
        />
      ))}
    </main>
  );
};

export default InboxPage;
