import React from "react";
import styles from "./style.module.scss";
import starImg from "@/assets/star.svg";
import quotationMarkImg from "@/assets/inverted-comma.png";
import quotationMarkImgDark from "@/assets/inverted-comma-dark.png";
import { useTheme } from "next-themes";

interface IProps {
  reviewContent: string;
  userImg: string;
  username: string;
}

const SliderCard: React.FC<IProps> = ({ reviewContent, userImg, username }) => {
  const { resolvedTheme } = useTheme();
  return (
    <div className={styles.card}>
      <p className={styles["review-content"]}>{reviewContent}</p>
      <div className={styles["user-rate"]}>
        <div className={styles["rate-box"]}>
          <img
            src={userImg}
            alt="user profile image"
            className={styles["user-img"]}
          />
          <div className={styles.user}>
            <h3 className={styles.username}>{username}</h3>
            <span className={styles.stars}>
              {Array.from({ length: 5 }).map((_, indx) => (
                <img src={starImg} alt="rate star" key={indx} />
              ))}
            </span>
          </div>
        </div>
        <img
          src={
            resolvedTheme === "light" ? quotationMarkImg : quotationMarkImgDark
          }
          alt="quotation mark"
          className={styles["quotation-mark"]}
        />
      </div>
    </div>
  );
};

export default SliderCard;
