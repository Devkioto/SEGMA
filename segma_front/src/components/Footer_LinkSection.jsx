import React from "react";

const Footer_LinkSection = ({ sectionHead, links }) => {
    return (
      <div className="flex flex-col gap-4 items-center md:items-end">
        <h3 className="font-semibold text-[#8E1128]">{sectionHead}</h3>
        <ul className="flex flex-col gap-4 items-center md:items-end">
          {links.map((link, index) => (
            <li className="text-center" key={index} >{link}</li>
          ))}
        </ul>
      </div>
    );
  };
  

export default Footer_LinkSection;
