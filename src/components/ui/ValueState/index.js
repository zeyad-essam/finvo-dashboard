import React from "react";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import styles from "./ValueState.module.css";

const ValueState = ({ value, increase, decrease }) => {
  return (
    <div
      className={`${styles.stat_box} ${increase && styles.increase} ${
        decrease && styles.decrease
      }`}
    >
      <i>
        {increase ? (
          <ArrowDropUpIcon style={{ fontSize: 28 }} />
        ) : (
          <ArrowDropDownIcon style={{ fontSize: 22 }} />
        )}
      </i>
      <span>{value}%</span>
      <span>MoM</span>
    </div>
  );
};

export default ValueState;
