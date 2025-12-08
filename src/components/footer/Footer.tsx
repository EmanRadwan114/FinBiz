import React, { type ReactElement } from "react";
import styles from "./style.module.scss";
import logo from "@/assets/logo.svg";
import { FaTwitter, FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import Input from "../ui/input/Input";

const socialIcons: { title: string; icon: ReactElement }[] = [
  { title: "twitter", icon: <FaTwitter size={14} /> },
  { title: "facebook", icon: <FaFacebookF size={16} /> },
  { title: "instagram", icon: <FaInstagram size={20} /> },
  { title: "github", icon: <FaGithub size={18} /> },
];

const companyLinks = ["Service", "Resources", "About us"];

const helpLinks = ["Customer Support", "Terms & Conditions", "Privacy Policy"];

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles["footer-content"]}>
          {/* 1st col */}
          <div className={styles["first-col"]}>
            <Link to="/">
              <div className={styles.logo}>
                <img src={logo} alt="finbizz brand logo" />
                <p>FinBizz</p>
              </div>
            </Link>
            <p>
              Data analysis software is a type of software tool used <br /> for
              data analysis and reporting.
            </p>

            <div className={styles["social-icons"]}>
              {socialIcons.map((icon) => (
                <div className={styles.icon} key={icon.title}>
                  <a>{icon.icon}</a>
                </div>
              ))}
            </div>
          </div>

          {/* 2nd col ==> company */}
          <div className={styles["second-col"]}>
            <h2>Company</h2>
            <ul>
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to={"/"}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3rd col ==> help */}
          <div className={styles["third-col"]}>
            <h2>Help</h2>
            <ul>
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to={"/"}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4th col */}
          <div className={styles["fourth-col"]}>
            <h2>Subscribe to Newsletter</h2>
            <Input
              type="email"
              placeholder="Enter email address"
              submitText="Join"
              inputWidth="60%"
              btnWidth="36%"
            />
          </div>
        </div>

        {/* copyrights */}
        <div className={styles.copyright}>
          <p>&copy; Copyright 2024, All Rights Reserved by FinBiz</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
