import Button from "@/components/Button";
import Motion from "@/components/Motion";
import { once } from "events";
import Image from "next/image";

const featureList = [
  {
    id: 1,
    title: "Problem Solving",
    img: "/images/hero-img-list1.png",
  },
  {
    id: 2,
    title: "Live Chat",
    img: "/images/hero-img-list2.png",
  },
  {
    id: 3,
    title: "Group Reading",
    img: "/images/hero-img-list3.png",
  },
  {
    id: 4,
    title: "10k Courses",
    img: "/images/hero-img-list4.png",
  },
  {
    id: 5,
    title: "Hand-on Activities",
    img: "/images/hero-img-list5.png",
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

const Hero = () => {
  return (
    <Motion
      className='px-6 py-10 lg:py-16 lg:mt-32 mt-20 relative z-0 lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center'
      variants={variants}
      initial='hidden'
      whileInView='visible'
    >
      <Motion variants={variants} className="lg:col-start-1">
        <h1 className='font-bold text-[32px] lg:text-6xl lg:max-w-[580px] max-w-[300px] mb-10 z-10'>
          Quality <span className='text-primary-800'>Education</span> By Any Means Necessary.
        </h1>
      </Motion>
      <Motion variants={variants} className="lg:col-start-1 lg:self-start lg:justify-self-start lg:ml-14">
        <Button
          component='link'
          href='/about'
          className='lg:py-5 lg:px-10'
        >
          Get Started
        </Button>
      </Motion>
      <Motion
        variants={variants}
        className='mt-16 relative w-fit mx-auto lg:col-start-2 lg:row-start-1 lg:row-span-2'
      >
        <Image
          className='w-[180px] lg:w-[290px] absolute bottom-16 -left-24 lg:-left-40 z-20'
          src='/images/hero-img2.png'
          alt='hero'
          width={290}
          height={290}
        />
        <Image
          className='w-[260px] lg:w-[370px] z-10 relative'
          src='/images/hero-img1.png'
          alt='hero'
          width={500}
          height={500}
        />
        <Image
          className='w-[100px] lg:w-[150px] absolute bottom-4 -right-12 lg:-right-16 z-10'
          src='/images/hero-img3.png'
          alt='hero'
          width={150}
          height={150}
        />
      </Motion>
      <div className='relative z-20 lg:col-span-2 lg:mt-6'>
        <ul className='flex justify-center gap-6 flex-wrap mt-16'>
          {featureList.map((feature) => (
            <Motion
              key={feature.id}
              variants={variants}
            >
              <li className='flex items-center gap-2 bg-sky-800 py-2 px-4 lg:py-3 rounded-md lg:px-6 shadow-md'>
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={40}
                  height={40}
                />
                <p className='text-sm font-medium'>{feature.title}</p>
              </li>
            </Motion>
          ))}
        </ul>
      </div>
      <div className='absolute inset-y-0 w-[107px] right-6 lg:right-32 bg-sky-700 rounded-e-[45px]'></div>
    </Motion>
  );
};

export default Hero;
