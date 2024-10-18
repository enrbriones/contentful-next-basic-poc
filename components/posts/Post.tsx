/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ImageCarousel } from "../ui/image-carousel/ImageCarousel";

interface Props {
  post: any;
}

export const Post = ({ post }: Props) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{post.fields.title}</CardTitle>
        <CardDescription>{post.fields.user.fields.name}</CardDescription>
      </CardHeader>
      {post.fields.imgs.length && (
        <CardContent className="flex justify-center">
          {<ImageCarousel imgs={post.fields.imgs} />}
        </CardContent>
      )}
      <CardFooter>
        <p>{post.fields.description}</p>
      </CardFooter>
    </Card>
  );
};
