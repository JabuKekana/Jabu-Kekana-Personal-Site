import { useState } from "react";
import { skillGroups } from "../../data/siteData";
import SkillGroup from "./SkillGroup";
import "./styles/skills.css";

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">My Toolkit</h2>
      <span className="section__subtitle">Building with precision</span>

      <div className="skills__container container grid">
        <div>
          {skillGroups.slice(0, 2).map((group, index) => (
            <SkillGroup
              key={group.title}
              group={group}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
        <div>
          {skillGroups.slice(2).map((group, index) => {
            const realIndex = index + 2;
            return (
              <SkillGroup
                key={group.title}
                group={group}
                open={openIndex === realIndex}
                onToggle={() => setOpenIndex(openIndex === realIndex ? -1 : realIndex)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
