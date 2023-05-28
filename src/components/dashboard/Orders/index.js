import React from "react";

import Card from "../../ui/Card";
import { ResponsivePie } from "@nivo/pie";

import styles from "./Orders.module.css";

const data = [
  {
    id: "direct",
    label: "Direct",
    value: 62,
    color: "hsl(210, 92%, 31%)",
  },
  {
    id: "catering",
    label: "Catering",
    value: 15,
    color: "hsl(211, 37%, 55%)",
  },
  {
    id: "retail",
    label: "Retail",
    value: 23,
    color: "hsl(20, 88%, 54%)",
  },
];

const Orders = () => {
  return (
    <Card title="orders">
      <h2>178,405</h2>
      <div className={styles.chart_wrapper}>
        <ResponsivePie
          data={data}
          margin={{ top: 7, right: 10, bottom: 7, left: 100 }}
          innerRadius={0.5}
          padAngle={2}
          cornerRadius={3}
          activeOuterRadiusOffset={5}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          sortByValue={true}
          colors={{ datum: "data.color" }}
          valueFormat={(value) => `${parseInt(value)}%`}
          enableArcLinkLabels={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor="#fff"
          legends={[
            {
              anchor: "left",
              direction: "column",
              justify: false,
              translateX: -100,
              translateY: 0,
              itemsSpacing: 6,
              itemWidth: 80,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 14,
              symbolShape: "square",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </Card>
  );
};

export default Orders;
