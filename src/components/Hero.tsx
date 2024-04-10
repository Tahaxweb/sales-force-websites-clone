import React from "react";
import { Button } from "./Button";

type HeroProps = {};

const Hero = (props: HeroProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  p-2  ">
      <div className="flex flex-col gap-9  mx-auto ">
        <h1 className=" text-6xl mt-12  font-semibold text-salesforce-950">
          Try Salesforce <br /> Starter Suite for <br /> free.
        </h1>
        <p className="   font-light text-lg">
          Unite sales, service and email outreach in a single app. <br /> Try
          Salesforce Starter Suite today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Button> Start free triel</Button>
          <Button variant="secondary"> Wetch demos</Button>
        </div>
      </div>
    </div>
  );
};

export { Hero };
