import React from "react";
import Layout from "../components/Layout";
import img_community from "../assets/images/community_show.png";
import watchG from "../assets/images/watch_g.png";
import watchG2 from "../assets/images/watch_g1.png";
import watchG3 from "../assets/images/watch_g2.png";
import pers from "../assets/images/pers.png";
import pers2 from "../assets/images/pers1.png";
import pers3 from "../assets/images/pers2.png";
import {
  faClock,
  faCrown,
  faNewspaper,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import Forum_Card from "../components/Forum_Card";
import Community_Section from "../components/Community_Section";
import Galerie_Card from "../components/Galerie_Card";
import Event_Card from "../components/Event_Card";
import { motion } from "framer-motion";
const Community = () => {
  
  const textAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <Layout>
      <div className="flex flex-col w-full items-center gap-4">
        <div className="h-[564px] w-full flex justify-center items-center relative">
          <div className="w-[831px] flex flex-col items-center  z-10 justify-between gap-4">
            <motion.h1
              variants={textAnimation}
              initial="hidden"
              animate="visible"
              className="md:w-[767px] text-wrap text-[#FACC15] text-[64px] text-center align-middle font-meduim tracking-tight leading-[1.2]"
            >
              La Passion de l'Horlogerie
            </motion.h1>
            <motion.span
              variants={textAnimation}
              initial="hidden"
              animate="visible"
              className="md:w-[720px] text-[#D1D5DB] text-[20px] text-wrap text-center align-middle"
            >
              Rejoignez notre communauté passionnée de collectionneurs et
              d'amateurs de montres
            </motion.span>
            <button
              className="w-[287px] h-[62px] bg-black cursor-pointer  rounded-md text-center text-[18px] text-white font-meduim"
              type="button"
            >
              className="w-[287px] h-[62px] mt-8 bg-[rgba(0,0,0,0.6)] cursor-pointer  rounded-md text-center text-[18px] text-white font-meduim"
              type="button">
              Rejoindre la communauté
            </button>
          </div>
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover brightness-50"
              src={img_community}
              alt=""
            />
          </div>
        </div>
        <Community_Section
          sectionTitle="Forums Populaires"
          sectionDescription=" Découvrez nos discussions les plus actives">
          <Forum_Card
            icon={faCrown}
            title="Montres de Luxe"
            description="3,456 discussions"
          />
          <Forum_Card
            icon={faClock}
            title="Montres de Vintage"
            description="2,789 discussions"
          />
          <Forum_Card
            icon={faTools}
            title="Questions Techniques"
            description="1,923 discussions"
          />

          <Forum_Card
            icon={faNewspaper}
            title="nouveautes"
            description="4,127 discussions"
          />
        </Community_Section>
        <Community_Section
          sectionTitle="Galerie des Membres"
          sectionDescription="Découvrez les collections de nos membres">
          <Galerie_Card
            watchImg={watchG}
            ownerImg={pers}
            title="Rolex Submariner"
            ownerName="Jean Dupont"
            numLikes={234}
            numComments={45}
          />
          <Galerie_Card
            watchImg={watchG2}
            ownerImg={pers2}
            title="Omega Speedmaster"
            ownerName="Marie Laurent"
            numLikes={189}
            numComments={32}
          />
          <Galerie_Card
            watchImg={watchG3}
            ownerImg={pers3}
            title="Patek Philippe"
            ownerName="Pierre Martin"
            numLikes={312}
            numComments={67}
          />
        </Community_Section>
        <Community_Section
          sectionTitle="Evénements à Venir"
          sectionDescription="Ne manquez aucun rendez-vous de l'horlogerie">
          <Event_Card
            date="5 AOÛT"
            place="Lyon, France"
            title="Atelier de Restauration"
            description="Apprenez les techniques de restauration des montres vintage"
          />
          <Event_Card
            date="15 juil"
            place="Genève, Suisse"
            title=" Watches & Wonders"
            description="Découvrez les dernières innovations de l'industrie horlogère"
          />
          <Event_Card
            date="23 JUIN"
            place="Paris, France"
            title="Salon International de l'Horlogerie"
            description="Le plus grand rassemblement d'amateurs de montres en France"
          />
        </Community_Section>
      </div>
    </Layout>
  );
};

export default Community;

