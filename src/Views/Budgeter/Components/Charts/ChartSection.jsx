import React from "react";
import DonutChart from "./DonutChart";
export default function ChartSection(props) {
  return (
    <>
      <div
        className={`${
          props.isRoundedBorder ? "charts-background-rounded shadow" : ""
        } p-1`}
        style={{ height: "35%", width: "35%" }}
      >
        <DonutChart data={props.data} lineWidth={props.lineWidth} />
      </div>

      <div
        className={`col-sm-5 d-flex flex-column text-center justify-content-around custom-text-gold ${
          props.showTotalBudget ? "h-200px" : ""
        }`}
      >
        {props.showTotalBudget ? (
          <div>
            <h3 className="font-weight-bold m-0">Total Budget</h3>
            <h3 className="font-weight-bold m-0 text-black">$200</h3>
          </div>
        ) : (
          ""
        )}

        <div>
          <h3 className="font-weight-bold m-0">{props.heading}</h3>
          <h3 className="font-weight-bold m-0 text-black">{props.price}</h3>
        </div>
      </div>
    </>
  );
}
