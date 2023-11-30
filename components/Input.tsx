import styles from "@/styles/Input.module.css";
import InputTagInterface from "@/interfaces/InputTagInterface";
import { Fragment } from "react";
import React from "react";

const Input = React.forwardRef<HTMLInputElement, InputTagInterface>(
  (inputTag: InputTagInterface, ref) => {
    const { labelName, idForName, type, className } = inputTag;

    return (
      <Fragment>
        <label className={styles.label} htmlFor={labelName}>
          {labelName}
        </label>
        <input
          className={className}
          id={idForName}
          name={idForName}
          type={type}
          ref={ref}
        />
      </Fragment>
    );
  }
);

export default Input;
