import React from "react";
import banner_image from "../../../assets/Sharon31.jpg";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiBowTieRibbon } from "react-icons/gi";
import cv from "../../../assets/sharon_resume.pdf";
import { FaUserGraduate } from "react-icons/fa";
import ContactCard from "../ContactMe/ContactCard";
import SkillCard from "../Skills/SkillCard";
import AboutCard from "./AboutCard";

const AboutMe = ({id}) => {
  return (
    <section className="pt-1" id={id}>
      <div
        className="mt-24"
        data-aos="fade-in"
        data-aos-duration="900"
        data-aos-delay="400"
      >
        <img
          src={banner_image}
          alt="Profile Picture"
          className="mx-auto w-8/12 sm:w-6/12 md:hidden rounded-xl"
        />
        <h1
          className="text-neutralGrey md:text-xl mt-12 font-bold text-center"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          About
        </h1>
        <h1
          className=" mt-8 md:text-5xl text-greenPrimary text-3xl font-bold text-center"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-delay="400"
        >
          About Me
        </h1>
      </div>
      <div className="lg:mx-20 md:mx-12 mx-6 flex justify-center items-top md:mt-20 mt-6">
        <div
          className="hidden md:block mt-24 md:mt-0 w-4/12 max-w-md overflow-hidden"
          data-aos="fade-in"
          data-aos-duration="900"
          data-aos-delay="400"
        >
          <img src={banner_image} alt="Profile Picture" className="rounded-xl" />
        </div>
        <div className="md:ml-14 md:w-7/12 xl:w-7/12 relative">
          <div className="sm:flex space-y-6 sm:space-y-0 lg:mx-0 sm:space-x-5 lg:justify-start justify-between">
            <AboutCard
              topic="Experience"
              desc1="1+ Year"
              desc2="Front End Development"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="900"
              icon={<GiBowTieRibbon />}
            />
            <AboutCard
              topic="Education"
              desc1="B-Tech"
              desc2="Computer Science & Engineering"
              data-aos="fade-right"
              data-aos-delay="800"
              data-aos-duration="900"
              icon={<FaUserGraduate />}
            />
          </div>
          <p
            className="mt-7 leading-7 float-left font-[400] text-neutralDGrey  text-justify md:text-start"
            data-aos="fade-up"
            data-aos-delay="1100"
            data-aos-duration="900"
          >
            I am a passionate React.js developer dedicated to creating seamless
            and engaging user experiences. With a love for clean code and
            innovative design, I bring web applications to life through a
            thoughtful and user-centric approach. I thrive in collaborative
            environments where I can continually learn and push the boundaries
            of what's possible. Committed to excellence and continuous
            improvement, I aim to craft dynamic and responsive interfaces that
            delight users and drive success for businesses.
          </p>
          {/* <div
            className="flex justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="900"
          >
            <Button
              name="Download CV"
              download="Sharon's CV"
              href={cv}
              icon={<IoDocumentTextOutline className="text-xl mr-2" />}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
