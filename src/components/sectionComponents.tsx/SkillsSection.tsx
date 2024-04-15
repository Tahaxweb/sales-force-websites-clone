import React from "react";
import { Features } from "../Features";
import Card from "../Card";

const SkillsData = [
  {
    title: "Salesforce CRM",
    description:
      "Learn how to use customer relationship management (CRM) software to grow your business.",
    linkText: "Start learning",
    image: "/public/images/CardImage/service-cloud.png",
  },
  {
    title: "Sales Cloud Basics",
    description:
      "Learn how to use customer relationship management (CRM) software to grow your business.",
    linkText: "Start learning",
    image: "/public/images/CardImage/news-forrester.png",
  },
  {
    title: "Service Cloud Basics",
    description:
      "Supercharge your agents with omni-channel tools and an intelligent service platform.",
    linkText: "Start learning",
    image: "/public/images/CardImage/news-gartner.png",
  },
];
function SkillsSection() {
  return (
    <Features
      title="Learn valuable skills for free, with Trailhead."
      description="Follow guided learning paths and get hands-on to learn Salesforce, digital, and soft skills from anywhere."
      classname="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9  mx-auto"
    >
      {SkillsData.map((data) => (
        <Card
          title={data.title}
          image={data.image}
          linkText={data.linkText}
          description={data.description}
          link="/"
          variant="primary"
          badge={true}
          badgeText=""
        />
      ))}
    </Features>
  );
}

export default SkillsSection;
