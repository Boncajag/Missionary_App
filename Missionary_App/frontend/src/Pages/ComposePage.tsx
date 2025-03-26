"use client";
import * as React from "react";
import { useState } from "react";
import { StatusBar } from "../Components/StatusBar";
import { ProfileSection } from "../Components/ProfileSection";

const ComposePage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData = {
      user_id: 1, // Replace with dynamic user ID if available
      title: title,
      text: body,
      image: "", // Always null as per your setup
      created_at: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        "https://localhost:5000/api/Posts/CreateAPost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (response.ok) {
        setStatus("✅ Post submitted successfully!");
        setTitle("");
        setBody("");
      } else {
        setStatus("❌ Failed to submit post.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error occurred while submitting.");
    }
  };

  return (
    <main className="overflow-hidden pb-6 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-3 mt-11 w-full">
        <StatusBar />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a7d00675114a9bf2ca39835903c760505e63b61a91443155e84940e5ad4d9f?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
          alt="Back button"
        />
        <br />
        <ProfileSection />
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="titleInput"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bodyTextarea" className="form-label">
              Body
            </label>
            <textarea
              className="form-control"
              id="bodyTextarea"
              rows={6}
              placeholder="Write your post here..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary float-end">
            Post
          </button>
        </form>
        {status && <div className="alert alert-info mt-3">{status}</div>}
      </div>
      <br />
      <br />
      <br />
      <br />
    </main>
  );
};

export default ComposePage;
