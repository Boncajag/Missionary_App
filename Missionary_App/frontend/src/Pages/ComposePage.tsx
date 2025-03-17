"use client";
import * as React from "react";
import { StatusBar } from "./Components/StatusBar";
import { ProfileSection } from "./ProfileSection";
import { ComposeArea } from "./ComposeArea";
import { ImageUploadSection } from "./ImageUploadSection";
import { PostButton } from "./PostButton";

const ComposePage: React.FC = () => {
  return (
    <main className="overflow-hidden pb-6 mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a7d00675114a9bf2ca39835903c760505e63b61a91443155e84940e5ad4d9f?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
        alt="Back button"
        className="object-contain z-10 mt-0 ml-3.5 aspect-square w-[30px]"
      />
      <div className="flex flex-col px-3 mt-11 w-full">
        <ProfileSection />
        <ComposeArea />
        <ImageUploadSection />
        <PostButton />
      </div>
    </main>
  );
};

export default ComposePage;
