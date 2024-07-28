import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...className: string[]) => clsx(twMerge(className))