"use client";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

type MotionComponent =
  | "div"
  | "ul"
  | "li"
  | "nav"
  | "button"
  | "a"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "p"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "aside"
  | "main"
  | "form"
  | "input"
  | "label"
  | "select"
  | "option"
  | "textarea"
  | "img"
  | "caption"

const Motion = ({
  children,
  component = "div",
  className,
  ...props
}: MotionProps & {
  children: ReactNode;
  component: MotionComponent;
  className?: string;
}) => {
  const MotionComponent = motion[component];

  return (
    <MotionComponent
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Motion;
