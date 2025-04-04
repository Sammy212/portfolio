import BackToTop from "@/components/BackToTop";
import { AboutMe } from "@/sections/AboutMe";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Tape } from "@/sections/Tape";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Projects/>
      <Tape/>
      <Testimonials/>
      <AboutMe/>
      <Contact/>
      <Footer/>
      <BackToTop />
    </div>
  );
}
