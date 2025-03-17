"use client";
import * as React from "react";

export const ComposeArea: React.FC = () => {
  return (
    <textarea
      placeholder="Type here..."
      className="px-3 pt-3 pb-64 mt-11 text-lg leading-none border border-solid border-blue-950 text-blue-950 w-full resize-none"
    />
  );
};
