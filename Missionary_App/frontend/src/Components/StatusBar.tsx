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
          </div>
        </div>
      </div>
    </header>
  );
};
