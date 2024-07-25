"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { RiMenuLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";

const navList = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Courses",
    href: "/courses",
  },
  {
    id: 3,
    name: "Instructor",
    href: "/instructor",
  },
  {
    id: 4,
    name: "Schedules",
    href: "/schedules",
  },
  {
    id: 5,
    name: "Contact Us",
    href: "/contact-us",
  },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className=" max-w-[1440px] w-full fixed top-0 bg-white flex justify-between items-center p-6 lg:px-[100px] lg:py-7 z-50">
      <motion.div style={{ scaleX: scrollYProgress }} className="absolute bottom-0 z-50 inset-x-0 h-1 bg-primary-800 origin-left"></motion.div>
      <div className='flex items-center gap-4'>
        {isMobile && (
          <div
            className='cursor-pointer'
            onClick={handleShowMenu}
          >
            <RiMenuLine size={20} />
          </div>
        )}
        <Link href='/'>
          <Image
            className='w-[94px] md:w-auto'
            src='/images/wischool-logo.png'
            alt='logo'
            width={132}
            height={41}
          />
        </Link>
      </div>
      <NavList
        isMobile={isMobile}
        showMenu={showMenu}
      />
      <div className='flex text-sm'>
        {isMobile ? (
          <Link href='/login'>
            <FaRegCircleUser size={20} />
          </Link>
        ) : (
          <>
            <button className='mr-2'>
              <HiMiniMagnifyingGlass size={20} />
            </button>
            <Button
              className='bg-white text-primary-800 hover:bg-gray-100 hover:text-primary-800 transition'
              component='link'
              href='/login'
            >
              Login
            </Button>
            <Button
              component='link'
              href='/register'
            >
              Register
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

const navListVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const NavList = ({ isMobile, showMenu }: { isMobile: boolean; showMenu: boolean }) => {
  if (isMobile) {
    return (
      <AnimatePresence>
        {showMenu && (
          <motion.ul
            variants={navListVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='flex flex-col items-center gap-4 absolute bg-white top-16 inset-x-0 py-6 shadow-lg z-50'
          >
            {navList.map((nav) => (
              <motion.li
                key={nav.id}
                variants={navListVariants}
              >
                <Link
                  href={nav.href}
                  className='text-gray-800 hover:text-primary-800 transition p-6'
                >
                  {nav.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    );
  }

  return (
    <ul className='flex gap-6'>
      {navList.map((nav) => (
        <li key={nav.id}>
          <Link
            href={nav.href}
            className='text-gray-800 hover:text-primary-800 transition'
          >
            {nav.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
