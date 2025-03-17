"use client";
import * as React from "react";
import { StatusBar } from "./StatusBar";
import { LoginForm } from "./LoginForm";
import { KeyboardLayout } from "./KeyboardLayout";

const LoginPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a7d00675114a9bf2ca39835903c760505e63b61a91443155e84940e5ad4d9f?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
        className="object-contain z-10 mt-0 ml-3.5 aspect-square w-[30px]"
        alt="Back"
      />
      <LoginForm />
      <KeyboardLayout />
    </div>
  );
};

export default LoginPage;
