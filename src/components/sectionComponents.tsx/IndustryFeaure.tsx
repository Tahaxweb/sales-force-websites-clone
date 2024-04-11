import React from "react";
import Image from "next/image";
import { Button } from "../Button";
import { Features } from "../Features";

const industryData = [
  {
    title: "Financial Services",
    image: "/public/images/CardImage/healthcare.png",
  },
  {
    title: "Retail",
    image: "/public/images/CardImage/financial-services.png",
  },
  {
    title: "Healthcare &  Life Sciences",
    image: "/public/images/CardImage/retail.png",
  },
  {
    title: "Manufacturing",
    image: "/public",
  },
];
function IndustryFeature() {
  {
    /* Indusrty Features*/
  }
  return (
    <Features
      classname=" grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9  mx-auto
           w-full  max-w-5xl"
      title="Find innovations for any industry."
      description="Whatever your industry, we offer solutions to modernize your business, save time, and lower costs. "
    >
      <div className=" col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4">
        <Button variant="secondary">See All industries</Button>
      </div>

      {industryData.map((data) => (
        <div className="flex flex-col items-center  justify-center gap-4">
          <div className=" w-20 h-20 rounded-full shadow-lg grid  place-items-center">
            <Image
              src={data.image}
              width={60}
              height={60}
              alt="industry image"
            />
          </div>
          <div className=" text-center font-semibold text-salesforce-950 text-lg  ">
            {data.title}
          </div>
        </div>
      ))}
    </Features>
  );
}

export default IndustryFeature;
