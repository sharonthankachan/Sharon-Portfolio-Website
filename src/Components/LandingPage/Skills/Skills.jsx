import React from "react";
import SkillCard from "./SkillCard";


const frontEnd = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "Bootstrap", level: "Advanced" },
  { name: "Tailwind", level: "Advanced" },
  { name: "React", level: "Advanced" },
];

const backEnd = [
  { name: "Node", level: "Basic" },
  { name: "Python", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
  { name: "Firebase", level: "Intermediate" },
  { name: "Mongo DB", level: "Basic" },
  { name: "Express", level: "Basic" },
];

const Skills = ({id}) => {
  return (
    <section className="" id={id}>
      <div className="lg:mx-20 md:mx-12 mx-6 pt-8">
        <div className="">
          <h1 className="text-neutralGrey md:text-xl mt-12 font-bold text-center" data-aos="fade-right" data-aos-duration="900">
            Explore My
          </h1>
          <h1 className=" mt-8 md:text-5xl text-greenPrimary text-3xl font-bold text-center" data-aos="fade-right" data-aos-duration="900" data-aos-delay="400">
            Skills
          </h1>
        </div>
      </div>
      <div className="pb-16 mt-24 grid md:grid-cols-2 grid-cols-1 justify-center space-y-4 md:space-y-0 xl:mx-52 md:mx-16 mx-3 sm:mx-2">
        <div
          className=""
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="800"
        >
          <SkillCard domain={"Front End"} contents = {frontEnd} />
        </div>
        <div
          className=""
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="800"
        >
          <SkillCard domain={"Back End"} contents = {backEnd} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
