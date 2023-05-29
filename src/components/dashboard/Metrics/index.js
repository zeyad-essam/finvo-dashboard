import React from "react";

import styles from "./Metrics.module.css";
import Card from "../../ui/Card";

const Metrics = () => {
  return (
    <Card>
      <div className={styles.metrics_wrapper}>
        <table className={styles.metrics_table}>
          <thead>
            <tr>
              <th></th>
              <th
                colspan="3"
                className={`${styles.groupHeader} ${styles.actual}`}
              >
                <div className={styles.table_wrapper}>
                  <table>
                    <tr>
                      <th colspan="3">ACTUAL</th>
                    </tr>
                    <tr>
                      <th>JUL</th>
                      <th>AUG</th>
                      <th>FEB</th>
                    </tr>
                  </table>
                </div>
              </th>
              <th
                colspan="3"
                className={`${styles.groupHeader} ${styles.forecast}`}
              >
                <div className={styles.table_wrapper}>
                  <table>
                    <tr>
                      <th colspan="3">ACTUAL</th>
                    </tr>
                    <tr>
                      <th>JUL</th>
                      <th>AUG</th>
                      <th>FEB</th>
                    </tr>
                  </table>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales</td>
              <td>56,304</td>
              <td>65,413</td>
              <td>66,250</td>
              <td>65,413</td>
              <td>56,304</td>
              <td>65,413</td>
            </tr>
            <tr>
              <td>Net Income</td>
              <td>15,765</td>
              <td>15,625</td>
              <td>78,542</td>
              <td>15,152</td>
              <td>45,455</td>
              <td>15,262</td>
            </tr>
            <tr>
              <td>Operating Cash Flow</td>
              <td>15,134</td>
              <td>16,013</td>
              <td>78,785</td>
              <td>25,365</td>
              <td>25,365</td>
              <td>14,256</td>
            </tr>
            <tr>
              <td>Cash Balance</td>
              <td>20,587</td>
              <td>41,632</td>
              <td>63,463</td>
              <td>41,632</td>
              <td>45,222</td>
              <td>41,632</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Metrics;
