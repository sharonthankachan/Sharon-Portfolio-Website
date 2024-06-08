import React from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";

const SkillCard = ({ domain, contents, ...rest }) => {
  return (
    <div >
    <div className=" rounded-3xl border border-1 border-gray-500 py-7 md:py-12 sm:mx-3" >
      <h1 className="text-center text-2xl font-bold text-neutralDGrey">{domain}</h1>
      <div className="flex justify-center mt-5">
        <ul className="mt-6 grid grid-cols-2 lg:gap-x-24 gap-x-8 gap-y-4">
          {contents.map((item, index) => (<div className="flex">
          <BiSolidBadgeCheck className="mr-2 mt-1 text-greenPrimary" />
            <li key={index} className="flex flex-col list-disc list-inside">
              <div className="flex items-center font-semibold text-[#263238]">
                {item.name}
              </div>
              <p className=" text-neutralGrey text-xs">{item.level}</p>
            </li></div>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default SkillCard;
