import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Categories from "./Categories";
import Courses from "./Courses";
import Offers from "./Offers";
import Reviews from "./Reviews";
import Instructors from "./Instructors";
import CallToAction from "./CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <Categories />
          <Courses />
          <Offers />
          <Reviews />
          <Instructors />
          <CallToAction />
        </main>
      </div>
      <Footer />
    </>
  );
}
