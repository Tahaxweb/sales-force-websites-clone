import React from "react";
import { Hero } from "../Hero";
import { Button } from "../Button";
import { Features } from "../Features";
import Image from "next/image";
import { ImageFeature } from "../ImageFeature";
import GrowImage from "/public/images/grow_Image.webp";
function GrowthHub() {
  return (
    <>
      <Features
        title="All sorts of content. All to help you grow."
        description=""
        classname=""
      >
        <ImageFeature
          title="What is CRM?"
          description="Learn all about CRM, how it can unify all your teams, and how it drives growth and productivity across your business."
          titleSize="text-4xl"
          childrenClassname="flex flex-col justify-center"
        >
          <Image src={GrowImage} alt="GrowImage" />
        </ImageFeature>
      </Features>
    </>
  );
}

export default GrowthHub;
