/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Post } from "./Post";

interface Props {
  posts: any[];
}

export const PostList = ({ posts }: Props) => {
  return posts.map((post) => <Post key={post.id} post={post} />);
};
