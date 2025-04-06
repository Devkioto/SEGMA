import React from "react";

const Community_Section = ({ sectionTitle, sectionDescription, children }) => {
  return (
    <div
      className="min-h-[312px] w-6/7
    flex flex-col gap-4 items-center ">
      <div className="min-h-[84px] w-6/7 flex flex-col items-center">
        <h2 className="text-[36px] font-semibold text-[#CD402E]">
          {sectionTitle}
        </h2>
        <p className="text-[20px] text-[#6B7280] text-center">
          {sectionDescription}
        </p>
      </div>
      <div className=" w-6/7 flex flex-wrap justify-center items-center gap-8">
        {children}
      </div>
    </div>
  );
};

export default Community_Section;
