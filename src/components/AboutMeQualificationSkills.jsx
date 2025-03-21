import { useState } from "react";
import ToolTip2 from "./ToolTip2";

export default function AboutMeQualificationSkills() {
  const [elementClick, setElementClick] = useState(null);

  const handleClick = (id) => {
    setElementClick((prev) => (prev === id ? null : id));
  };

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

  return (
    <div className="flex gap-8 max-[400px]:gap-4 max-[300px]:justify-center mt-14">
      {skills.map((skill, i) => {
        return (
          <div
            key={i}
            className="text-5xl max-[300px]:text-4xl relative group"
            onClick={() => handleClick(skill.id)}
          >
            <i className={`${skill.icon}`}></i>
            <ToolTip2
              name={skill.name}
              textColor={skill.textColor}
              bgColor={skill.bgColor}
              elementClick={elementClick === skill.id}
            />
          </div>
        );
      })}
    </div>
  );
}
