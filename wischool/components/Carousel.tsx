"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const lists = [
  {
    id: 1,
    name: "Marketing",
    img: "/images/categories-img-1.png",
  },
  {
    id: 2,
    name: "Programming",
    img: "/images/categories-img-2.jpg",
  },
  {
    id: 3,
    name: "Design",
    img: "/images/categories-img-1.png",
  },
  {
    id: 4,
    name: "Technologi",
    img: "/images/categories-img-2.jpg",
  },
];

const Carousel = () => {
  return (
    <div className='w-max'>
      <div className="">
        <div className='grid grid-cols-3 lg:grid-cols-4 gap-6'>
          {lists.map((list) => (
            <motion.div
              key={list.id}
              className='w-[130px] h-[140px] lg:w-[290px] lg:h-[390px] bg-white shadow-lg rounded-lg relative overflow-hidden'
            >
              <Image
                className='object-cover h-full brightness-75'
                src={list.img}
                alt={list.name}
                width={500}
                height={500}
              />
              <p className='absolute z-10 bottom-1/2 inset-x-0 lg:bottom-6 lg:left-6 lg:inset-x-auto lg:text-2xl text-center text-white font-semibold'>{list.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
