import React from "react";
import styles from "./style.module.scss";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";
// ... (imports for images)
import person1Img from "@/assets/person1.svg";
import person2Img from "@/assets/person2.svg";
import person3Img from "@/assets/person3.svg";
import person4Img from "@/assets/person4.svg";
import { useTranslation } from "react-i18next";

const imgs = [person1Img, person2Img, person3Img, person4Img];

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section className={styles["hero-sec"]}>
      <div className="container">
        {/* sub heading */}
        <Button variant="outlined" className={styles["sub-heading"]}>
          {/* Applied t() to the "new" badge */}
          <span className={styles.new}>{t("hero_section.new_badge")}</span>

          <span className={styles.title}>{t("hero_section.tagline")}</span>
          {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
        </Button>

        {/* content */}
        <div className={styles.content}>
          <h1 className={styles["site-h1"]}>{t("hero_section.title")}</h1>
          <p className={styles["hero-desc"]}>{t("hero_section.subtitle")}</p>

          {/* input */}
          <div className={styles.input}>
            <Input
              type="text"
              placeholder={t("hero_section.email_placeholder")}
              submitText={t("hero_section.book_demo_button")}
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
              {t("reviews.count")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
