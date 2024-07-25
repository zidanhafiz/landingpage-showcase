import Motion from "@/components/Motion";
import Image from "next/image";

const lists = [
  {
    id: 1,
    name: "Adelle",
    img: "/images/person-2.png",
    role: "Marketing Lead",
    description: "Education will be for you what you want it to be",
  },
  {
    id: 2,
    name: "Zhen Ching",
    img: "/images/person-3.png",
    role: "Tech Lead",
    description: "Knowledge has to be improved, challenged, and increased constantly, or it vanishes",
  },
  {
    id: 3,
    name: "Peter Parker",
    img: "/images/person-1.png",
    role: "Tech Lead",
    description: "To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge",
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

const Instructors = () => {
  return (
    <div className='p-6 mt-16 gap-10'>
      <Motion
        className='grid grid-cols-[1fr,auto] md:grid-cols-1 md:max-w-[390px] gap-7'
        variants={variants}
        initial='hidden'
        whileInView='visible'
      >
        <h2 className='text-2xl md:text-3xl font-semibold'>Meet our instructors</h2>
      </Motion>
      <Motion
        className='my-20 flex flex-wrap gap-10 justify-center md:gap-20'
        variants={variants}
        initial='hidden'
        whileInView='visible'
      >
        {lists.map((list) => (
          <Motion
            variants={variants}
            key={list.id}
            className='max-w-[280px] md:max-w-[380px] flex flex-col items-center'
          >
            <div className='w-16 h-16 relative'>
              <Image
                src={list.img}
                alt={list.name}
                layout='fill'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
            <div className='text-center'>
              <h3 className='font-semibold'>{list.name}</h3>
              <p className='text-primary-800'>{list.role}</p>
            </div>
            <blockquote>
              <p className='mt-4 text-center'>&quot;{list.description}&quot;</p>
            </blockquote>
          </Motion>
        ))}
      </Motion>
    </div>
  );
};

export default Instructors;
