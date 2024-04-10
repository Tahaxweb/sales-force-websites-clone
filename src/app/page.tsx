import { Banner } from "@/components/Banner";
import { Button } from "@/components/Button";
import Card from "@/components/Card";
import { Features } from "@/components/Features";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Image from "next/image";
const CardData = [
  {
    title: "Boost customer satisfaction by 32% with Service Cloud.",

    image: "/public/images/CardImage/service-cloud.png",
    link: "Learn more",
    linkText: "Take guided tour",
  },
  {
    title:
      "Check out the new Forrester guide on how companies are investing in AI for CRM.",

    image: "/public/images/CardImage/news-forrester.png",
    link: "Learn more",
    linkText: "Take guided tour",
  },
  {
    title: "Gartner named Salesforce a Leader in Customer Data Platforms.",

    image: "/public/images/CardImage/news-gartner.png",
    link: "Learn more",
    linkText: "Take guided tour",
  },
  {
    title:
      "Discover how new AI features in Slack get you up to speed faster at work.",

    image: "/public/images/CardImage/news-slack.png",
    link: "Learn more",
    linkText: "Take guided tour",
  },
];
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
    title: "Healthcare & Life Sciences",
    image: "/public/images/CardImage/retail.png",
  },
  {
    title: "Manufacturing",
    image: "/public",
  },
];
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Hero />
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
      <Features
        classname=" grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9   w-full "
        title="Find innovations for any industry."
        description="Whatever your industry, we offer solutions to modernize your business, save time, and lower costs. "
      >
        <div className=" col-span-4">
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
            <div className=" font-semibold text-salesforce-950 text-lg  ">
              {data.title}
            </div>
          </div>
        ))}
      </Features>
    </>
  );
}
