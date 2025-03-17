"use client";
import * as React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const LoginForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center self-center px-16 pt-8 pb-16 mt-6 w-full rounded-xl border-2 border-solid border-blue-950 max-w-[361px] text-blue-950"
    >
      <h1 className="text-2xl">Login</h1>

      <Input
        type="email"
        label="Email"
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/aa585465c7c49038ad5776af510052bf2e041fcef2c96008d335ceb035f99a35?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
        className="mt-12"
      />

      <Input
        type="password"
        label="Password"
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/9708e0688286a34335a8a0cbed6801b9ea12926d987ce6401aea9c472795265e?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
        className="mt-6"
      />

      <Button type="submit" className="mt-5 w-[137px]">
        Login
      </Button>

      <button type="button" className="mt-7 text-sm">
        Login with Church Account
      </button>

      <button type="button" className="mt-2.5 text-sm">
        Login with Mission Email
      </button>
    </form>
  );
};
