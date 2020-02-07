import React from "react";
import DonutChart from "./DonutChart";
export default function ChartSection({
  isRoundedBorder,
  lineWidth,
  data,
  heading,
  showTotalBudget,
  totalBudget,
  totalSpent
}) {
  return (
    <>
      <div
        className={`${
          isRoundedBorder ? "charts-background-rounded shadow" : ""
        } p-1`}
        style={{ height: "35%", width: "35%" }}
      >
        <DonutChart data={data} lineWidth={lineWidth} />
      </div>

      <div
        className={`col-sm-5 d-flex flex-column text-center justify-content-around custom-text-gold ${
          showTotalBudget ? "h-200px" : ""
        }`}
      >
        {showTotalBudget ? (
          <div>
            <h3 className="font-weight-bold m-0">Total Budget</h3>
            <h3 className="font-weight-bold m-0 text-black">{totalBudget}$</h3>
          </div>
        ) : (
          ""
        )}

        <div>
          <h3 className="font-weight-bold m-0">{heading}</h3>
          <h3 className="font-weight-bold m-0 text-black">{totalSpent}$</h3>
        </div>
      </div>
    </>
  );
}

ChartSection.defaultProps = {
  totalBudget: "300",
  totalSpent: "500"
};
