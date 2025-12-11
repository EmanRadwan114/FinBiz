import React, { type ReactElement } from "react";
import styles from "./style.module.scss";
import logo from "@/assets/logo.svg";
import { FaTwitter, FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import Input from "../ui/input/Input";
import { useTranslation } from "react-i18next"; // <-- Assuming this is your hook import

const socialIcons: { title: string; icon: ReactElement }[] = [
  { title: "twitter", icon: <FaTwitter size={14} /> },
  { title: "facebook", icon: <FaFacebookF size={16} /> },
  { title: "instagram", icon: <FaInstagram size={20} /> },
  { title: "github", icon: <FaGithub size={18} /> },
];

// Define the keys for mapping over
const companyLinkKeys = [
  "footer.company_section.service",
  "footer.company_section.resources",
  "footer.company_section.about_us",
];

const helpLinkKeys = [
  "footer.help_section.customer_support",
  "footer.help_section.terms_and_conditions",
  "footer.help_section.privacy_policy",
];

const Footer: React.FC = () => {
  // 1. Destructure the translation function 't'
  const { t } = useTranslation();

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
              {/* Key: footer.description */}
              {t("footer.description")}
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
            {/* Key: footer.company_section.title */}
            <h2>{t("footer.company_section.title")}</h2>
            <ul>
              {/* Map over keys and translate each one */}
              {companyLinkKeys.map((keyPath) => (
                <li key={keyPath}>
                  <Link to={"/"}>{t(keyPath)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3rd col ==> help */}
          <div className={styles["third-col"]}>
            {/* Key: footer.help_section.title */}
            <h2>{t("footer.help_section.title")}</h2>
            <ul>
              {/* Map over keys and translate each one */}
              {helpLinkKeys.map((keyPath) => (
                <li key={keyPath}>
                  <Link to={"/"}>{t(keyPath)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4th col */}
          <div className={styles["fourth-col"]}>
            {/* Key: footer.newsletter_section.title */}
            <h2>{t("footer.newsletter_section.title")}</h2>
            <Input
              type="email"
              // Key: footer.newsletter_section.email_placeholder
              placeholder={t("footer.newsletter_section.email_placeholder")}
              // Key: footer.newsletter_section.join_button
              submitText={t("footer.newsletter_section.join_button")}
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
