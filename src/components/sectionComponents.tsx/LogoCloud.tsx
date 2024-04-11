import React from "react";
import { Button } from "../Button";
import { Features } from "../Features";
import { LogoCloudBox } from "../LogoCloudBox";
const LogoCloudData = [
  { image: "/public/images/logo/turtlebay-logo.webp", alt: "LogoCloud" },
  { image: "/public/images/logo/gucci-logo.webp", alt: "LogoCloud" },
  { image: "/public/images/logo/wonolo-logo.webp", alt: "LogoCloud" },
  { image: "/public/images/logo/crexı-logo.webp", alt: "LogoCloud" },
  { image: "/public/images/logo/baca-logo.webp", alt: "LogoCloud" },
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
