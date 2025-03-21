"use client";
import React from "react";
import ProfileHeader from "../Components/ProfileHeader";
import ProfileInfo from "../Components/ProfileInfo";
import PostsList from "../Components/PostsList";
import { StatusBar } from "../Components/StatusBar";

//I'm not entirely sure what the goal is here, but you can work with this code. There are some errors showing up for me...
//But I think it's because I'm missing a download or something, so hopefully it works for you.
//If not, let me know. This same format for calling data can be used for other pages as well. 
// pages/missionary.tsx

import { User, Post, Reply } from '../types'; // Adjust path if necessary
import { useEffect, useState } from 'react';

function MissionaryData() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [replies, setReplies] = useState<Reply[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:5000/api/Missionary/allData");
      const data = await response.json();

      setUsers(data.users);
      setPosts(data.posts);
      setReplies(data.replies);
    };

    fetchData();
  }, []);

  return (
    <>
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.user_id}>
          <h3>{user.first_name} {user.last_name}</h3>
          <p>{user.mission} - {user.home_city}, {user.home_state}</p>
        </div>
      ))}

      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.post_id}>
          <h3>{post.title}</h3>
          <p>{post.text}</p>
          <img src={post.image} alt={post.title} />
        </div>
      ))}

      <h2>Replies</h2>
      {replies.map((reply) => (
        <div key={reply.reply_id}>
          <p>{reply.text}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default MissionaryData;


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
