import React from "react";
import { Button } from "../Button";

type HeroProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  titleSize: string;
};

const Hero = (props: HeroProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  p-5   mx-auto  max-w-7xl">
      <div className="flex flex-col gap-9  ">
        <h1
          className={` ${props.titleSize} mt-12  font-semibold text-salesforce-950`}
        >
          {props.title}
        </h1>
        <p className=" font-light text-xl ">{props.description}</p>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-3 md:w-3/5">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export { Hero };
