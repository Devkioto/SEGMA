import React from "react";
import Layout from "../components/Layout";
import img_community from '../assets/images/community_show.png'
const Community = () => {
  return (
    <Layout>
      <div className="h-[1934px] flex flex-col gap-4">
        <div className="h-[564px]">
            <div className="w-[831px] absolute">
                <h1>passion</h1>
                <p>something here</p>
                <button type="button">visit</button>
            </div>
            <div>
                <img src={img_community} alt="" />
            </div>
        </div>
        <div>forums</div>
        <div>galerie</div>
        <div>events</div>
      </div>
    </Layout>
  );
};

export default Community;
