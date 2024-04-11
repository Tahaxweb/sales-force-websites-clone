import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  alt: string;
};

const LogoCloudBox = (props: Props) => {
  return (
    <div className="w-full py-2 px-4 rounded-lg shadow-md flex justify-center items-center ">
      <Image src={props.image} alt={props.alt} width={200} height={100} />
    </div>
  );
};

export { LogoCloudBox };
