import Link from "next/link";
import React from "react";

type BannerProps = {};

const Banner = (props: BannerProps) => {
  return (
    <div className="w-full h-12  gap-x-4 items-center flex-wrap flex justify-center text-white bg-salesforce-950">
      <p className="font-medium">Say hello to Einstein Copilot. </p>
      <Link href={"/"} className=" text-white border-b border-white ">
        Find out more
      </Link>
    </div>
  );
};

export { Banner };
