import { Typography } from "@material-tailwind/react";
import { Link } from "react-scroll";

const Footer = () => {
  const footerNavItems = [
    { name: "Home", link: "hero", offset: -300 },
    { name: "About Me", link: "about-me", offset: -100 },
    { name: "Projects", link: "projects", offset: 100 },
    { name: "Skills", link: "skills", offset: -100 },
    { name: "Contact Me", link: "contact-me", offset: -100 },
  ];

  return (
    <footer className="w-full px-10 pt-24 bg-neutralSilver">
      <div className=" mx-auto max-w-[1800px]">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-neutralSilver text-center md:justify-between">
        <Link
          className="md:text-2xl text-lg font-bold tracking-widest text-neutralDGrey cursor-pointer"
          to="hero"
          smooth={true}
          duration={800}
          spy={true}
        >
          sharon<span className="text-greenPrimary">_</span>
        </Link>
        <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
          {footerNavItems.map((item, index) => (
            <li key={index}>
              <Typography
                as="div"
                color="blue-gray"
                className="font-normal cursor-pointer transition-colors hover:text-greenPrimary focus:text-greenPrimary"
              >
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                >
                  {item.name}
                </Link>
              </Typography>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal pb-7">
        &copy; 2024 Sharon Thankachan
      </Typography>
      </div>
    </footer>
  );
};

export default Footer;
