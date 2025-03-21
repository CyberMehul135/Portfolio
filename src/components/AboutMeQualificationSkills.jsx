import { useState } from "react";
import ToolTip2 from "./ToolTip2";

export default function AboutMeQualificationSkills({ skills }) {
  const [elementClick, setElementClick] = useState(null);

  const handleClick = (id) => {
    setElementClick((prev) => (prev === id ? null : id));
  };

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
