import React from "react";
import styles from "./style.module.scss";
import Button from "../button/Button";

interface IProps {
  type: string;
  placeholder: string;
  submitText: string;
  inputWidth: string;
  btnWidth: string;
  variant?: "default" | "rounded";
}

const Input: React.FC<IProps> = ({
  type,
  placeholder,
  submitText,
  inputWidth,
  btnWidth,
  variant = "default",
}) => {
  return (
    <div
      className={`${variant && styles[`${variant}-input`]} ${
        styles["input-group"]
      }`}
    >
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        style={{ width: inputWidth }}
      />
      <Button className={styles.btn} style={{ width: btnWidth }}>
        {submitText}
      </Button>
    </div>
  );
};

export default Input;
