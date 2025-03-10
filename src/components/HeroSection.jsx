import SocialMediaLinks from "../components/SocialMediaLinks";

export default function HeroSection() {
  return (
    <>
      <section className=" w-full text-white px-10">
        <div className="flex justify-between">
          <span className="flex">
            <span className="flex flex-col z-10">
              <span className="text-7xl font-bold mb-8">Cyber Mehul</span>
              <span className="text-xl">
                <i>Frontend</i> Developer
              </span>
            </span>
            <span>
              <svg
                width="406"
                height="368"
                viewBox="0 0 406 368"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
          </span>

          <span>
            <SocialMediaLinks />
          </span>
        </div>

        {/* <div>Latest Works</div> */}
      </section>
    </>
  );
}
