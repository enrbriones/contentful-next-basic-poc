import React from "react";
import {
  Card,
  CardContent,
  //   CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Props {
  content: string;
  total: number;
}

export const TotalCount = ({ content, total }: Props) => {
  return (
    <Card className="w-1/4">
      <CardHeader>
        <CardTitle>{content}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl text-center font-bold">{total}</p>
      </CardContent>
    </Card>
  );
};
