"use client";
import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "primary" | "secondary" | "primary-reverse" | "outline";
  className?: string;
};

type ButtonProps = ({ component: "button" } & ButtonHTMLAttributes<HTMLButtonElement>) | ({ component: "link" } & LinkProps);

const styleMap = {
  "primary": "bg-blue-violet text-white border-blue-violet hover:bg-white hover:text-blue-violet",
  "secondary": "bg-black text-white border-black hover:bg-white hover:text-black",
  "primary-reverse": "bg-white text-blue-violet border-blue-violet hover:bg-blue-violet hover:text-white",
  "outline": "border-black text-black hover:bg-black hover:text-white",
};

const Button = ({ children, className, variant, ...props }: Props & ButtonProps) => {
  const classes = cn("px-[2.5rem] py-[0.75rem] font-bold border transition-colors", styleMap[variant], className || "");

  if (props.component === "link") {
    return (
      <Link
        className={classes}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
