import { Banner } from "@/components/Banner";
import { Button } from "@/components/Button";
import Card from "@/components/Card";
import { Features } from "@/components/Features";
import Header from "@/components/Header";
import { Hero } from "@/components/sectionComponents.tsx/Hero";
import Image from "next/image";
import IndustryImage from "/public/images/industries-break.webp";
import { LogoCloudBox } from "@/components/LogoCloudBox";
import SalesforceFeature from "@/components/sectionComponents.tsx/SalesforceFeature";
import CRMFeature from "@/components/sectionComponents.tsx/CRMFeature";
import IndustryFeature from "@/components/sectionComponents.tsx/IndustryFeaure";
import SkillsSection from "@/components/sectionComponents.tsx/SkillsSection";
import GrowthHub from "@/components/sectionComponents.tsx/GrowthHub";
import LogoCloud from "@/components/sectionComponents.tsx/LogoCloud";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Header />
      <Banner />
      <Hero
        title="Try Salesforce Starter Suite for free.
"
        titleSize="   text-5xl"
        description="Unite marketing, sales, and service in a single app. Try Salesforce Starter Suite today. There's nothing to install. No credit card required."
      >
        <Button> Start free triel</Button>
        <Button variant="secondary"> Wetch demos</Button>
      </Hero>
      <SalesforceFeature />

      <CRMFeature />

      <IndustryFeature />
      <div>
        <Image src={IndustryImage} alt="IndustryImage" />
        <LogoCloud />
      </div>
      <SkillsSection />
      <div>
        {" "}
        <div className="flex justify-center  mt-16">
          <Button variant="secondary">Learn For Free</Button>
        </div>
        <GrowthHub />
      </div>
    </div>
  );
}
