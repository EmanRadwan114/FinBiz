import React from "react";
import styles from "./style.module.scss";
import AnalysisCard from "../ui/analysis-card/AnalysisCard";
import img1 from "@/assets/team1.svg";
import img2 from "@/assets/team2.svg";
import img3 from "@/assets/team3.svg";
import img4 from "@/assets/team4.svg";
import img5 from "@/assets/team5.svg";

const teamImgs = [img1, img2, img3, img4, img5];

const ThrdCard: React.FC = () => {
  return (
    <AnalysisCard
      title="Easy collaboration"
      textContent="Seamlessly collaborate with your team 
members like never before."
    >
      <div className={styles["outer-circle"]}>
        <div className={styles["inner-circle"]}>
          {teamImgs.map((img, indx) => (
            <img src={img} alt="team member photo" key={indx} />
          ))}
        </div>
      </div>
    </AnalysisCard>
  );
};

export default ThrdCard;
