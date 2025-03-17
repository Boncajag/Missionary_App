import React from "react";
import PostItem from "./PostItem";

const posts = [
  { date: 'Jun 5, 2024", title: ""The Miracle of the Taco"' },
  { date: 'May 29, 2024", title: ""I got hit by a school bus"' },
  { date: 'May 22, 2024", title: ""Got attacked by 13 cats"' },
  { date: 'May 15, 2024", title: ""I got proposed to by ..."' },
  { date: 'May 8, 2024", title: ""My comp gets arrested"' },
  { date: 'May 1, 2024", title: ""Knocked the door of ..."' },
];

const PostsList: React.FC = () => {
  return (
    <section className="w-full mt-2">
      <h2 className="self-center mt-11 mb-9 text-2xl font-bold leading-none text-blue-950 text-center">
        My Posts
      </h2>

      <div className="flex flex-col gap-2.5 w-full max-w-[359px] mx-auto">
        {posts.map((post, index) => (
          <PostItem key={index} date={post.date} title={post.title} />
        ))}
      </div>
    </section>
  );
};

export default PostsList;

