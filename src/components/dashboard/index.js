import React from "react";

import styles from "./Dashboard.module.css";
import Orders from "./Orders";
import AverageOrder from "./AverageOrder";
import StatCard from "./StatCard";
import SalesTarget from "./SalesTarget";
import ValuesView from "./ValuesView";
import ValueState from "../ui/ValueState";
import Financials from "./Financials";
import Metrics from "./Metrics";
import Traffic from "./Trafic";
import TargetCompletion from "./TagetCompletion";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.orders_and_payments}>
        <div className={styles.orders}>
          <Orders />
        </div>
        <div className={styles.average_value}>
          <AverageOrder />
        </div>
        <div className={styles.statistics}>
          <div className={styles.card_payments}>
            <StatCard
              title="Card Payments"
              value="64%"
              stat={{ decrease: true, value: 0.1 }}
            />
          </div>
          <div className={styles.online_orders}>
            <StatCard
              title="Online Orders"
              value="31%"
              stat={{ decrease: true, value: 3.2 }}
            />
          </div>
          <div className={styles.cutomer_satisfaction}>
            <StatCard
              title="Cutomer Satisfaction"
              value="4.8/5.0"
              stat={{ increase: true, value: 2.4 }}
            />
          </div>
        </div>
      </div>
      <div className={styles.target_and_inventory}>
        <div className={styles.target}>
          <SalesTarget />
        </div>
        <div className={styles.inventory_and_margins}>
          <ValuesView title="inverntory on hand">
            <div>
              <h3>Egp 12,334</h3>
              <ValueState value={2.2} decrease />
            </div>
            <div>
              <h3>18.6 Days</h3>
              <ValueState value={1.8} increase />
            </div>
            <div>
              <h3>Egp 12,334</h3>
              <ValueState value={1.6} increase />
            </div>
          </ValuesView>
          <ValuesView title="Margins">
            <div>
              <h3>
                69.0% <span>Gross</span>
              </h3>
              <ValueState value={2.2} decrease />
            </div>
            <div>
              <h3>
                45.1% <span>Operating</span>
              </h3>
              <ValueState value={1.8} increase />
            </div>
            <div>
              <h3>
                25.6% <span>net</span>
              </h3>
              <ValueState value={1.6} increase />
            </div>
          </ValuesView>
        </div>
      </div>
      <div className={styles.recievables_and_payables}>
        <Financials />
      </div>
      <div className={styles.metrics}>
        <Metrics />
      </div>
      <div className={styles.traffic}>
        <Traffic />
      </div>
      <div className={styles.target_completion}>
        <TargetCompletion />
      </div>
      <div className={styles.average}>
        <StatCard
          title="Avg. queue time"
          value="7m 34s"
          stat={{ decrease: true, value: 0.2 }}
        />
        <StatCard
          title="Avg. Queue Length"
          value="4.64"
          stat={{ increase: true, value: 1.2 }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
