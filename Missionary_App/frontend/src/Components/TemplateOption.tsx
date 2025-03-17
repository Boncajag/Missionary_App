import React from "react";

type TemplateType =
  | "dressToImpress"
  | "jessica"
  | "bDog"
  | "dearJohn"
  | "carCar"
  | "carCarAlt"
  | "letter"
  | "letterFormat";

interface TemplateOptionProps {
  type: TemplateType;
}

export const TemplateOption: React.FC<TemplateOptionProps> = ({ type }) => {
  switch (type) {
    case "dressToImpress":
      return (
        <div className="px-4 pt-9 pb-3 mt-3 w-full border border-solid border-blue-950">
          <div className="shrink-0 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-1.5 h-px border border-solid border-blue-950" />
          <div className="flex gap-4 mt-2">
            <div className="flex shrink-0 border border-solid border-blue-950 h-[46px] w-[49px]" />
            <div className="flex shrink-0 border border-solid border-blue-950 h-[46px] w-[49px]" />
          </div>
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2.5 h-px border border-solid border-blue-950" />
        </div>
      );

    case "jessica":
      return (
        <div className="self-stretch px-5 pt-9 pb-3 mt-4 w-full border border-solid border-blue-950">
          <div className="flex gap-2.5">
            <div className="flex-1">
              <div className="shrink-0 h-px border border-solid border-blue-950 w-[60px]" />
              <div className="shrink-0 mt-2 h-px border border-solid border-blue-950 w-[60px]" />
              <div className="shrink-0 mt-2 h-px border border-solid border-blue-950 w-[60px]" />
              <div className="shrink-0 mt-2 h-px border border-solid border-blue-950 w-[60px]" />
              <div className="shrink-0 mt-2 h-px border border-solid border-blue-950 w-[60px]" />
              <div className="shrink-0 mt-1.5 h-px border border-solid border-blue-950 w-[60px]" />
              <div className="shrink-0 mt-1.5 h-px border border-solid border-blue-950 w-[60px]" />
            </div>
            <div className="flex shrink-0 self-start border border-solid border-blue-950 h-[46px] w-[49px]" />
          </div>
          <div className="shrink-0 mt-1.5 h-px border border-solid border-blue-950 w-[118px]" />
          <div className="shrink-0 mt-1.5 h-px border border-solid border-blue-950 w-[118px]" />
          <div className="flex gap-2 mt-2.5">
            <div className="flex shrink-0 self-start border border-solid border-blue-950 h-[46px] w-[49px]" />
            <div className="flex-1">
              <div className="shrink-0 h-px border border-solid border-blue-950 w-[60px]" />
              <div className="shrink-0 mt-2 h-px border border-solid border-blue-950 w-[60px]" />
              <div className="shrink-0 mt-2 h-px border border-solid border-blue-950 w-[60px]" />
              <div className="shrink-0 mt-2 h-px border border-solid border-blue-950 w-[60px]" />
              <div className="shrink-0 mt-2 h-px border border-solid border-blue-950 w-[60px]" />
              <div className="shrink-0 mt-1.5 h-px border border-solid border-blue-950 w-[60px]" />
              <div className="shrink-0 mt-1.5 h-px border border-solid border-blue-950 w-[60px]" />
            </div>
          </div>
        </div>
      );

    case "bDog":
      return (
        <div className="flex flex-col items-start px-4 pt-8 pb-2.5 w-full border border-solid border-blue-950">
          <div className="shrink-0 ml-4 w-24 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-3 ml-4 w-24 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-3 ml-4 w-24 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-4 ml-4 w-24 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-4 ml-4 w-24 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-3 ml-4 w-24 h-px border border-solid border-blue-950" />
          <div className="flex gap-4 self-stretch mt-2">
            <div className="flex shrink-0 border border-solid border-blue-950 h-[46px] w-[49px]" />
            <div className="flex shrink-0 border border-solid border-blue-950 h-[46px] w-[49px]" />
          </div>
        </div>
      );

    case "dearJohn":
      return (
        <div className="px-4 py-5 mt-3.5 w-full border border-solid border-blue-950">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="flex shrink-0 border border-solid border-blue-950 h-[46px]" />
              <div className="shrink-0 mt-2.5 w-12 h-px border border-solid border-blue-950" />
            </div>
            <div className="flex-1">
              <div className="flex shrink-0 border border-solid border-blue-950 h-[46px]" />
              <div className="shrink-0 mt-2.5 w-12 h-px border border-solid border-blue-950" />
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <div className="flex shrink-0 border border-solid border-blue-950 h-[46px] w-[49px]" />
            <div className="flex shrink-0 border border-solid border-blue-950 h-[46px] w-[49px]" />
          </div>
          <div className="flex gap-5 mt-2">
            <div className="shrink-0 w-12 h-px border border-solid border-blue-950" />
            <div className="shrink-0 w-12 h-px border border-solid border-blue-950" />
          </div>
        </div>
      );

    case "letterFormat":
      return (
        <div className="flex flex-col px-2 pt-5 pb-9 mt-4 w-full border border-solid border-blue-950">
          <div className="flex gap-2.5 items-start self-start ml-2.5">
            <div className="flex shrink-0 border border-solid border-blue-950 h-[42px] w-[46px]" />
            <div className="flex shrink-0 mt-3 border border-solid border-blue-950 h-[43px] w-[62px]" />
          </div>
          <div className="flex gap-3.5 items-start mt-2">
            <div className="flex shrink-0 h-11 border border-solid border-blue-950 w-[66px]" />
            <div className="flex shrink-0 mt-4 h-10 border border-solid border-blue-950 w-[42px]" />
          </div>
        </div>
      );

    case "carCar":
      return (
        <div className="flex flex-col px-3.5 pt-6 pb-1.5 border border-solid border-blue-950">
          <div className="flex shrink-0 self-center border border-solid border-blue-950 h-[46px] w-[81px]" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="flex shrink-0 self-center mt-2.5 border border-solid border-blue-950 h-[46px] w-[81px]" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
        </div>
      );

    case "carCarAlt":
      return (
        <div className="px-7 py-2.5 mt-4 border border-solid border-blue-950">
          <div className="flex shrink-0 border border-solid border-blue-950 h-[46px] w-[81px]" />
          <div className="flex shrink-0 mt-1.5 border border-solid border-blue-950 h-[46px] w-[81px]" />
          <div className="flex shrink-0 mt-1.5 border border-solid border-blue-950 h-[46px] w-[81px]" />
        </div>
      );

    case "letter":
      return (
        <div className="px-3.5 pt-11 pb-6 mt-4 border border-solid border-blue-950">
          <div className="shrink-0 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-1.5 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-5 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-2 h-px border border-solid border-blue-950" />
          <div className="shrink-0 mt-1.5 h-px border border-solid border-blue-950" />
        </div>
      );

    default:
      return null;
  }
};
