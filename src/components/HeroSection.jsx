import SocialMediaLinks from "../components/SocialMediaLinks";
import Button from "./Button";

export default function HeroSection({ setPopupOn, darkMode }) {
  const handleClick = () => {
    setPopupOn(true);
  };

  return (
    <section className=" w-full text-white px-10 relative max-sm:px-1">
      <div className="flex justify-between max-w-[1600px] mx-auto">
        <span>
          <span className="flex flex-col z-10 relative left-1/4 -mt-1 max-sm:-mt-[-160px] max-sm:absolute max-sm:-top-12 max-sm:left-1/2 max-sm:-translate-x-[50%]">
            <span
              className={`text-7xl font-bold mb-8 max-lg:text-6xl max-sm:text-4xl max-sm:mb-3 font-sans max-sm:hidden ${
                darkMode
                  ? "text-white"
                  : "bg-gradient-to-r from-[rgb(29,41,99)] to-[rgb(21,146,180)] bg-clip-text text-transparent"
              }`}
            >
              Cyber Mehul
            </span>
            <span className="text-xl font-sans max-sm:text-center max-sm:text-[17px]">
              <b className="text-blue-400 font-sans">Frontend</b>{" "}
              <span
                className={`${
                  darkMode ? "text-white" : "text-blue-500 font-semibold"
                }`}
              >
                Developer
              </span>
            </span>
            <span className="mt-3 flex items-center max-sm:justify-center relative">
              <span className="group">
                <Button text={"About Me"} handleClick={handleClick} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={`w-7 absolute top-2 left-[113px] group-hover:left-[130px] transition-all duration-300 max-sm:hidden ${
                    darkMode ? "fill-white" : "fill-[rgb(46,97,112)]"
                  } `}
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </span>
              <span className="z-10"></span>
            </span>
          </span>
          <img
            src="/images/CM_Gradient_Double_Stroke_Final.png"
            alt=""
            className="absolute top-0 left-1/2 -translate-y-[27%] -translate-x-1/2 h-auto w-[410px] max-sm:w-[300px] max-sm:-top-24 max-sm:-translate-x-[56%]"
          />
        </span>

        <span>
          <SocialMediaLinks
            wantHorizontally={false}
            color={"text-gray-500"}
            hoverColor={`hover:text-[#1788AE]`}
            width={`w-7`}
            mobileWidth={`max-md:w-6`}
            mobileColor={`max-md:text-white`}
            darkMode={darkMode}
          />
        </span>
      </div>
    </section>
  );
}
