/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";
import Image from "next/image";
import { addAbsoluteURL } from "@/lib/utils";

interface Props {
  imgs: any[];
}

export const ImageCarousel = ({ imgs }: Props) => {
  //   console.log("IMGS", imgs);
  // imgs.map((imgg) => {
  //   console.log("aaaa", imgg.fields?.file);
  // });

  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {imgs.map((img) => (
          <CarouselItem key={img.sys.id}>
            <div className="flex items-center justify-center">
              <Image
                src={addAbsoluteURL(img.fields?.file?.url)}
                width={320}
                height={320}
                alt=""
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
