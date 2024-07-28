"use client";
import Motion from "@/components/Motion";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const list = [
  {
    title: "Customers and interested parties engaged.",
    quote: "I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go",
    name: "Layla Star",
    position: "Star Media, Marketing Manager",
    img: "/images/layla.jpg",
  },
  {
    title: "Customers and interested parties engaged.",
    quote: "I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go",
    name: "Layla Star",
    position: "Star Media, Marketing Manager",
    img: "/images/layla.jpg",
  },
  {
    title: "Customers and interested parties engaged.",
    quote: "I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go",
    name: "Layla Star",
    position: "Star Media, Marketing Manager",
    img: "/images/layla.jpg",
  },
];

const Testimonials = () => {
  const [position, setPosition] = useState<number>(0);

  const handleNext = () => {
    if (position === list.length - 1) {
      return setPosition(0);
    }
    setPosition((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (position === 0) {
      return setPosition(list.length - 1);
    }
    setPosition((prev) => prev - 1);
  };

  return (
    <div id="testimonials" className='max-w-[1155px] mx-auto mt-16 md:mt-10 py-16 relative'>
      <Background />
      <h2 className='font-bold text-3xl md:text-5xl text-center px-6'>Testimonials</h2>
      <p className='mt-6 mb-10 text-center max-w-3xl mx-auto px-6'>
        Learn how MailMaker is helping business owners just like yourself automate their SMS and email marketing campaigns and getting more customers in the
        process.
      </p>
      <div className='relative h-[400px] md:h-[300px] overflow-hidden'>
        <Motion
          component='div'
          className='flex absolute'
          style={{ width: `${list.length * 100}%` }}
          animate={{ left: -position * 100 + "%" }}
        >
          {list.map((item, index) => (
            <div
              key={index}
              className='flex p-16 md:px-24 items-center space-x-4 w-full max-w-[1153px]'
            >
              <div className='md:grid md:grid-cols-2 md:gap-6 md:items-center'>
                <blockquote className='mb-10'>
                  <h3 className='font-semibold text-2xl md:text-3xl'>“{item.title}”</h3>
                </blockquote>
                <div>
                  <blockquote className='mb-10'>
                    <p>“{item.quote}”</p>
                  </blockquote>
                  <div className='flex items-center gap-4 '>
                    <div className='h-16 w-16 bg-slate-400 rounded-full overflow-hidden'>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={100}
                        height={100}
                        className='w-full'
                      />
                    </div>
                    <div>
                      <p>{item.name}</p>
                      <p className='opacity-70'>—{item.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Motion>
      </div>
      <div className='flex gap-10 md:gap-16 mt-10 md:mt-5 justify-center relative z-10'>
        <button
          className='bg-blue-violet hover:bg-white hover:text-blue-violet border border-blue-violet transition-colors text-white p-4 rounded-full flex items-center justify-center'
          onClick={handlePrev}
        >
          <IoIosArrowBack className="w-10 h-10" />
        </button>
        <button
          className='bg-blue-violet hover:bg-white hover:text-blue-violet border border-blue-violet transition-colors text-white p-4 rounded-full flex items-center justify-center'
          onClick={handleNext}
        >
          <IoIosArrowForward className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

const Background = () => {
  return (
    <div className='h-[400px] grid grid-cols-2 md:gap-48 absolute bottom-0 -inset-x-10 md:-inset-x-32 -z-10'>
      <div className='bg-blue-violet h-full rounded-full blur-[200px] opacity-30'></div>
      <div className='bg-medium-sea-green h-full rounded-full blur-[200px] opacity-30'></div>
    </div>
  );
};

export default Testimonials;
