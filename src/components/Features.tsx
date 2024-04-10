import React from "react";
import Card from "./Card";

interface FeaturesData {
  title: string;

  description: string;
  children: React.ReactNode;
  classname: string;
}

const Features = (props: FeaturesData) => {
  return (
    <div className="   mx-auto max-w-7xl my-9">
      <div className="flex flex-col items-center  gap-5 my-16 justify-center  ">
        <h2 className=" text-4xl text-center font-semibold text-salesforce-950">
          {props.title}
        </h2>
        <p className="text-center">{props.description}</p>
      </div>
      <div className={props.classname}>{props.children}</div>
    </div>
  );
};

export { Features };
