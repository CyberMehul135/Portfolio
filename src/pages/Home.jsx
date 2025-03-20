import { useRef, useState } from "react";
import Button from "../components/Button";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AnimatedArrowElement from "../components/AnimatedArrowElement";
import WorkSection from "../components/WorkSection";
import AnimatedCanvas from "../components/AnimatedCanvas";
import Footer from "../components/Footer";
import LetsConnect from "../components/LetsConnect";
import AboutMePopup from "../components/AboutMePopup";

export default function Home() {
  const heroRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [popupOn, setPopupOn] = useState(false);

  // CHILD COMPONENT INFORMATION
  const [aboutMeParagraph, setAboutMeParagraph] =
    useState(`I help business owners and busy web developers to design & develop
            creative websites that fits their vision and attracts the visitors to
            stay for ever. Technologies and tools that I use to create such
            awesome websites.`);
  const [techHashTags, setTechHashTags] = useState([
    "#react",
    "#javascript",
    "#css",
    "#tailwind",
    "#html",
    "#figma",
    "#git",
    "#github",
    "#terminal",
    "#reactrouter",
  ]);
  const [educations, setEducations] = useState([
    { passingYear: "2020", qualified: "B.COM | Bachlore of commerce" },
    { passingYear: "2016", qualified: "12th | HSC" },
    { passingYear: "2014", qualified: "10th | SSC" },
  ]);

  const [experience, setExperience] = useState([
    {
      project: "Portfolio Webapp",
      techStack: "Tech Stack : React.js, Tailwind CSS",
    },
    {
      project: "E-Commerce Webapp ",
      techStack: "Tech Stack : React.js, Tailwind CSS",
    },
    {
      project: "To-Do App with Dark Mode",
      techStack: "Tech Stack : React.js, Tailwind CSS",
    },
  ]);

  const handleClick = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`w-full ${
        darkMode ? "bg-[rgb(17,17,17)]" : "bg-[rgb(17,17,17)]"
      }`}
    >
      <AnimatedCanvas />
      <section className={`mx-auto flex flex-col h-screen justify-between`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection setPopupOn={setPopupOn} />
        <AboutMePopup
          popupOn={popupOn}
          setPopupOn={setPopupOn}
          aboutMeHeading={`ABOUT ME`}
          aboutMeParagraph={aboutMeParagraph}
          techHashTags={techHashTags}
          aboutMeHeading2={`FRONTEND DEVELOPER`}
          educations={educations}
          experience={experience}
          imageUrl={`/images/coder.svg`}
        />
        <span className="mb-16 max-sm:mb-[90px] -translate-y-1 mx-auto relative group">
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
          <div className="after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[rgb(57,57,57)] after:left-1/2 after:top-[200%] max-sm:hidden"></div>
        </span>
      </section>

      <WorkSection ref={heroRef} darkMode={darkMode} />
      <LetsConnect darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
