import React from "react";

import { ResponsiveBar } from "@nivo/bar";

import Card from "../../ui/Card";

import styles from "./SalesTarget.module.css";

const data = [
  {
    month: "Jan",
    target: 90,
    targetColor: "#f16822",
    expenses: 35,
    expensesColor: "#d9d9d9",
  },
  {
    month: "Feb",
    target: 135,
    targetColor: "#f16822",
    expenses: 40,
    expensesColor: "#d9d9d9",
  },
  {
    month: "Mar",
    target: 80,
    targetColor: "#f16822",
    expenses: 45,
    expensesColor: "#d9d9d9",
  },
  {
    month: "Apr",
    target: 88,
    targetColor: "#f16822",
    expenses: 30,
    expensesColor: "#d9d9d9",
  },
  {
    month: "May",
    target: 110,
    targetColor: "#f16822",
    expenses: 50,
    expensesColor: "#d9d9d9",
  },
  {
    month: "Jun",
    target: 120,
    targetColor: "#f16822",
    expenses: 10,
    expensesColor: "#d9d9d9",
  },
  {
    month: "Jul",
    target: 110,
    targetColor: "#f16822",
    expenses: 15,
    expensesColor: "#d9d9d9",
  },
  {
    month: "Sep",
    target: 135,
    targetColor: "#f16822",
    expenses: 40,
    expensesColor: "#d9d9d9",
  },
  {
    month: "Oct",
    target: 140,
    targetColor: "#155fa5",
    expenses: 25,
    expensesColor: "#d9d9d9",
  },
  {
    month: "Nov",
    expenses: 90,
    expensesColor: "#d9d9d9",
  },
  {
    month: "Dec",
    expenses: 70,
    expensesColor: "#d9d9d9",
  },
];

const SalesTarget = () => {
  return (
    <Card title="sales target by month">
      <div className={styles.sales_target}>
        <div className={styles.chart_wrapper}>
          <ResponsiveBar
            data={data}
            keys={["target", "expenses"]}
            indexBy="month"
            margin={{ top: 40, right: 0, bottom: 20, left: 0 }}
            padding={0.6}
            minValue={0}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={({ id, data }) => String(data[`${id}Color`])}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 0,
              //   tickPadding: 5,
              //   tickRotation: 0,
              legend: "month",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            defs={[
              {
                id: "targetG",
                type: "linearGradient",
                colors: [
                  { offset: 0, color: "inherit" },
                  { offset: 100, color: "inherit", opacity: 0.6 },
                ],
              },
            ]}
            fill={[{ match: { id: "target" }, id: "targetG" }]}
            axisLeft={false}
            enableLabel={false}
            enableGridY={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor="#777"
            motionConfig="gentle"
            role="application"
            ariaLabel="Sales Target By Month"
          />
        </div>
      </div>
    </Card>
  );
};

export default SalesTarget;
