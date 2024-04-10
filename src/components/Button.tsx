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
      className={clsx(" rounded-md py-3 px-6", {
        " bg-salesforce-600 hover:bg-salesforce-950   text-white":
          variant === "primary",
        "  bg-green-700 hover:bg-green-950   text-white": variant === "green",
        " border-2 border-salesforce-600 hover:border-salesforce-950 text-salesforce-700  hover:bg-salesforce-300   hover:bg-opacity-20":
          variant === "secondary",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
