import React from "react";
import ProjectCard from "../Projects/ProjectCard";
import cookify from "../../assets/cookify.png";
import ai_image_generator from "../../assets/ai_image_generator.png";
import netflix_clone from "../../assets/netflix-clone.png";
import portfolio from "../../assets/portfolio2.png";

const Projects = ({id}) => {
  return (
    <section className="pt-1" id={id}>
      <div className="mx-auto max-w-[1900px]">
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
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <ProjectCard
              title="Cookify"
              description="Cookify is a responsive recipe finder website using React JS, Tailwind CSS & Edamam API, where users can search for recipes by dish or ingredient."
              image={cookify}
              liveLink="https://cookify-sharon.netlify.app/"
              gitHubLink="https://github.com/sharonthankachan/Cookify"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
            <ProjectCard
              title="Personal Portfolio"
              description="Designed and developed a responsive personal portfolio website showcasing projects, skills, and contact details."
              image={portfolio}
              liveLink="https://sharonthankachan.vercel.app/"
              gitHubLink="https://github.com/sharonthankachan/Sharon-Portfolio-Website"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
            <ProjectCard
              title="Netflix Clone"
              description="Developed a Netflix clone interface using React JS, CSS and the TMDB API. Implemented various movie genre sections to enhance user experience."
              image={netflix_clone}
              liveLink="https://netflix-clone-sharon.vercel.app/"
              gitHubLink="https://github.com/sharonthankachan/Netflix-Clone"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
          >
            <ProjectCard
              title="AI Image Generator"
              description="Developed an AI Image Generator web application enabling text-to-image conversion using React JS and the OpenAI API."
              image={ai_image_generator}
              liveLink="https://ai-image-generator-sharon.netlify.app/"
              gitHubLink="https://github.com/sharonthankachan/AI_Image_Generator"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
