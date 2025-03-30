import { useState } from "react";
import { StatusBar } from "../Components/StatusBar";
import { ProfileSection } from "../Components/ProfileSection";

const ComposePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setStatus("❌ Title is required.");
      return;
    }

    const postData = {
      user_id: 1, // Replace with dynamic user ID if available
      title: title,
      text: body,
      image: "", // Always null as per your setup
      created_at: new Date().toISOString(),
      first_name: "James",
      last_name: "Johnson",
      mission: "1",
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
    <main className="flex flex-col items-center justify-center mx-auto w-full bg-white max-w-[480px] px-4 py-8">
      <StatusBar />
      <ProfileSection />
      <form onSubmit={handleSubmit} className="w-full">
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
            className="compose-textbox"
            id="bodyTextarea"
            rows={6}
            placeholder="What's on your mind?"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button type="submit" className="post-button">
          Post
        </button>
      </form>
      {status && <div className="alert alert-info mt-3">{status}</div>}
    </main>
  );
};

export default ComposePage;
