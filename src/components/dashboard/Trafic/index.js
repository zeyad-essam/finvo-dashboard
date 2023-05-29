import React from "react";

import Card from "../../ui/Card";

import { ResponsiveLine } from "@nivo/line";

import styles from "./Traffic.module.css";

const traficData = [
  {
    id: "visitors",
    color: "#f16722",
    data: [
      {
        x: "Jan",
        y: 50000,
      },
      {
        x: "Feb",
        y: 80000,
      },
      {
        x: "Mar",
        y: 60000,
      },
      {
        x: "Apr",
        y: 160000,
      },
      {
        x: "May",
        y: 120000,
      },
      {
        x: "Jun",
        y: 230000,
      },
      {
        x: "Jul",
        y: 150000,
      },
      {
        x: "Sep",
        y: 220000,
      },
      {
        x: "Oct",
        y: 250000,
      },
      {
        x: "Nov",
        y: 280000,
      },
      {
        x: "Dec",
        y: 380000,
      },
    ],
  },
];

const Traffic = () => {
  return (
    <Card>
      <div className={styles.traffic}>
        <h3>Website Traffic</h3>
        <div className={styles.chart_wrapper}>
          <ResponsiveLine
            data={traficData}
            margin={{ top: 20, right: 20, bottom: 30, left: 40 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: 0,
              max: "auto",
              reverse: false,
            }}
            yFormat=" >-.2f"
            curve="cardinal"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: (val) => {
                if (Number(val) === 0) {
                  return 0;
                }
                let valNum = parseInt(val);
                return valNum / 1000 + "K";
              },
            }}
            colors={{
              datum: "color",
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
            fill={[{ match: { id: "visitors" }, id: "targetG" }]}
            enableGridX={false}
            enableGridY={false}
            lineWidth={5}
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            areaOpacity={0.15}
            useMesh={true}
            legends={[]}
          />
        </div>
      </div>
    </Card>
  );
};

export default Traffic;
