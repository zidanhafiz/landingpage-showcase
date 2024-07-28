import HeroImage from "@/components/HeroImage";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";

const companyList = [
  {
    name: "Upwork",
    img: "/images/upwork.svg",
  },
  {
    name: "Warner Bros",
    img: "/images/warner.svg",
  },
  {
    name: "Woocommerce",
    img: "/images/woo.svg",
  },
  {
    name: "Canva",
    img: "/images/canva.svg",
  },
  {
    name: "RBS",
    img: "/images/rbs.svg",
  },
];

const Hero = () => {
  return (
    <div
      id='hero'
      className='max-w-[64rem] mx-auto mt-10 md:mt-20 p-6 text-center'
    >
      <Background />
      <h1 className='text-4xl md:text-6xl max-w-2xl mx-auto font-bold'>
        <span className='text-blue-violet'>SMS</span> and <span className='text-blue-violet'>Email</span> Marketing Made Easy
      </h1>
      <p className='text-xl opacity-70 mt-7'>Start increasing your marketing efforts in just a few minutes</p>
      <SubscribeForm />
      <span className='opacity-70 block mb-10 md:mb-16 mt-6'>Free forever. No credit card.</span>
      <HeroImage />
      <ul className='flex flex-wrap justify-center md:justify-between md:gap-x-0 gap-x-4 gap-y-6 mt-20 md:mt-28'>
        {companyList.map((company, i) => (
          <li
            key={i}
            className='w-[180px] h-[2.5rem]'
          >
            <Image
              className='h-full w-full'
              src={company.img}
              alt={company.name}
              width={100}
              height={50}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Background = () => {
  return (
    <div className='h-[400px] grid grid-cols-2 md:gap-48 absolute top-20 md:top-[300px] inset-x-1 md:inset-x-32 -z-10'>
      <div className='bg-blue-violet h-full rounded-full blur-[200px] opacity-30'></div>
      <div className='bg-medium-sea-green h-full rounded-full blur-[200px] opacity-30'></div>
    </div>
  );
};

export default Hero;
