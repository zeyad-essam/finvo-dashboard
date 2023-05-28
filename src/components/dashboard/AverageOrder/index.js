import React from "react";

import Card from "../../ui/Card";

import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "order",
    color: "#f48c56",
    data: [
      {
        x: "Jan",
        y: 110,
      },
      {
        x: "Feb",
        y: 100,
      },
      {
        x: "Mar",
        y: 116,
      },
      {
        x: "Apr",
        y: 145,
      },
      {
        x: "May",
        y: 100,
      },
      {
        x: "Jun",
        y: 130,
      },
      {
        x: "July",
        y: 120,
      },
      {
        x: "Oct",
        y: 130,
      },
      {
        x: "Sep",
        y: 250,
      },
      {
        x: "Nov",
        y: 180,
      },
      {
        x: "Dec",
        y: 150,
      },
    ],
  },
];

const AverageOrder = () => {
  return (
    <Card title="Average Order Value">
      <h2>EGP 118,26</h2>
      <div
        className="chart"
        style={{
          width: "100%",
          height: "150px",
          display: "flex",
        }}
      >
        <ResponsiveLine
          data={data}
          margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "0",
            max: "500",
            stacked: true,
            reverse: false,
          }}
          colors={{
            datum: "color",
          }}
          yFormat=" >-.2f"
          curve="cardinal"
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          enablePoints={false}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          pointSize={8}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          enableArea={true}
          useMesh={true}
          legends={[]}
        />
      </div>
    </Card>
  );
};

export default AverageOrder;
