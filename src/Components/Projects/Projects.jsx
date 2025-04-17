import React from "react";
import ProjectCard from "../Projects/ProjectCard";
import cookify from "../../assets/cookify.png";
import music_producer from "../../assets/music_producer.png";
import netflix_clone from "../../assets/netflix-clone.png";
import portfolio from "../../assets/portfolio2.png";
import workflow_img from "../../assets/workflow_img.png";

const Projects = ({ id }) => {
  return (
    <section className="pt-1" id={id}>
      <div className="mx-auto max-w-[1650px]">
        <div className="lg:mx-20 md:mx-12 mx-6">
          <div className="md:mt-32 mt-24">
            <h1
              className="text-neutralGrey md:text-xl font-bold text-center"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              Projects
            </h1>
            <h1
              className="text-greenPrimary mt-8 md:text-5xl text-3xl font-bold text-center"
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="400"
            >
              Personal Projects
            </h1>
          </div>
          <div className="flex-wrap grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:flex-nowrap md:mt-28 mt-16 mb-28 gap-y-6 sm:gap-6 md:gap-x-6">
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <ProjectCard
                title="Cookify"
                description="A responsive recipe finder website built with React JS, Tailwind CSS, and Edamam API. Users can search for recipes by dish or ingredient."
                image={cookify}
                liveLink="https://cookify-sharon.netlify.app/"
                gitHubLink="https://github.com/sharonthankachan/Cookify"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <ProjectCard
                title="Personal Portfolio"
                description="A responsive personal portfolio website showcasing projects, skills, and contact details, designed and developed with modern web technologies."
                image={portfolio}
                liveLink="https://sharonthankachan.vercel.app/"
                gitHubLink="https://github.com/sharonthankachan/Sharon-Portfolio-Website"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="800"
            >
              <ProjectCard
                title="Music Producer Website"
                description="A visually appealing music producer website template created using Tailwind CSS, featuring advanced styling and attractive effects."
                image={music_producer}
                liveLink="https://sharon-music-producer.vercel.app/"
                gitHubLink="https://github.com/sharonthankachan/Music-Producer-Website"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              <ProjectCard
                title="Workflow Builder App"
                description="A workflow builder app built with react-flow. Allows users to drag and drop nodes onto a canvas and create and update relationships between nodes."
                image={workflow_img}
                liveLink="https://sharon-workflow-builder.vercel.app/"
                gitHubLink="https://github.com/sharonthankachan/Workflow-Builder-App"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1200"
            >
              <ProjectCard
                title="Netflix Clone"
                description="A Netflix clone interface developed with React JS, CSS, and TMDB API. Includes various movie genre sections for an enhanced user experience."
                image={netflix_clone}
                liveLink="https://netflix-clone-sharon.vercel.app/"
                gitHubLink="https://github.com/sharonthankachan/Netflix-Clone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
