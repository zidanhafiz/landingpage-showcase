import Motion from "@/components/Motion";
import cn from "@/utils/cn";
import { poppins } from "@/utils/fonts";
import Image from "next/image";

const lists = [
  {
    id: 1,
    name: "Free E-book, Videos and kits",
    image: "/images/offers-img1.png",
  },
  {
    id: 2,
    name: "Learn at your own pace",
    image: "/images/offers-img2.png",
  },
  {
    id: 3,
    name: "Collaborate with different learners around the globe",
    image: "/images/offers-img3.png",
  },
  {
    id: 4,
    name: "Top instructors around the globe",
    image: "/images/offers-img4.png",
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

const Offers = () => {
  return (
    <div className='p-6 lg:mt-20'>
      <Motion
        variants={variants}
        whileInView='visible'
        initial='hidden'
      >
        <h2 className={cn(poppins.className, "lg:text-xl lg:font-semibold font-medium lg:text-center")}>We Bring The Good Education To Life</h2>
      </Motion>
      <Motion
        className='mt-9 grid lg:grid-cols-2 lg:gap-8 lg:mt-16'
        variants={variants}
        whileInView='visible'
        initial='hidden'
      >
        <Motion
          variants={variants}
          className='max-w-[400px] mx-auto lg:justify-self-end lg:mx-0'
        >
          <Image
            src='/images/offers-img5.png'
            alt='offers'
            width={2000}
            height={2000}
          />
        </Motion>
        <Motion variants={variants}>
          <h3 className='mt-9 lg:mt-0 font-semibold text-xl lg:text-2xl w-[70%] lg:w-auto'>Let Your Education Do The Walking</h3>
          <ul className='mt-7'>
            {lists.map((list) => (
              <li
                key={list.id}
                className='flex items-center gap-4 mb-4'
              >
                <Image
                  src={list.image}
                  alt={list.name}
                  width={50}
                  height={50}
                  className='w-[30px] lg:w-auto'
                />
                {list.name}
              </li>
            ))}
          </ul>
        </Motion>
      </Motion>
    </div>
  );
};

export default Offers;
