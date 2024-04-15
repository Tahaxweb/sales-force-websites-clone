import React from "react";
import { Hero } from "../Hero";
import { Button } from "../Button";
import { Features } from "../Features";
import Image from "next/image";
import { ImageFeature } from "../ImageFeature";
import GrowImage from "/public/images/grow_Image.webp";
import JungleBg from "/public/images/hp-break.webp";
import { title } from "process";
import Card from "../Card";

const CardData = [
  {
    title: "Read our latest State of Sales Report.",
    description:
      "Learn how more than 7,700 sales professionals are finding success now.",
    href: "/",
    linkText: "read the report",
    badge: "Report",
  },
  {
    title: "Stream our Connections video series.",
    description:
      "Hear how innovative marketers are connecting with customers in all new ways.",
    href: "/ ",
    linkText: "Watch the design",
    badge: "Video Series",
  },
  {
    title: "Boost sales with Lead Management 101.",
    description: "Get expert advice on lead management.",
    href: "/",
    linkText: "Join the Webinar",
    badge: " Webinar",
  },
];
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
      <div className=" mt-20 w-full absolute z-10">
        <div className="flex    mx-auto max-w-7xl justify-between">
          {CardData.map((data) => (
            <Card
              title={data.title}
              description={data.description}
              linkText={data.linkText}
              link={data.href}
              variant="primary"
              image=""
              badgeText={data.badge}
              badge={true}
            />
          ))}
        </div>
      </div>

      <Image src={JungleBg} alt="jungle" className=" relative top-72" />
    </>
  );
}

export default GrowthHub;
