import React from "react";

const ProfileHeader: React.FC = () => {
  return (
    <header className="relative">
      <h1 className="z-10 mt-0 text-3xl font-semibold text-slate-100">
        Profile
      </h1>
      <button aria-label="Back" className="absolute top-0 left-0 -mt-5 ml-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a7d00675114a9bf2ca39835903c760505e63b61a91443155e84940e5ad4d9f?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
          alt="Back"
          className="object-contain aspect-square w-[30px]"
        />
      </button>
    </header>
  );
};

export default ProfileHeader;
