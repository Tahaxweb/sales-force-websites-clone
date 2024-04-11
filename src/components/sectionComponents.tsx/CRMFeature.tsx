import React from "react";
import Card from "../Card";
import { Features } from "../Features";
const CRMFeaturesCardData = [
  {
    title: "Small Business",
    desription: "Sell smarter and provide support faster in a single app.",
    image: "/public/images/CardImage/service-cloud.png",
    link: "Learn more",
    linkText: "Take guided tour",
  },
  {
    title: "Sales",
    desription:
      "Close more deals faster and unleash growth with AI-driven sales.",
    image: "/public/images/CardImage/news-forrester.png",
    link: "Learn more",
    linkText: "Take guided tour",
  },
  {
    title: "Service",
    desription:
      "Boost customer satisfaction and efficiency with AI-powered service.",
    image: "/public/images/CardImage/news-gartner.png",
    link: "Learn more",
    linkText: "Take guided tour",
  },
  {
    title: "See all products",
    desription:
      "Connect with customers in a whole new way with AI on Einstein 1.",
    image: "/public/images/CardImage/news-slack.png",
    link: "Learn more",
    linkText: "Take guided tour",
  },
];
function CRMFeature() {
  return (
    <Features
      classname=" grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 "
      title="Power up every team with CRM, trusted AI,  and data."
      description="Learn how Salesforce CRM, powered by the trusted Einstein 1 platform, helps everyone at your company be more productive and grow customer loyalty. "
    >
      {CRMFeaturesCardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.desription}
          image={card.image}
          link={card.link}
          linkText={card.linkText}
          variant="secondary"
        />
      ))}
    </Features>
  );
}

export default CRMFeature;
