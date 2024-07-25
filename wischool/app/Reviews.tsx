import Motion from "@/components/Motion";
import cn from "@/utils/cn";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const lists = [
  {
    id: 1,
    name: "Moh Jumah",
    img: "/images/person-1.png",
    role: "senior developer",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 2,
    name: "John Mark",
    img: "/images/person-3.png",
    role: "senior developer",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
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

const Reviews = () => {
  return (
    <div className='p-6 mt-16 md:grid md:grid-cols-[auto,auto] gap-10'>
      <div className="grid grid-cols-[1fr,auto] md:grid-cols-1 md:max-w-[390px] gap-7">
        <h2 className="text-2xl md:text-5xl font-semibold">What our <span className="text-primary-800">Students</span> say about us</h2>
        <div className="flex gap-7">
          <button>
            <Image
              src="/images/prevbtn.png"
              alt="prev"
              width={60}
              height={60}
              className="w-9"
            />
          </button>
          <button>
            <Image
              src="/images/nextbtn.png"
              alt="prev"
              width={60}
              height={60}
              className="w-9"
            />
          </button>
        </div>
      </div>
      <div className="my-10 grid grid-cols-2 gap-4 md:gap-20">
        {lists.map((list) => (
          <div key={list.id} className="md:max-w-[480px]">
            <div className="flex items-center gap-5">
              <div className="w-7 h-7 relative">
                <Image
                  src={list.img}
                  alt={list.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold">{list.name}</h3>
                <p className="text-primary-800">{list.role}</p>
              </div>
            </div>
            <p className="mt-4">{list.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
