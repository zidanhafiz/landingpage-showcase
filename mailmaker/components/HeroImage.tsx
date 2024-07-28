"use client";
import Image from "next/image";
import Motion from "./Motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroImage = () => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["center end", "center start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <Motion
      component='div'
      className='max-w-[1000px]'
      style={{ scale }}
    >
      <Image
        ref={imageRef}
        src='/images/hero.png'
        width={1500}
        height={1500}
        alt='Hero Image'
      />
    </Motion>
  );
};

export default HeroImage;
