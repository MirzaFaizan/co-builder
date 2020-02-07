import React from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";
export default function DonutChart({ data, lineWidth }) {
  return (
    <ReactMinimalPieChart
      animate={true}
      animationDuration={500}
      animationEasing="ease-out"
      cx={50}
      cy={50}
      data={data}
      label={false}
      labelPosition={50}
      lengthAngle={360}
      lineWidth={lineWidth}
      onClick={undefined}
      onMouseOut={undefined}
      onMouseOver={undefined}
      //   paddingAngle={5}
      radius={50}
      rounded={false}
      startAngle={270}
      viewBoxSize={[50, 50]}
    />
  );
}
