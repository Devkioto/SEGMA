import React from "react";
import Layout from "../components/Layout";
import img_community from "../assets/images/community_show.png";
const Community = () => {
  return (
    <Layout>
      <div className="h-[1934px] flex flex-col items-center gap-4">
        <div className="h-[564px] w-full flex justify-center items-center relative">
          <div className="w-[831px] flex flex-col items-center  z-10 justify-between gap-4">
            <h1 className="w-[767px] text-[#FACC15] text-[64px] text-center align-middle font-meduim tracking-tight ">
              La Passion de l'Horlogerie
            </h1>
            <span className="w-[720px] text-[#D1D5DB] text-[20px] text-warp text-center align-middle">
              Rejoignez notre communauté passionnée de collectionneurs et
              d'amateurs de montres
            </span>
            <button
              className="w-[287px] h-[62px] bg-black cursor-pointer  rounded-md text-center text-[18px] text-white font-meduim"
              type="button">
              Rejoindre la communauté
            </button>
          </div>
          <div className="absolute inset-0">
            <img className="brightness-50" src={img_community} alt="" />
          </div>
        </div>
        <div className="h-[312px] w-[1280px] flex flex-col gap-4 items-center ">
            <div>form_Title</div>
            <div>forums</div>
        </div>
        <div>galerie</div>
        <div>events</div>
      </div>
    </Layout>
  );
};

export default Community;
