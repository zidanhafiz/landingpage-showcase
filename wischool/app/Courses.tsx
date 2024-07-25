import Motion from "@/components/Motion";
import cn from "@/utils/cn";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const lists = [
  {
    id: 1,
    name: "Learn Marketing from Top Instructors",
    img: "/images/courses-img1.png",
    price: 30.5,
    rating: 4.5,
    weeks: 5,
  },
  {
    id: 2,
    name: "Front-end development is not hard as you think",
    img: "/images/courses-img2.png",
    price: 30.5,
    rating: 4.5,
    weeks: 5,
  },
  {
    id: 3,
    name: "Everything you need to know in UX",
    img: "/images/courses-img3.png",
    price: 30.5,
    rating: 4.5,
    weeks: 5,
  },
  {
    id: 4,
    name: "Learn photography with ease",
    img: "/images/courses-img1.png",
    price: 30.5,
    rating: 4.5,
    weeks: 5,
  },
  {
    id: 5,
    name: "Be a pro in data analysis",
    img: "/images/courses-img2.png",
    price: 30.5,
    rating: 4.5,
    weeks: 5,
  },
  {
    id: 6,
    name: "Ethical Harking is not hard as you think",
    img: "/images/courses-img3.png",
    price: 30.5,
    rating: 4.5,
    weeks: 5,
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

const Courses = () => {
  return (
    <div className='p-6 mt-8'>
      <Motion
        className='flex justify-between items-center mb-6 lg:mb-8'
        variants={variants}
        whileInView='visible'
        initial='hidden'
      >
        <h2 className={cn(poppins.className, "max-w-[225px] lg:max-w-full lg:text-xl lg:font-semibold font-medium")}>Most Popular Courses</h2>
        <div className='relative'>
          <select
            className={cn(poppins.className, "bg-primary-800 py-2 px-4 text-white w-fit text-sm rounded-full")}
            name='sort'
          >
            <option
              value='sort_by'
              selected
            >
              Sort by
            </option>
            <option value='most_popular'>Most Popular</option>
            <option value='cheapest'>Cheapest</option>
          </select>
        </div>
      </Motion>
      <Motion
        className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 justify-items-center'
        variants={variants}
        whileInView='visible'
        initial='hidden'
      >
        {lists.map((list) => (
          <Motion
            variants={variants}
            key={list.id}
            className='max-w-[400px]'
          >
            <Image
              className='rounded-t-lg'
              src={list.img}
              alt={list.name}
              width={500}
              height={500}
            />
            <div className='w-full grid grid-cols-[auto,1fr] grid-rows-2 gap-1 lg:gap-3 mt-3'>
              <Link
                href='#'
                className='hover:underline'
              >
                <p className='font-medium lg:text-lg'>{list.name}</p>
              </Link>
              <span className='text-primary-800 font-semibold lg:text-xl lg:justify-self-end'>${list.price}</span>
              <div className='mt-2 lg:mt-0'>
                <span className='text-xs lg:text-base'>⭐{list.rating}</span>
                <span className='text-xs lg:text-base ml-3'>{list.weeks} weeks</span>
              </div>
            </div>
          </Motion>
        ))}
      </Motion>
    </div>
  );
};

export default Courses;
