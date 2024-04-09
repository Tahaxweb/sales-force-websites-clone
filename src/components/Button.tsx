import React from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary" | "green";
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ variant = "primary", onClick, children }: ButtonProps) => {
  return (
    <button
      className={clsx("rounded-md py-2.5 px-6", {
        " bg-salesforce-500 hover:bg-salesforce-950   text-white":
          variant === "primary",
        "  bg-green-700 hover:bg-green-950   text-white": variant === "green",
        "bg-gray-300 text-gray-800": variant === "secondary",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
