import SocialMediaLinks from "../components/SocialMediaLinks";
import Button from "./Button";

export default function HeroSection() {
  return (
    <>
      <section className=" w-full text-white px-10 relative max-sm:px-1">
        <div className="flex justify-between max-w-[1600px] mx-auto">
          <span>
            <span className=" flex flex-col z-10 relative left-1/4 -mt-1">
              <span className="text-7xl font-bold mb-8 max-lg:text-6xl max-sm:text-4xl max-sm:mb-3">
                Cyber Mehul
              </span>
              <span className="text-xl">
                <i>Frontend</i> Developer
              </span>
              <span className="mt-10 flex items-center relative">
                <span className="group">
                  <Button text={"About Me"} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-7 fill-white absolute top-2 left-28 group-hover:left-32 transition-all duration-300"
                  >
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                  </svg>
                </span>
                <span className="z-10"></span>
              </span>
            </span>
            <svg
              viewBox="0 0 406 368"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-1/2 -translate-y-[27%] -translate-x-1/2 h-auto w-[510px] max-sm:w-[350px] max-sm:-top-10"
            >
              <path
                d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                stroke="#1F2667"
                stroke-opacity="0.9"
                stroke-width="10"
              />
              <path
                d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                stroke="url(#paint0_linear)"
                stroke-width="10"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="205.549"
                  y1="20.0169"
                  x2="204.338"
                  y2="342.461"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1595B6" />
                  <stop offset="1" stop-color="#1595B6" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>

          <span>
            <SocialMediaLinks />
          </span>
        </div>
      </section>
    </>
  );
}
