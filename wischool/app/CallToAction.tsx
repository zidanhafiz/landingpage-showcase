import Button from "@/components/Button";
import Motion from "@/components/Motion";
import Image from "next/image";

const lists = [
  {
    id: 1,
    name: "Adelle",
    img: "/images/person-2.png",
    role: "Marketing Lead",
    description: `"Education will be for you what you want it to be"`,
  },
  {
    id: 2,
    name: "Zhen Ching",
    img: "/images/person-3.png",
    role: "Tech Lead",
    description: `“Knowledge has to be improved, challenged, and increased constantly, or it vanishes”`,
  },
  {
    id: 3,
    name: "Peter Parker",
    img: "/images/person-1.png",
    role: "Tech Lead",
    description: `“To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge”`,
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

const CallToAction = () => {
  return (
    <div className='p-6 mt-16 gap-[15%] md:grid md:grid-cols-[auto,auto]'>
      <Motion
        className='md:max-w-[500px] justify-self-end md:text-start text-center'
        variants={variants}
        initial='hidden'
        whileInView='visible'
      >
        <h2 className='text-2xl md:text-3xl font-semibold'>You don’t have to see the whole staircase just take the first step</h2>
        <p className="mt-6">Amet in a suspendisse convallis eget, Amet in a suspendisse convallis egetAmet in a </p>
      </Motion>
      <Motion
        className='my-12 flex flex-wrap justify-center gap-6 justify-self-start'
        variants={variants}
        initial='hidden'
        whileInView='visible'
      >
        <Button
          component="link"
          href="#"
        >
          Get Started
        </Button>
        <Button
          component="link"
          href="#"
          className="bg-sky-700 text-primary-800 border border-primary-800 hover:bg-sky-800"
        >
          Place a Call
        </Button>
      </Motion>
    </div>
  );
};

export default CallToAction;
