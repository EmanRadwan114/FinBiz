import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import logo from "@/assets/logo.svg";
import { FaChevronDown } from "react-icons/fa6";
import { PiMoonThin, PiSunThin } from "react-icons/pi";
import Button from "../ui/button/Button";
import { useTheme } from "next-themes";
// Use 'react-router-dom' for standard routing
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { AiOutlineMenu } from "react-icons/ai";

// Define the keys that match your JSON structure within the 'header' object
const navLinkKeys = [
  "header.product",
  "header.pages",
  "header.integrations",
  "header.blog",
  "header.pricing",
];

const Navbar: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = window.innerWidth <= 1280;

  // Destructure the t (translate) function
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // ———————————————————— handlers and effects ————————————————————
  const changeTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // This effect changes the global document direction based on language
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);

  const changeLang = () => {
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.container}>
            {/* logo */}
            <Link to="/">
              <div className={styles.logo}>
                {/* Use the specific key path for the alt tag */}
                <img src={logo} alt={t("alt_logo")} />
                <p>FinBiz</p>
              </div>
            </Link>

            {/* navmenu */}
            {isMobile ? (
              <div className={styles["mobile-menu"]}>
                <AiOutlineMenu
                  size={28}
                  className={styles["menu-icon"]}
                  onClick={() => setIsOpen((prev) => !prev)}
                />
                {isOpen && (
                  <div className={styles["menu-body"]}>
                    <>
                      <ul className={styles["nav-links"]}>
                        {navLinkKeys.map((linkKey) => (
                          <li key={linkKey}>
                            <Link to={linkKey.split(".").pop() || "/"}>
                              {t(linkKey)}

                              {linkKey.endsWith("pages") && (
                                <FaChevronDown size={12} />
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {/* actions */}
                      <div className={styles["nav-actions"]}>
                        {/* language switch */}
                        <div className={styles.lang} onClick={changeLang}>
                          <Button variant="none">
                            {/* The button text displays the alternative language code */}
                            {isArabic ? "en" : "ar"}
                          </Button>
                        </div>

                        {/* theme change */}
                        {resolvedTheme === "dark" ? (
                          <PiSunThin
                            size={40}
                            strokeWidth={6}
                            onClick={changeTheme}
                          />
                        ) : (
                          <PiMoonThin
                            size={40}
                            strokeWidth={2}
                            onClick={changeTheme}
                          />
                        )}

                        <Button
                          variant="outlined"
                          paddingHorizontal={24}
                          paddingVertical={16}
                        >
                          {/* Use the specific key path for "Get started" */}
                          {t("header.get_started")}
                        </Button>
                      </div>
                    </>
                  </div>
                )}
              </div>
            ) : (
              <>
                <ul className={styles["nav-links"]}>
                  {navLinkKeys.map((linkKey) => (
                    <li key={linkKey}>
                      {/* Assumes route paths match the last part of the key */}
                      <Link to={linkKey.split(".").pop() || "/"}>
                        {/* Use the 't' function with the full nested key */}
                        {t(linkKey)}

                        {/* Check if the key ends with 'pages' to show dropdown icon */}
                        {linkKey.endsWith("pages") && (
                          <FaChevronDown size={12} />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* actions */}
                <div className={styles["nav-actions"]}>
                  {/* language switch */}
                  <div className={styles.lang} onClick={changeLang}>
                    <Button variant="none">
                      {/* The button text displays the alternative language code */}
                      {isArabic ? "en" : "ar"}
                    </Button>
                  </div>

                  {/* theme change */}
                  {resolvedTheme === "dark" ? (
                    <PiSunThin
                      size={40}
                      strokeWidth={6}
                      onClick={changeTheme}
                    />
                  ) : (
                    <PiMoonThin
                      size={40}
                      strokeWidth={2}
                      onClick={changeTheme}
                    />
                  )}

                  <Button
                    variant="outlined"
                    paddingHorizontal={24}
                    paddingVertical={16}
                  >
                    {/* Use the specific key path for "Get started" */}
                    {t("header.get_started")}
                  </Button>
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
      <div className={styles.line}></div>
    </>
  );
};

export default Navbar;
