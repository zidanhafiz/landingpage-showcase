import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Categories from "./Categories";
import Courses from "./Courses";
import Offers from "./Offers";
import Reviews from "./Reviews";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <header>
        <Navbar />
      </header>
      <Hero />
      <Categories />
      <Courses />
      <Offers />
      <Reviews />
    </div>
  );
}
