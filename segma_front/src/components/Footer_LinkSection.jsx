import React from "react";

const Footer_LinkSection = ({ sectionHead, links }) => {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-[#8E1128]">{sectionHead}</h3>
        <ul className="flex flex-col gap-4">
          {links.map((link, index) => (
            <li key={index} >{link}</li>
          ))}
        </ul>
      </div>
    );
  };
  

export default Footer_LinkSection;
