import React, { type ButtonHTMLAttributes } from "react";
import styles from "./style.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "rounded" | "outlined";
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  color?: string;
  bgColor?: string;
}

const Button: React.FC<IProps> = ({
  variant = "default",
  children,
  paddingHorizontal = 30,
  paddingVertical = 15,
  color,
  bgColor,
  ...rest
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[`${variant}-btn`]}`}
      style={{
        color,
        backgroundColor: bgColor,
        paddingInline: paddingHorizontal,
        paddingBlock: paddingVertical,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
