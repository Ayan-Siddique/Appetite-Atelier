import Hero from "../components/Hero";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Menu />
      <Testimonials />
      <Gallery />
      {/* <CTA /> */}
    </>
  );
}
