"use client";
import React from "react";
import ProfileHeader from "../Components/ProfileHeader";
import ProfileInfo from "../Components/ProfileInfo";
import PostsList from "../Components/PostsList";
import { StatusBar } from "../Components/StatusBar";

const ProfilePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <ProfileHeader />
      <ProfileInfo />
      <PostsList />
    </main>
  );
};

export default ProfilePage;
