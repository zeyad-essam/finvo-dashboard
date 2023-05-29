import React from "react";

import styles from "./Financials.module.css";
import Card from "../../ui/Card";

const recievablesData = [
  {
    cuntomer: "Gippel",
    amount: 8800,
    dueIn: 1,
  },
  {
    cuntomer: "Piexly",
    amount: 11955,
    dueIn: 3,
  },
  {
    cuntomer: "Valutory",
    amount: 4509,
    dueIn: 6,
  },
  {
    cuntomer: "Domela",
    amount: 21500,
    dueIn: 12,
  },
  {
    cuntomer: "Jack",
    amount: 9500,
    dueIn: 15,
  },
  {
    cuntomer: "Alen",
    amount: 7000,
    dueIn: 15,
  },
];

const payaplesData = [
  {
    cuntomer: "Vapour",
    amount: 3400,
    dueIn: 1,
  },
  {
    cuntomer: "AlbaDesign",
    amount: 8350,
    dueIn: 1,
  },
  {
    cuntomer: "Invergant",
    amount: 9344,
    dueIn: 8,
  },
  {
    cuntomer: "Yieldz",
    amount: 10299,
    dueIn: 12,
  },
  {
    cuntomer: "Jack",
    amount: 9500,
    dueIn: 15,
  },
  {
    cuntomer: "Alen",
    amount: 7000,
    dueIn: 15,
  },
];

const Financials = () => {
  const sortedRecievables = recievablesData.sort((a, b) => a.dueIn - b.dueIn);
  const sortedPayables = payaplesData.sort((a, b) => a.dueIn - b.dueIn);

  const recievablesTotal = recievablesData.reduce(
    (acc, cur) => acc + cur.amount,
    0
  );

  const payaplesTotal = payaplesData.reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <Card>
      <div className={styles.tables_wrapper}>
        <div className={styles.table}>
          <h3>Outstanding Recievables</h3>
          <div className={styles.table_head}>
            <div className={styles.table_row}>
              <span>Customer</span>
              <span>Amount</span>
              <span>Due in</span>
            </div>
          </div>
          <div className={styles.table_body}>
            {sortedRecievables.map((row) => (
              <div className={styles.table_row}>
                <span>{row.cuntomer}</span>
                <span>
                  {row.amount.toLocaleString("en-EG", {
                    style: "currency",
                    minimumFractionDigits: 0,
                    currency: "EGP",
                  })}
                </span>
                <span
                  className={row.dueIn === 1 ? styles.due_in_one_recieve : ""}
                >
                  {row.dueIn} {row.dueIn === 1 ? "Day" : "Days"}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.table_footer}>
            <div className={styles.table_row}>
              <span>Total:</span>
              <span className={styles.total_amount}>
                {recievablesTotal.toLocaleString("en-EG", {
                  style: "currency",
                  minimumFractionDigits: 0,
                  currency: "EGP",
                })}
              </span>
              <span className={styles.view_more}>View more...</span>
            </div>
          </div>
        </div>
        <div className={styles.table}>
          <h3>Outstanding Recievables</h3>
          <div className={styles.table_head}>
            <div className={styles.table_row}>
              <span>Customer</span>
              <span>Amount</span>
              <span>Due in</span>
            </div>
          </div>
          <div className={styles.table_body}>
            {sortedPayables.map((row) => (
              <div className={styles.table_row}>
                <span>{row.cuntomer}</span>
                <span>
                  {row.amount.toLocaleString("en-EG", {
                    style: "currency",
                    minimumFractionDigits: 0,
                    currency: "EGP",
                  })}
                </span>
                <span className={row.dueIn === 1 ? styles.due_in_one_pay : ""}>
                  {row.dueIn} {row.dueIn === 1 ? "Day" : "Days"}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.table_footer}>
            <div className={styles.table_row}>
              <span>Total:</span>
              <span className={styles.total_amount}>
                {payaplesTotal.toLocaleString("en-EG", {
                  style: "currency",
                  minimumFractionDigits: 0,
                  currency: "EGP",
                })}
              </span>
              <span className={styles.view_more}>View more...</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Financials;
