import { useRef } from "react";
import Button from "../components/Button";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AnimatedArrowElement from "../components/AnimatedArrowElement";
import WorkSection from "../components/WorkSection";
import AnimatedCanvas from "../components/AnimatedCanvas";

export default function Home() {
  const heroRef = useRef(null);

  const handleClick = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[rgb(17,17,17)]">
      <AnimatedCanvas />
      <section className="mx-auto flex flex-col h-screen justify-between">
        <Navbar />
        <HeroSection />
        <span className="mb-16 mx-auto relative group">
          <Button text={"Latest Works"} handleClick={handleClick} />
          <AnimatedArrowElement
            element={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-5 fill-white absolute top-[120%] left-1/2 -translate-x-1/2 group-hover:top-[135%] transition-all duration-200"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            }
          />
          <div className="after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[rgb(57,57,57)] after:left-1/2 after:top-[200%]"></div>
        </span>
      </section>

      <WorkSection ref={heroRef} />
    </div>
  );
}
