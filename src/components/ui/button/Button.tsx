import React, { type ButtonHTMLAttributes } from "react";
import styles from "./style.module.scss";
import type { TBtnVariant } from "../../../types/types";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TBtnVariant;
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  className?: string;
}

const Button: React.FC<IProps> = ({
  variant = "default",
  children,
  paddingHorizontal = 30,
  paddingVertical = 15,
  color,
  bgColor,
  borderColor,
  className,
  ...rest
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[`${variant}-btn`]} ${
        className && className
      }`}
      style={{
        color,
        backgroundColor: bgColor,
        paddingInline: paddingHorizontal,
        paddingBlock: paddingVertical,
        borderColor,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
