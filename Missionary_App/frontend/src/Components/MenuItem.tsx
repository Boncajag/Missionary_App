import React from "react";

interface MenuItemProps {
  icon: string;
  title: string;
  isLast?: boolean;
}

function MenuItem({ icon, title, isLast = false }: MenuItemProps) {
  const paddingClass = isLast ? "px-2 py-2.5 min-h-[41px]" : "p-2 min-h-10";

  // Determine the appropriate aspect ratio class based on the icon
  const getAspectRatioClass = (iconUrl: string) => {
    if (
      iconUrl ===
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c8b60de6c74f7cd45c136f10e173d618dbe7ac8f5834aea2f06b49bc352621d7?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
    )
      return "aspect-[0.87] w-[13px]";
    return "aspect-square w-[15px]";
  };

  // Determine the appropriate gap class based on the icon
  const getGapClass = (iconUrl: string) => {
    if (
      iconUrl ===
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c8b60de6c74f7cd45c136f10e173d618dbe7ac8f5834aea2f06b49bc352621d7?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
    )
      return "gap-3.5";
    return "gap-3";
  };

  return (
    <button
      className={`flex ${getGapClass(icon)} justify-between items-center ${paddingClass} whitespace-nowrap border-b-0 border-white w-full text-left`}
      aria-label={title}
    >
      <img
        src={icon}
        className={`object-contain shrink-0 self-stretch my-auto ${getAspectRatioClass(icon)}`}
        alt=""
      />
      <span className="self-stretch my-auto w-[258px]">{title}</span>
    </button>
  );
}

export default MenuItem;
