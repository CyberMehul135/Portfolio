import SocialMediaLinks from "../components/SocialMediaLinks";
import Button from "./Button";

export default function HeroSection() {
  return (
    <>
      <section className=" w-full text-white px-10 relative max-sm:px-1">
        <div className="flex justify-between max-w-[1600px] mx-auto">
          <span>
            <span className="flex flex-col z-10 relative left-1/4 -mt-1 max-sm:-mt-[230px]">
              <span className="text-7xl font-bold mb-8 max-lg:text-6xl max-sm:text-4xl max-sm:mb-3">
                Cyber Mehul
              </span>
              <span className="text-xl">
                <b className="text-blue-400">Frontend</b> Developer
              </span>
              <span className="mt-10 flex items-center relative">
                <span className="group">
                  <Button text={"About Me"} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-7 fill-white absolute top-2 left-28 group-hover:left-32 transition-all duration-300 max-sm:hidden"
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
              className="absolute top-0 left-1/2 -translate-y-[27%] -translate-x-1/2 h-auto w-[410px] max-sm:w-[300px] max-sm:-top-10 max-sm:-translate-x-[54%]"
            />
          </span>

          <span>
            <SocialMediaLinks />
          </span>
        </div>
      </section>
    </>
  );
}
