import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

type CardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  variant: "primary" | "secondary";
};

const Card = (props: CardProps) => {
  const cardClasses = clsx(
    {
      "rounded-xl max-w-96 shadow-xl h-96 w-full  bg-white":
        props.variant === "primary",
    },

    {
      "shadow-none rounded-none  bg-white": props.variant === "secondary",
    }
  );

  const linkClasses = clsx(
    "w-full",
    "border-b",
    "border-salesforce-950",
    "text-salesforce-950"
  );

  return (
    <div className={cardClasses}>
      <Image
        alt="image"
        src={props.image}
        width={300}
        height={200}
        className="w-full h-40 rounded-t-xl"
      />
      <div className="p-4 b">
        <h1 className="text-xl font-semibold text-salesforce-950">
          {props.title}
        </h1>
        <p className="text-md font-light mb-10 ">{props.description}</p>
        <Link href={props.link} passHref className={linkClasses}>
          {props.linkText}
        </Link>
      </div>
    </div>
  );
};

export default Card;
