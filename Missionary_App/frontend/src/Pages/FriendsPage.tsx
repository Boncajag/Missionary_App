"use client";

import * as React from "react";
import { StatusBar } from "./Components/StatusBar";
import { FriendProfile } from "./FriendProfile";

const FriendsPage: React.FC = () => {
  const friends = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/91a0b4f0ad75c4d5ed1e507225c516040fc13bf8bce63aa0fd8641caf25d250a?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
      title: "Sister",
      name: "Kimberleigh Smith",
      mission: "San Jose South Mission",
      postCount: 21,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/46be571d8a7566e6d9de26ede4de4e1059b1019cd1282313a8879e38031f120d?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
      title: "Elder",
      name: "Rehaboam Ba'al",
      mission: "San Jose South Mission",
      postCount: 21,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ea156145acb8d6cc9d0948d5a106c54b8a763a78748753032f21e807b48d7495?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
      title: "Elder",
      name: "Lehi Nephi Moroni",
      mission: "San Jose South Mission",
      postCount: 21,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aa7049e284fcb5679e683d495b71a31c5930372a7414ce5e5a63335f5b47d233?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
      title: "Sister",
      name: "Mixckaylagh Smith",
      mission: "San Jose South Mission",
      postCount: 21,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d532f3422b13259686e015e07deaf41931208cd9b4084fa7bc2da100e4da9694?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
      title: "Elder",
      name: "Coriantumr Shiz",
      mission: "San Jose South Mission",
      postCount: 21,
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ea156145acb8d6cc9d0948d5a106c54b8a763a78748753032f21e807b48d7495?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737",
      title: "Elder",
      name: "Mohonri Mahomes",
      mission: "San Jose South Mission",
      postCount: 21,
    },
  ];

  return (
    <main className="flex flex-col items-center mx-auto w-full bg-white max-w-[480px]">
      <StatusBar time="9:41" />
      <h1 className="z-10 mt-0 text-3xl font-semibold text-slate-100">
        Friends
      </h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a7d00675114a9bf2ca39835903c760505e63b61a91443155e84940e5ad4d9f?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
        alt="Friends icon"
        className="object-contain self-start -mt-5 ml-6 aspect-square w-[30px]"
      />
      <section className="flex flex-col gap-4 mt-7">
        {friends.map((friend, index) => (
          <FriendProfile
            key={`${friend.title}-${friend.name}-${index}`}
            {...friend}
          />
        ))}
      </section>
    </main>
  );
};

export default FriendsPage;
