import React, { useState } from "react";
import styles from "./style.module.scss";
import logo from "@/assets/logo.svg";
import { FaChevronDown } from "react-icons/fa6";
import { PiMoonThin, PiSunThin } from "react-icons/pi";
import Button from "../ui/button/Button";
import { useTheme } from "next-themes";
import { Link } from "react-router";

const navLinks = ["product", "pages", "integrations", "blog", "pricing"];

const Navbar: React.FC = () => {
  const [lang, setLang] = useState("ar");
  const { resolvedTheme, setTheme } = useTheme();

  //———————————————————————————————— handlers ————————————————————————————————
  const changeTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  const changeLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* logo */}
          <Link to="/">
            <div className={styles.logo}>
              <img src={logo} alt="finbizz brand logo" />
              <p>FinBiz</p>
            </div>
          </Link>

          {/* navlinks */}
          <ul className={styles["nav-links"]}>
            {navLinks.map((link) => (
              <li key={link}>
                <Link to={link}>
                  {link}
                  {link === "pages" && <FaChevronDown size={12} />}
                </Link>
              </li>
            ))}
          </ul>

          {/* actions */}
          <div className={styles["nav-actions"]}>
            {/* language switch */}
            <div className={styles.lang}>
              <Button variant="none" onClick={changeLang}>
                {lang}
              </Button>
            </div>
            {/* theme change */}
            {resolvedTheme === "dark" ? (
              <PiSunThin size={40} strokeWidth={6} onClick={changeTheme} />
            ) : (
              <PiMoonThin size={40} strokeWidth={2} onClick={changeTheme} />
            )}

            <Button
              variant="outlined"
              paddingHorizontal={24}
              paddingVertical={16}
            >
              Get started
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
