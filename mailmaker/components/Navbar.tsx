"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Motion from "./Motion";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const list = [
  {
    name: "Solutions",
    href: "#solutions",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "How It Works",
    href: "#how-it-works",
  },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='lg:grid lg:grid-cols-3 items-center justify-items-center max-w-[1440px] mx-auto lg:px-[1.25rem] lg:py-10'>
      <div className='px-[1.25rem] py-8 bg-white lg:bg-transparent grid grid-cols-2 lg:flex relative z-50 lg:p-0'>
        <Link
          href='/'
          className='w-fit'
        >
          <Image
            src='/images/logo.svg'
            alt='MailMaker'
            width={100}
            height={100}
          />
        </Link>
        {isMobile && (
          <OpenButton
            handleOpen={handleOpen}
            isOpen={isOpen}
          />
        )}
      </div>
      <NavList
        list={list}
        isMobile={isMobile}
        isOpen={isOpen}
        handleOpen={handleOpen}
      />
      {!isMobile && <CallToActionButtons />}
    </nav>
  );
};

const NavList = ({ list, isMobile, isOpen, handleOpen }: { list: { name: string; href: string }[]; isMobile: boolean; isOpen: boolean, handleOpen: () => void }) => {
  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <Motion
            component='ul'
            className='absolute bg-white inset-0 px-6 pt-32 pb-20 z-20 shadow-lg'
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            exit={{ y: -1000 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {list.map((item, i) => (
              <Motion
                component='li'
                key={i}
                className='mb-8'
              >
                <Link
                  href={item.href}
                  className='text-black hover:text-blue-violet transition-colors text-xl'
                  onClick={handleOpen}
                >
                  {item.name}
                </Link>
              </Motion>
            ))}
            <CallToActionButtons className='flex justify-center mt-16' />
          </Motion>
        )}
      </AnimatePresence>
    );
  }

  return (
    <ul className='flex w-full justify-evenly'>
      {list.map((item, i) => (
        <li key={i}>
          <Link
            href={item.href}
            className='hover:text-blue-violet transition-colors'
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const OpenButton = ({ handleOpen, isOpen }: { handleOpen: () => void; isOpen: boolean }) => {
  return (
    <button
      onClick={handleOpen}
      className='cursor-pointer flex flex-col justify-center justify-self-end mr-5 lg:hidden'
    >
      <Motion
        component='div'
        className='bg-black w-12 h-0.5'
        animate={isOpen ? { rotate: 35, y: 2 } : { rotate: 0, y: -5 }}
      >
        {" "}
      </Motion>
      <Motion
        component='div'
        className='bg-black w-12 h-0.5'
        animate={isOpen ? { rotate: -35, y: -0 } : { rotate: 0, y: 5 }}
      >
        {" "}
      </Motion>
    </button>
  );
};

const CallToActionButtons = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Link
        href='#features'
        className='mx-[2.5rem] my-[0.75rem] hover:text-blue-violet transition-colors font-bold'
      >
        Learn More
      </Link>
      <Button
        component='link'
        variant='outline'
        href='#pricing'
        className='px-[1.5rem] bg-white-smoke'
      >
        Start Free
      </Button>
    </div>
  );
};

export default Navbar;
