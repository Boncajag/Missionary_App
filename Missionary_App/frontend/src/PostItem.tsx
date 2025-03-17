import React from "react";

interface PostItemProps {
  date: string;
  title: string;
}

const PostItem: React.FC<PostItemProps> = ({ date, title }) => {
  return (
    <article className="flex gap-7 px-5 py-4 w-full text-base rounded-lg bg-stone-50 text-blue-950">
      <time className="grow shrink font-bold leading-loose">{date}</time>
      <h3 className="grow shrink my-auto font-medium">{title}</h3>
    </article>
  );
};

export default PostItem;
