import Image from "next/image"
import Link from "next/link"
import Button from "./Button";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const products = [
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

const companies = [
  {
    name: "Get Started",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

const Footer = () => {
  return (
    <footer className="p-6 mt-10 grid gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-1 md:gap-x-6 max-w-[1155px] mx-auto">
      <div>
        <Link href='/'>
          <Image
            src='/images/logo.svg'
            alt='MailMaker'
            width={100}
            height={100}
            className="w-40"
          />
        </Link>
        <p className="opacity-70 mt-4">SMS Marketing and Email Marketing Made Easy.</p>
        <div className="mt-6">
          <h3 className="font-semibold">GET IN TOUCH</h3>
          <div className="flex gap-6 mt-4">
            <Link href="#">
              <FaFacebook className="text-2xl text-blue-violet" />
            </Link>
            <Link href="#">
              <FaTwitter className="text-2xl text-blue-violet" />
            </Link>
            <Link href="#">
              <FaLinkedin className="text-2xl text-blue-violet" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-xl mb-4">Product</h3>
        <ul className="flex flex-col gap-3 opacity-70">
          {products.map((product) => (
            <li key={product.name}>
              <Link href={product.href} className="hover:text-blue-violet transition-colors">{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-xl mb-4">Company</h3>
        <ul className="flex flex-col gap-3 opacity-70">
          {companies.map((company) => (
            <li key={company.name} className="hover:text-blue-violet transition-colors">
              <Link href={company.href}>{company.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-2 lg:col-span-1">
        <p className="opacity-70 mb-6">Subscribe to MailMaker to keep up with the latest news and events</p>
        <form className="w-full flex" action="">
          <input type='email' placeholder='Email Address' className="w-full border px-4" />
          <Button 
            component="button"
            variant="primary"
            className="px-4"
          >
           Submit
          </Button>
        </form>
      </div>
      <div className="text-center opacity-70 my-10 md:row-start-3 md:col-span-3 lg:col-span-4 md:flex md:justify-between">
        <p>@2022 Fitr Media. All rights reserved.</p>
        <p>Developed by Fitr Media</p>
      </div>
    </footer>
  )
}

export default Footer