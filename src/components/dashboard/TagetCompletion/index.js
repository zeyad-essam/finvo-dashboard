import React from "react";

import { ResponsiveRadialBar } from "@nivo/radial-bar";

import Card from "../../ui/Card";

import styles from "./TargetCompletion.module.css";

const data = [
  {
    id: "Online",
    data: [
      {
        x: "Online",
        y: 43,
        color: "#f16822",
      },
    ],
  },
  {
    id: "Catering",
    data: [
      {
        x: "Catering",
        y: 38,
        color: "#9bb2c7",
      },
    ],
  },
  {
    id: "B2C",
    data: [
      {
        x: "B2C",
        y: 84,
        color: "#6691bd",
      },
    ],
  },
  {
    id: "B2B",
    data: [
      {
        x: "B2B",
        y: 90,
        color: "#064f97",
      },
    ],
  },
];

const TargetCompletion = () => {
  return (
    <Card title="Target Completion">
      <div className={styles.target_completion}>
        <div className={styles.legend}>
          {data.map((target) => (
            <div
              className={styles.legend_item}
              style={{ color: target.data[0].color }}
            >
              {target.id}: {target.data[0].y}%
            </div>
          ))}
        </div>
        <div className={styles.chart_wrapper}>
          <ResponsiveRadialBar
            data={data}
            valueFormat=" >-.2f"
            endAngle={360}
            colors={{ datum: "data.color" }}
            innerRadius={0.4}
            padding={0.2}
            cornerRadius={12}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            enableRadialGrid={false}
            enableCircularGrid={false}
            radialAxisStart={null}
            circularAxisOuter={null}
            legends={[]}
            maxValue={100}
          />
        </div>
      </div>
    </Card>
  );
};

export default TargetCompletion;
