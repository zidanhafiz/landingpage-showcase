'use client'
import Image from "next/image"
import Link from "next/link"
import { FormEvent, useState } from "react"

const list = [
  {
    id: 1,
    name: "Home",
    link: "#"
  },
  {
    id: 2,
    name: "Services",
    link: "#"
  },
  {
    id: 3,
    name: "Training",
    link: "#"
  },
  {
    id: 4,
    name: "Resources",
    link: "#"
  },
  {
    id: 5,
    name: "About Us",
    link: "#"
  },
  {
    id: 6,
    name: "SME",
    link: "#"
  },
  {
    id: 7,
    name: "Solution",
    link: "#"
  },
  {
    id: 8,
    name: "Reviews",
    link: "#"
  },
  {
    id: 9,
    name: "Blog",
    link: "#"
  },
  {
    id: 10,
    name: "Contact Us",
    link: "#"
  },
  {
    id: 11,
    name: "Place a Call",
    link: "#"
  },
  {
    id: 12,
    name: "Email",
    link: "#"
  },
  {
    id: 13,
    name: "wischool@email.com",
    link: "#"
  },
]

const socMed = [
  {
    id: 1,
    name: "Facebook",
    logo: "/images/fb.png",
    link: "#"
  },
  {
    id: 2,
    name: "Twitter",
    logo: "/images/tw.png",
    link: "#"
  },
  {
    id: 3,
    name: "Instagram",
    logo: "/images/ig.png",
    link: "#"
  },
  {
    id: 4,
    name: "LinkedIn",
    logo: "/images/in.png",
    link: "#"
  },
]

const Footer = () => {
  const [email, setEmail] = useState<string>("")

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <footer className="bg-black text-white">
      <div className="grid grid-rows-[auto,auto,auto] lg:grid-rows-[auto,auto] lg:grid-cols-[30%,70%] lg:gap-20 gap-8 max-w-[1440px] mx-auto justify-center py-16 px-6 lg:place-content-center lg:py-20 mt-20">
        <div className="row-start-3 lg:row-start-1 lg:col-start-1">
          <h2 className="text-2xl font-semibold">Wischool</h2>
          <p className="hidden lg:block lg:mt-4">We are not here to sell you products, we sell value through our expertise.</p>
          <ul className="flex gap-5 mt-6 items-center">
            {socMed.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>
                  <Image src={item.logo} alt={item.name} width={24} height={24} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="row-start-2 my-10 lg:my-0 lg:row-start-1 lg:col-start-2">
          <ul className="grid grid-cols-3 lg:grid-cols-5 gap-7">
            {list.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="hover:underline">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="row-start-1 w-full lg:row-start-2 lg:col-span-2 lg:max-w-[600px] justify-self-center">
          <p>Subscribe to get latest updates</p>
          <form className="flex justify-stretch mt-4" onSubmit={onSubmit}>
            <input 
              className="px-4 py-2 w-full text-black" 
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="bg-primary-800 px-4 py-2 hover:bg-primary-700 transition">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer