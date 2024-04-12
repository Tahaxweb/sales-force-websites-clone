import React from "react";
import { Button } from "../Button";
import { Features } from "../Features";
import { LogoCloudBox } from "../LogoCloudBox";
const LogoCloudData = [
  { image: "/public/images/logo/turtlebay_logo.webp", alt: "LogoCloud1" },
  { image: "/public/images/logo/gucci_logo.webp", alt: "LogoCloud2" },
  { image: "/public/images/logo/wonolo_logo.webp", alt: "LogoCloud3" },
  { image: "/public/images/logo/crexı_logo.webp", alt: "LogoCloud4" },
  { image: "/public/images/logo/baca_logo.webp", alt: "LogoCloud5" },
];
function LogoCloud() {
  return (
    <Features
      classname=" grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-9  mx-autoo
   w-full "
      title="See how companies drive customer success in a whole new way with Einstein 1."
      description=" "
    >
      <div className=" col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-5">
        <Button variant="secondary">See All industries</Button>
      </div>
      {LogoCloudData.map((data) => (
        <LogoCloudBox image={data.image} alt={data.alt} />
      ))}
    </Features>
  );
}

export default LogoCloud;
