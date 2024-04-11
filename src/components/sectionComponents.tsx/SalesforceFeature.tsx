import React from "react";
import { Features } from "../Features";
import Card from "../Card";
const CardData = [
  {
    title: "Boost customer satisfaction by 32% with Service Cloud.",

    image: "/public/image/CardImage/service-cloud.png",
    link: "Learn more",
    linkText: "Take guided tour",
  },
  {
    title:
      "Check out the new Forrester guide on how companies are investing in AI for CRM.",

    image: "/public/image/CardImage/news-forrester.png",
    link: "Learn more",
    linkText: "Take guided tour",
  },
  {
    title: "Gartner named Salesforce a Leader in Customer Data Platforms.",

    image: "/public/image/CardImage/news-gartner.png",
    link: "Learn more",
    linkText: "Take guided tour",
  },
  {
    title:
      "Discover how new AI features in Slack get you up to speed faster at work.",

    image: "/public/image/CardImage/news-slack.png",
    link: "Learn more",
    linkText: "Take guided tour",
  },
];
function SalesforceFeature() {
  return (
    <Features
      classname=" grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 "
      title="Get the latest from Salesforce."
      description=""
    >
      {CardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description=""
          image={card.image}
          link={card.link}
          linkText={card.linkText}
          variant="primary"
        />
      ))}
    </Features>
  );
}

export default SalesforceFeature;
