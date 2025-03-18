"use client";
import { StatusBar } from "../Components/StatusBar";
import { TemplateGrid } from "../Components/TemplateGrid";

function TemplatePage() {
  return (
    <main className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />

      <h1 className="z-10 self-center mt-0 text-3xl font-semibold text-slate-100">
        Templates
      </h1>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a7d00675114a9bf2ca39835903c760505e63b61a91443155e84940e5ad4d9f?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
        className="object-contain mt-0 ml-6 aspect-square w-[30px]"
        alt="Template icon"
      />

      <section className="flex flex-col items-start px-11 mt-14 w-full">
        <h2 className="text-lg leading-none text-blue-950">
          Choose a template below
        </h2>

        <TemplateGrid />
      </section>
    </main>
  );
}

export default TemplatePage;
