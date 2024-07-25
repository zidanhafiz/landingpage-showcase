"use client";
import cn from "@/utils/cn";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps =
  | { component: "button"; onClick: () => void; className?: string; children: ReactNode; href?: never }
  | { component: "link"; href: string; onClick?: never; className?: string; children: ReactNode };

const Button = ({ onClick, className, children, component, href }: ButtonProps) => {
  const newStyle = cn("block w-fit bg-primary-800 text-white hover:bg-primary-700 transition px-6 py-3 rounded-md", className ? className : "");

  if (component === "link") {
    return (
      <Link
        className={newStyle}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={newStyle}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
