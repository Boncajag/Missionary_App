"use client";
import * as React from "react";
import StatusBar from "../Components/StatusBar";
import MenuItem from "../Components/MenuItem";

function Sidebar() {
  const menuItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7261cbf5caf2e4cc147ab735793516191d6bf1c3a340e8553f19d99c9197798e?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737", title: "Inbox" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00f8cd439f51763292ab3dd967d2353b36d920a8aea5c7a7dda68e8bb5162d57?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737", title: "Friends" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a293f00906a2222ff4ff450722288e72a4935484b5016cd5afa3c5aff60c95a6?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737", title: "Search" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8b60de6c74f7cd45c136f10e173d618dbe7ac8f5834aea2f06b49bc352621d7?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737", title: "Profile" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed75a8447da07198c13ce33feb0b2ed66d538261046df7b6668bcfb98a21729f?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737", title: "Create New" }
  ];

  return (
    <aside className="flex flex-col items-start mx-auto w-full bg-slate-100 max-w-[480px]">
      <div className="flex flex-col justify-center self-stretch p-2.5 w-full">
        <StatusBar />
      </div>
      <button aria-label="Back" className="z-10 mt-0 ml-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a7d00675114a9bf2ca39835903c760505e63b61a91443155e84940e5ad4d9f?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
          className="object-contain aspect-square w-[30px]"
          alt="Back"
        />
      </button>
     <nav className="mt-4 ml-2.5 w-full text-lg font-semibold tracking-tight leading-none text-white bg-blue-950 max-w-[301px] pb-[583px]">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            isLast={index === menuItems.length - 1} 
          />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
