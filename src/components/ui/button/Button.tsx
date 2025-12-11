import { type ButtonHTMLAttributes, forwardRef, type Ref } from "react";
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

// 1. Wrap the function component definition in forwardRef.
// 2. The component function now takes 'props' and 'ref' as arguments.
const Button = forwardRef(
  (
    {
      variant = "default",
      children,
      paddingHorizontal = 30,
      paddingVertical = 15,
      color,
      bgColor,
      borderColor,
      className,
      ...rest
    }: IProps,
    ref: Ref<HTMLButtonElement> // This is the forwarded ref argument
  ) => {
    return (
      <button
        // 3. Apply the forwarded ref to the DOM element
        ref={ref}
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
  }
);

export default Button;
