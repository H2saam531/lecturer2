"use client";
import Image from "next/image";
import React from "react";

const LaptopsRender = ({ data }) => {
  return (
    <div>
      {data?.brand}
      {data?.images?.map((img, i) => {
        return (
          <div key={i}>
            <Image
              src={img}
              alt={data?.title}
              width={500}
              height={500}
              priority
            />
          </div>
        );
      })}
    </div>
  );
};

export default LaptopsRender;