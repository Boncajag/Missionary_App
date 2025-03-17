"use client";
import * as React from "react";

export const PostButton: React.FC = () => {
  return (
    <button className="flex overflow-hidden relative flex-col flex-1 shrink gap-2 self-end px-4 py-2 mt-11 mr-5 text-lg leading-none text-center whitespace-nowrap aspect-[2.028] basis-0 min-h-[35px] text-blue-950">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3eed3286574d5671e4be6f43e94654f37c850d18761a11cb79660aaafb0bdf2?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
        alt="Post button background"
        className="object-cover absolute inset-0 size-full"
      />
      <span className="relative z-10">Post</span>
    </button>
  );
};
