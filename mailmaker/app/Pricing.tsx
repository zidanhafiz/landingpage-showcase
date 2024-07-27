import Button from "@/components/Button";
import Image from "next/image";

const list = [
  {
    title: "Starter",
    price: "Free",
    description: "Up to 1000 subscribers",
    benefits: ["Email campaigns", "SMS campaigns", "Automations", "Funnel templates"],
  },
  {
    title: "Growth",
    price: "$29",
    description: "Up to 15,000 subscribers",
    benefits: ["Email campaigns", "SMS campaigns", "Automations", "Funnel templates"],
  },
  {
    title: "Scale",
    price: "$69",
    description: "Up to 50,000 subscribers",
    benefits: ["Email campaigns", "SMS campaigns", "Automations", "Funnel templates"],
  },
];

const Pricing = () => {
  return (
    <div
      id='pricing'
      className='bg-blue-violet relative px-6 py-20 md:py-32 mt-16'
    >
      <div className="bg-[url('/images/purple.svg')] bg-cover h-full absolute inset-0 z-0"></div>
      <div className='relative z-10'>
        <h2 className='text-white text-3xl md:text-5xl font-bold text-center'>Pricing</h2>
        <p className='text-white text-center text-xl mt-6 mb-10 md:mb-20'>Get started for free and upgrade your plan as you grow.</p>
        <ul className='flex flex-col md:flex-row justify-center flex-wrap gap-16 md:gap-8 max-w-[1155px] mx-auto'>
          {list.map((item, index) => (
            <li
              key={index}
              className='bg-white p-10 w-full md:max-w-[350px] shadow-md'
            >
              <h3 className='font-medium text-2xl'>{item.title}</h3>
              <p className='text-5xl text-blue-violet font-bold mt-5'>
                {item.price}
                {index > 0 && <span className='text-xl text-black'> /mo</span>}
              </p>
              <p className='mt-2 opacity-70'>{item.description}</p>
              <ul className='mt-8 flex flex-col gap-4'>
                {item.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-2'
                  >
                    <span className='bg-blue-violet w-5 h-5 rounded-full flex items-center justify-center'>
                      <Image
                        src='/images/check.svg'
                        alt='Check'
                        width={12}
                        height={12}
                        className='invert'
                      />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button
                component='link'
                href='/register'
                variant={index === 1 ? "primary" : "primary-reverse"}
                className='block mt-10 text-center'
              >
                Get started
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
