"use client";

import * as React from "react";

interface FriendProfileProps {
  imageSrc: string;
  title: string;
  name: string;
  mission: string;
  postCount: number;
}

export const FriendProfile: React.FC<FriendProfileProps> = ({
  imageSrc,
  title,
  name,
  mission,
  postCount,
}) => {
  return (
    <article className="flex flex-col justify-center px-3 py-2.5 max-w-full font-medium rounded-lg bg-stone-50 text-blue-950 w-[366px]">
      <div className="flex gap-3">
        <img
          src={imageSrc}
          alt={`${title} ${name}`}
          className="object-contain shrink-0 max-w-full rounded-full aspect-[1.02] w-[102px]"
        />
        <div className="flex z-10 flex-col items-start my-auto">
          <h2 className="self-stretch text-2xl font-semibold leading-6">
            {title} <br />
            {name}
          </h2>
          <p className="mt-1.5 text-sm">{mission}</p>
          <p className="text-xs text-zinc-400">{postCount} Posts</p>
        </div>
      </div>
    </article>
  );
};
