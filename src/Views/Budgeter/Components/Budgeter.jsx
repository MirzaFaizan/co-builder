import React from "react";
import DropDown from "./DropDown/Dropdown";
import ChartsTable from "./Table";
import ChartSection from "./Charts/ChartSection";
const data = [
  {
    color: "#E38627",
    title: "One",
    value: 5
  },
  {
    color: "#7AC942",
    title: "Two",
    value: 8
  },
  {
    color: "#CCCCCC",
    title: "Three",
    value: 20
  }
];
const data2 = [
  {
    color: "purple",
    title: "One",
    value: 5
  },
  {
    color: "#DFE43E",
    title: "Two",
    value: 20
  }
];

export default function Budgeter() {
  return (
    <div className="col-sm-12 p-2 h-100">
      <div className="col-sm-12 bg-white pt-3 shadow charts-section">
        <div className="col-sm-12 pt-2 d-flex flex-wrap justify-content-between">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <h3 className="font-weight-bold m-0 custom-text-gold">
              Your Project Budget
            </h3>
            <p className="custom-light-pink-text">
              Keep track of your spending and total budget
            </p>
          </div>
          <div className="col-sm-8 col-md-8 col-lg-4">
            <DropDown />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 d-flex flex-wrap flex-row-reverse h-fit-content add-budget">
            <button class="btn btn-info btn-round m-0">Add Budget Items</button>
          </div>
        </div>
        <div className="col-sm-12 d-flex flex-wrap h-35 pt-2 justify-content-center align-items-center charts-area">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-center align-items-center">
            <ChartSection
              data={data}
              heading={"Total Spent"}
              price={"$1,852.00"}
              lineWidth={40}
              isRoundedBorder={true}
              showTotalBudget={true}
            />
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-wrap justify-content-center align-items-center">
            <ChartSection
              data={data2}
              heading={"Over/Under"}
              price={"$202.00"}
              lineWidth={5}
              isRoundedBorder={false}
            />
          </div>
        </div>
      </div>
      <div className="col-sm-12 p-3">
        <span className="text-uppercase text-grey font-weight-normal font-16">
          Total Items :52
        </span>
        &nbsp; &nbsp;
        <span className="divider-vertical"></span>
        &nbsp; &nbsp;
        <span className="text-uppercase text-grey font-weight-normal font-16">
          Items Paid :4
        </span>
      </div>
      <div className="col-sm-12 pt-2 pl-4 bg-white shadow charts-section">
        <h3 className="font-weight-bold">Your budget Items</h3>
        <div className="col-sm-12 overflow-auto">
          <ChartsTable />
        </div>
      </div>
    </div>
  );
}
