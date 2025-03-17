import * as React from "react";

interface StatusBarProps {
  time?: string; // Make time optional
}


export const StatusBar: React.FC<StatusBarProps> = ({ time }) => {
  return (
    <header className="flex flex-col justify-center self-stretch p-2.5 w-full">
      <div className="pt-5 w-full bg-blue-950 min-h-[101px]">
        <div className="flex justify-between items-center w-full">
          <time className="flex-1 shrink gap-2.5 self-stretch pr-1.5 pl-4 my-auto text-lg font-semibold leading-none text-center text-white whitespace-nowrap basis-0">
            {time}
          </time>
          <div className="flex shrink-0 self-stretch my-auto h-2.5 w-[124px]" />
          <div className="flex flex-1 shrink gap-2 justify-center items-center self-stretch pr-4 pl-1.5 my-auto basis-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2466d3813ec4e4ad498f1cf522e59e46cf29f39ad77e9ee4a9a336d7dec31561?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
              alt="Signal"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.58] w-[19px]"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d119fd30cd02d1549265f9d2cb959b821465f947484d8219ae6194efd74e555?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
              alt="Battery"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.42] w-[17px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
