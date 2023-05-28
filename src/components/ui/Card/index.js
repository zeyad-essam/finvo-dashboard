import React from "react";

import styles from "./Card.module.css";

const Card = ({ children, title }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cart_title}>{title}</h3>
      <div className={styles.card_content}>{children}</div>
    </div>
  );
};

export default Card;
