import React from "react";
import { PostItemInterface } from "../../interfaces/PostItemInterface";
import PostItem from "../PostItem/PostItem";

interface IProps {
  posts: PostItemInterface[];
  title: string;
}

const PostList = ({ posts, title }: IProps): JSX.Element => {
  return (
    <div>
      <h1 className="title">{title}</h1>
      {posts.map((post: PostItemInterface, index: number) => (
        <PostItem number={index + 1} key={post.id} {...post} />
      ))}
    </div>
  );
};
export default PostList;
