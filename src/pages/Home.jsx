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
  const [darkMode, setDarkMode] = useState(true);
  const [popupOn, setPopupOn] = useState(false);

  // CHILD COMPONENT INFORMATION
  const [aboutMeParagraph, setAboutMeParagraph] = useState(
    `I design and develop responsive websites using React, Redux, Tailwind CSS, and JavaScript. I focus on building clean and interactive user interfaces that align with modern web standards and that users enjoy interacting with.`
  );
  const [techHashTags, setTechHashTags] = useState([
    "#react",
    "#redux",
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
  const [skills, setSkills] = useState([
    {
      id: "react",
      icon: "devicon-react-original colored",
      name: "React.JS",
      bgColor: "bg-[rgb(97,218,244)]",
      textColor: "text-black",
    },
    {
      id: "javascript",
      icon: "devicon-javascript-plain colored",
      name: "Javascript",
      bgColor: "bg-[rgb(240,219,79)]",
      textColor: "text-black",
    },
    {
      id: "tailwind",
      icon: "devicon-tailwindcss-original colored",
      name: "Tailwind.css",
      bgColor: "bg-[rgb(97,218,244)]",
      textColor: "text-black",
    },
    {
      id: "redux",
      icon: "devicon-redux-original colored",
      name: "Redux.JS",
      bgColor: "bg-[rgb(118,74,188)]",
      textColor: "text-white",
    },
  ]);

  const handleClick = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`w-full ${darkMode ? "bg-[rgb(17,17,17)]" : "bg-white"}`}>
      <AnimatedCanvas theme={darkMode ? "dark" : "light"} />
      <section className={`mx-auto flex flex-col h-screen justify-between`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection setPopupOn={setPopupOn} darkMode={darkMode} />
        <AboutMePopup
          popupOn={popupOn}
          setPopupOn={setPopupOn}
          aboutMeHeading={`ABOUT ME`}
          aboutMeParagraph={aboutMeParagraph}
          techHashTags={techHashTags}
          aboutMeHeading2={`FRONTEND DEVELOPER`}
          educations={educations}
          experience={experience}
          skills={skills}
          imageUrl={`/images/coder.svg`}
          darkMode={darkMode}
        />
        <span className="mb-16 max-sm:mb-[90px] -translate-y-1 mx-auto relative group">
          <Button text={"Latest Works"} handleClick={handleClick} />
          <AnimatedArrowElement
            element={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className={`w-5 absolute top-[120%] left-1/2 -translate-x-1/2 group-hover:top-[135%] transition-all duration-200 ${
                  darkMode ? "fill-white" : "fill-[rgb(25,134,171)]"
                }`}
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
