import Motion from "@/components/Motion";
import cn from "@/utils/cn";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

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

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const Categories = () => {
  return (
    <div className='p-6 mt-16'>
      <Motion
        className='flex justify-between items-center mb-6 lg:mb-8'
        variants={variants}
        whileInView='visible'
        initial='hidden'
      >
        <h2 className={cn(poppins.className, "max-w-[225px] lg:max-w-full lg:text-xl lg:font-semibold font-medium")}>
          Choose favourite course from top cartegories
        </h2>
        <Link
          href='#'
          className={cn(poppins.className, "font-medium")}
        >
          See all
        </Link>
      </Motion>
      <Motion
        className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center'
        variants={variants}
        whileInView='visible'
        initial='hidden'
      >
        {lists.map((list) => (
          <Motion
            variants={variants}
            key={list.id}
            className='h-[160px] lg:max-w-[300px] lg:h-[260px] bg-white shadow-lg rounded-lg relative overflow-hidden hover:brightness-[130%] transition'
          >
            <Link href='#'>
              <Image
                className='object-cover h-full brightness-75'
                src={list.img}
                alt={list.name}
                width={500}
                height={500}
              />
              <p className='absolute z-10 bottom-1/2 inset-x-0 lg:bottom-6 lg:left-6 lg:inset-x-auto lg:text-2xl text-center text-white font-semibold'>
                {list.name}
              </p>
            </Link>
          </Motion>
        ))}
      </Motion>
    </div>
  );
};

export default Categories;
