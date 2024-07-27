"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const articles = [
  {
    title: "Enterprise",
    content:
      "Experience the breadth of opportunities offered by our robust and user-friendly all-in-one digital marketing solution. Our Enterprise plans are designed for scaled businesses with tailored needs in features, deliverability, compliance, services and much more!",
    icon: "/images/enterprise.svg",
  },
  {
    title: "Small Business",
    content:
      "Grow your small business with user-friendly all-in-one digital marketing solution. Our plans are designed for scaled businesses with tailored needs in features, deliverability, compliance, services and much more!",
    icon: "/images/chat.svg",
  },
  {
    title: "Agencies",
    content:
      "Grow your agency with user-friendly all-in-one digital marketing solution. Our plans are designed for scaled businesses with tailored needs in features, deliverability, compliance, services and much more!",
    icon: "/images/cart.svg",
  },
  {
    title: "Institutions",
    content:
      "Whether you need SMS or email automation for your church, or non-profit our plans are designed for institutions with tailored needs in features, deliverability, compliance, services and much more!",
    icon: "/images/institution.svg",
  },
];

const Solution = () => {
  const [article, setArticle] = useState<{ title: string; content: string; icon: string }>(articles[0]);

  return (
    <div
      id='solutions'
      className='max-w-4xl mx-auto mt-24 px-6 py-16 w-full overflow-hidden'
    >
      <h2 className='text-center text-3xl md:text-5xl font-bold'>Inbound marketing solutions for what you need to do</h2>
      <ul className='flex justify-evenly mt-16 w-auto overflow-x-scroll md:overflow-hidden'>
        {articles.map((item, i) => (
          <li
            key={i}
            onClick={() => setArticle(item)}
            className={cn(
              "p-6 flex flex-col items-center cursor-pointer rounded-lg hover:text-blue-violet transition-colors",
              item.title === article.title ? "bg-black text-white" : ""
            )}
          >
            <Image
              className={cn("h-8 md:h-12", item.title === article.title ? "grayscale brightness-[10]" : "")}
              src={item.icon}
              alt={item.title}
              width={100}
              height={100}
            />
            <h3 className='mt-6 text-center'>{item.title}</h3>
          </li>
        ))}
      </ul>
      <div className='mt-10 md:mt-16'>
        {article && (
          <article>
            <h4 className='font-medium text-2xl md:text-3xl'>{article.title}</h4>
            <p className='my-5 opacity-70'>{article.content}</p>
            <Link
              href='#'
              className='text-blue-violet underline font-semibold'
            >
              Find out more
            </Link>
          </article>
        )}
      </div>
    </div>
  );
};

export default Solution;
