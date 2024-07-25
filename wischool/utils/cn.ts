import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...className: string[]) {
  return clsx(twMerge(className));
}
