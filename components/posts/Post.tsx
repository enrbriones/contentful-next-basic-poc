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
  const { title, description, imgs } = post.fields;
  const { name, lastName } = post.fields.user.fields;
  const postDate = new Date(post.sys.createdAt).toDateString();
  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{postDate}</CardDescription>
        </div>
        <CardDescription>{`${name} ${lastName}`}</CardDescription>
      </CardHeader>
      {imgs?.length && (
        <CardContent className="flex justify-center">
          <ImageCarousel imgs={imgs} />
        </CardContent>
      )}
      <CardFooter>
        <p>{description}</p>
      </CardFooter>
    </Card>
  );
};
