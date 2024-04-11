import React from "react";
import { Hero } from "./Hero";
import { Button } from "../Button";
import { Features } from "../Features";
import Image from "next/image";

function GrowthHub() {
  return (
    <>
      <Features
        title="All sorts of content. All to help you grow."
        description=""
        classname=""
      >
        <Hero
          title="What is CRM?"
          description="Learn all about CRM, how it can unify all your teams, and how it drives growth and productivity across your business."
          titleSize="text-4xl"
        >
          <Button variant="secondary">Discovery CRM</Button>
        </Hero>
      </Features>
    </>
  );
}

export default GrowthHub;
