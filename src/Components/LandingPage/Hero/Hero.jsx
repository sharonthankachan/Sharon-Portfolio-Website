import React from "react";
import { Typewriter } from "react-simple-typewriter";
import banner_img from "../../../assets/Sharon4.jpg";
import cv from "../../../assets/sharon_resume.pdf";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import "./Hero.css";
import { Link, Events, scrollSpy } from "react-scroll";

const Hero = ({ id }) => {
  const handleDone = () => {};
  const handleType = () => {};

  return (
    <section className="overflow-hidden" id={id}>
      <div className=" md:mx-10 pl-1 flex xl:gap-24 md:gap-12 flex-col md:flex-row items-center pt-12 md:pt-16 pb-12 justify-center">
        <div className="sm:mx-6 max-w-[35rem] pb-9 md:order-1 order-2 md:mt-24 mt-4 mx-4 md:mx-0 lg:mx-0">
          <h1
            className="md:text-xl md:text-md text-neutralDGrey text-center md:text-start"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            Hello, I'm
          </h1>
          <h1
            className="md:text-4xl font-bold text-xl md:ml-0 mt-2 text-neutralDGrey  text-center md:text-start"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="700"
          >
            Sharon Thankachan
          </h1>
          <h1
            className="lg:text-6xl md:text-5xl sm:text-5xl xl:w-full text-4xl md:mt-3 mt-2 md:ml-0 text-neutralSilver text-center md:text-start"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="700"
          >
            <span className="text-greenPrimary font-semibold">
              Web{" "}
              <Typewriter
                words={["Designer", "Developer"]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>
          <p
            className="text-neutralGrey text-sm mt-6 text-center md:text-start"
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="900"
          >
            "Experienced Front-End Developer specializing in creating sleek,
            responsive web applications. Let's bring your ideas to life!"
          </p>
          <div className="flex justify-center md:justify-start mt-4 gap-4">
            <div
              data-aos="fade-up"
              data-aos-delay="1500"
              data-aos-duration="900"
            >
              <a
                className="md:px-4 lg:px-6 px-6 flex justify-center hover:cursor-pointer w-auto items-center py-4 md:text-sm text-xs bg-greenPrimary hover:bg-[#285a2a] hover:text-white border border-greenPrimary hover:border-green-900 transition duration-500 text-white rounded mt-6"
                name="Download CV"
                download="Sharon's CV"
                href={cv}
              >
                <IoDocumentTextOutline className="text-xl mr-2" />
                Download CV
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="1700"
              data-aos-duration="900"
            >
              <Link
                className="md:px-4 lg:px-6 px-6 flex justify-center hover:cursor-pointer w-auto items-center py-4 md:text-sm text-xs bg-white hover:bg-neutralDGrey hover:text-white border border-neutralDGrey transition duration-500 text-neutralDGrey rounded mt-6"
                to="contact-me"
                smooth={true}
                duration={800}
                spy={true}
              >
                <IoIosContact className="text-xl mr-2" />
                Contact Me{" "}
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="flex mt-10 gap-5">
              <a
                data-aos="fade-left"
                data-aos-delay="1900"
                data-aos-duration="900"
                href="https://www.linkedin.com/in/sharon-thankachan/"
                target="_blank"
              >
                <div className="text-greenPrimary border border-1 border-greenPrimary p-2 rounded-full hover:bg-greenPrimary hover:text-white transition duration-300">
                  <TfiLinkedin />
                </div>
              </a>
              <a
                href="https://github.com/sharonthankachan"
                target="_blank"
                data-aos="fade-left"
                data-aos-delay="2100"
                data-aos-duration="900"
              >
                <div className="text-greenPrimary border border-1 border-greenPrimary p-2 text-lg rounded-full hover:bg-greenPrimary hover:text-white transition duration-300">
                  <TbBrandGithubFilled />
                </div>
              </a>
              <a
                href="mailto: sharonthankachan171@gmail.com"
                target="_blank"
                data-aos="fade-left"
                data-aos-delay="2300"
                data-aos-duration="900"
              >
                <div className="text-greenPrimary border border-1 border-greenPrimary p-2 text-lg rounded-full hover:bg-greenPrimary hover:text-white transition duration-300">
                  <GrMail />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="fade"
          data-aos-delay="900"
          data-aos-duration="1500"
          className="home_img mt-10 md:mt-0 min-w-[18.75rem]"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
