"use client";
import * as React from "react";

export const ProfileSection: React.FC = () => {
  return (
    <section className="flex gap-3 self-start px-px ml-5 font-medium text-blue-950">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e039fba8ec516d40577c08c89b0e318f9d03a3a2821ce18b493bb16b00598e?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
        alt="Elder James Johnson profile"
        className="object-contain shrink-0 max-w-full rounded-full aspect-[1.02] w-[102px]"
      />
      <div className="flex flex-col items-start my-auto">
        <h1 className="self-stretch text-2xl font-bold leading-6">
          Elder <br />
          James Johnson
        </h1>
        <p className="mt-1.5 text-sm">San Jose South Mission</p>
        <time className="text-xs text-zinc-400">December 12, 2024</time>
      </div>
    </section>
  );
};
