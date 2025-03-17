"use client";
import * as React from "react";
import { StatusBar } from "../Components/StatusBar";
import { SearchForm } from "../Components/SearchForm";
import { KeyboardLayout } from "../Components/KeyboardLayout";
import { AutocorrectionBar } from "../Components/AutocorrectionBar";
import { HomeIndicator } from "../Components/HomeIndicator";

function SearchPage() {
  return (
    <main className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
      <section className="flex flex-col justify-center py-2.5 w-full">
        <StatusBar />
      </section>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a7d00675114a9bf2ca39835903c760505e63b61a91443155e84940e5ad4d9f?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
        className="object-contain z-10 mt-0 ml-3.5 aspect-square w-[30px]"
        alt="Search icon"
      />
      <SearchForm />
      <section className="flex relative flex-col pt-1 mt-6 w-full">
        <div className="flex absolute inset-x-0 top-2/4 z-0 items-center pt-1.5 w-full -translate-y-2/4 bg-neutral-600 bg-opacity-90 min-h-[336px] translate-x-[0%]" />
        <AutocorrectionBar />
        <div className="flex z-0 w-full min-h-[5px]" />
        <KeyboardLayout />
        <div className="flex z-0 gap-10 justify-between items-start pt-7 pr-6 pl-5 w-full h-[55px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdfa213bc76121f2964bd9e0317ae4fec0470a450d9b9624d6903c9fcb122648?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
            className="object-contain shrink-0 aspect-square w-[27px]"
            alt="Emoji"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2979c0bf8253b43304aa033f701fa75a1044bfcd3caf8da3fd03e884f6667c6?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
            className="object-contain shrink-0 aspect-[0.68] w-[19px]"
            alt="Microphone"
          />
        </div>
        <HomeIndicator />
      </section>
    </main>
  );
}

export default SearchPage;
