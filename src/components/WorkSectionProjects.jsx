import WorkSectionSingleProject from "./WorkSectionSingleProject";
import WorkSectionVerticleLine from "./WorkSectionVerticleLine";

export default function WorkSectionProjects({ darkMode }) {
  const projectTechnologies = {
    ecommerce: [
      "#react.js",
      "#tailwind.css",
      "#swiper.js",
      "#javascript",
      "#css",
      "#figma",
    ],
    todoList: ["#react.js", "#tailwind.css", "#javascript", "#css"],
  };

  return (
    <div className="py-[90px] flex flex-col gap-24 relative max-sm:py-[40px]">
      <WorkSectionVerticleLine />

      <WorkSectionSingleProject
        projectUrl={`https://boatcyber.netlify.app/`}
        projectImage={`/projectImages/Ecommerceproject.png`}
        isImageLaptopType={true}
        toolTipText={`BoatCyber`}
        toolTipColor={`bg-red-500`}
        toolTipAfterColor={`after:bg-red-500`}
        projectName={`BoatCyber`}
        projectType={`(E-commerce Project)`}
        projectThemeColor={`text-red-500`}
        ProjectDescription={`BoatCyber is a modern e-commerce platform for audio products like earphones, earbuds, and speakers. Designed and built the entire frontend from scratch using React and Tailwind CSS.`}
        projectTechnologies={projectTechnologies.ecommerce}
        isImgDirectionLeft={true}
        darkMode={darkMode}
      />

      <WorkSectionSingleProject
        projectUrl={`https://dailytasksburn.netlify.app/`}
        projectImage={`/projectImages/TodoAppTablet.png`}
        isImageLaptopType={false}
        toolTipText={`Todo List`}
        toolTipColor={`bg-blue-500`}
        toolTipAfterColor={`after:bg-blue-500`}
        projectName={`Todo List`}
        projectType={`(Daily-Task Project)`}
        projectThemeColor={`text-blue-500`}
        ProjectDescription={`A minimal and responsive Todo List App to manage daily tasks. 
            Built with React and Tailwind CSS, featuring dark mode and smooth UI animations.`}
        projectTechnologies={projectTechnologies.todoList}
        isImgDirectionLeft={false}
        darkMode={darkMode}
      />
    </div>
  );
}
