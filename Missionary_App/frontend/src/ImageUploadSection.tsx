"use client";
import * as React from "react";

const ImageUploadBox: React.FC = () => {
  return (
    <button className="flex flex-col flex-1 justify-center px-14 py-12 border border-solid border-blue-950">
      <div className="flex gap-2.5 items-center py-2 pr-5 pl-6 rounded-md">
        <div className="flex self-stretch my-auto w-7 h-7 rounded bg-zinc-500 bg-opacity-10 min-h-7" />
      </div>
    </button>
  );
};

export const ImageUploadSection: React.FC = () => {
  return (
    <section className="flex gap-2.5 mt-3">
      <ImageUploadBox />
      <ImageUploadBox />
    </section>
  );
};
