import React from "react";
import styles from "./style.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import person1Img from "@/assets/person1.svg";
import person2Img from "@/assets/person2.svg";
import person3Img from "@/assets/person3.svg";
import person4Img from "@/assets/person4.svg";

const imgs = [person1Img, person2Img, person3Img, person4Img];

const HeroSection: React.FC = () => {
  return (
    <section className={styles["hero-sec"]}>
      {/* sub heading */}
      <Button variant="outlined" className={styles["sub-heading"]}>
        <span className={styles.new}>new</span>
        <span className={styles.title}>Introducing AI Automation</span>
        <FaArrowRight />
      </Button>

      {/* content */}
      <div className={styles.content}>
        <h1 className={styles["site-h1"]}>
          The Finance Solutions For Your Business
        </h1>
        <p className={styles["hero-desc"]}>
          Empower your finance team. The onestop plateform for all financial
          management of small and medium-sized business.
        </p>

        {/* input */}
        <div className={styles.input}>
          <Input
            type="text"
            placeholder="Enter your email adress"
            submitText="Book a Demo"
            inputWidth=""
            btnWidth=""
            variant="rounded"
          />
        </div>

        {/* users */}
        <div className={styles.reviews}>
          <div className={styles["users-imgs"]}>
            {imgs.map((img, indx) => (
              <img src={img} alt="user img" key={indx} />
            ))}
          </div>
          <span className={styles["reviews-count"]}>
            1,200+ reviews (4.9 of 5)
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
