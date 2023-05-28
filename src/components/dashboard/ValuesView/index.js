import React from "react";

import Card from "../../ui/Card";

import styles from "./ValuesView.module.css";

const ValuesView = ({ children, title }) => {
  return (
    <Card title={title}>
      <div className={styles.values_view}>{children}</div>
    </Card>
  );
};

export default ValuesView;
