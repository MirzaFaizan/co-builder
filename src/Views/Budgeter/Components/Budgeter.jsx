import React, { useEffect, useState } from "react";
import DropDown from "./DropDown/Dropdown";
import ChartsTable from "./Table";
import ChartSection from "./Charts/ChartSection";
import api from "../../../ApiCalls/api";
import LoaderSpinner from "../../../Components/LoaderSpinner";

export default function Budgeter() {
  const [itemValue, setItemValue] = useState({});
  const [dropDownName, setDropDownName] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const [chartDataOver, setChartDataOver] = useState([]);
  const [PhaseItemData, setPhaseItemData] = useState([]);
  const [itemLoader, setItemLoader] = useState(true);
  const [openModel, setOpenModel] = useState(false);
  const [itemColor, setItemColor] = useState("");
  useEffect(() => {
    getBudgeter();
  }, []);

  const getBudgeter = () => {
    api
      .getBudgeter()
      .then(res => {
        if (res.data.phases !== undefined) {
          setData(res.data.phases);
        }

        setLoading(false);
        let array = [];

        if (res.data.phases.phasesArray !== undefined) {
          res.data.phases.phasesArray.map(value => {
            array.push({
              value: value.totalSpent === 0 ? 1 : value.totalSpent,
              color: value.color,
              title: value.name
            });
          });
          setChartData(array);
          setChartDataOver([
            {
              color: "purple",
              title: "Total Budget",
              value:
                res.data.phases.totalBudget === 0
                  ? 1
                  : res.data.phases.totalBudget
            },
            {
              color: "#DFE43E",
              title: "Total Spent",
              value:
                res.data.phases.totalSpent === 0
                  ? 1
                  : res.data.phases.totalSpent
            }
          ]);
          loadData(res.data.phases.phasesArray[0]);
        }
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  const loadData = value => {
    setItemValue(value);
    setItemLoader(true);
    api
      .getPhaseItem(value._id)
      .then(res => {
        console.log(res);
        setPhaseItemData(res.data.items);
        setItemColor(value.color);
        setItemLoader(false);
      })
      .catch(err => {
        setItemLoader(false);
        console.log(err);
      });
  };

  return (
    <>
      {loading ? (
        <div className="col-sm-12 d-flex justify-content-center bg-white align-items-center h-100">
          <LoaderSpinner />
        </div>
      ) : (
        <>
          {data.phasesArray === undefined || data.phasesArray === [] ? (
            <div className="h-100 bg-white">
              <h2 className="text-light w-100 alert alert-warning">
                No data found
              </h2>
            </div>
          ) : (
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
                    <DropDown
                      data={data.phasesArray}
                      loadData={loadData}
                      name={dropDownName}
                      setName={setDropDownName}
                    />
                  </div>
                  {/* <div className="col-sm-12 col-md-4 col-lg-3 d-flex flex-wrap flex-row-reverse h-fit-content add-budget">
                <button class="btn btn-info btn-round m-0">
                  Add Budget Items
                </button>
              </div> */}
                </div>
                <div className="col-sm-12 d-flex flex-wrap h-35 pt-2 justify-content-center align-items-center charts-area">
                  <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-center align-items-center">
                    <ChartSection
                      data={chartData}
                      heading={"Total Spent"}
                      totalSpent={data.totalSpent}
                      totalBudget={data.totalBudget}
                      lineWidth={40}
                      isRoundedBorder={true}
                      showTotalBudget={true}
                    />
                  </div>
                  <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-wrap justify-content-center align-items-center">
                    <ChartSection
                      data={chartDataOver}
                      heading={"Over/Under"}
                      totalSpent={data.totalBudget - data.totalSpent}
                      lineWidth={5}
                      isRoundedBorder={false}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 p-3">
                <span className="text-uppercase text-grey font-weight-normal font-16">
                  Total Items :{data.totalItems}
                </span>
                &nbsp; &nbsp;
                <span className="divider-vertical"></span>
                &nbsp; &nbsp;
                <span className="text-uppercase text-grey font-weight-normal font-16">
                  Items Paid :{data.totalPaidItems}
                </span>
              </div>
              <div className="col-sm-12 pt-2 pl-4 bg-white shadow charts-section">
                <h3 className="font-weight-bold">Your budget Items</h3>
                <div className="col-sm-12 overflow-auto">
                  {itemLoader ? (
                    <div className="d-flex justify-content-center align-items-center col-sm-12">
                      <div
                        class="spinner-grow custom-text-gold"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                      >
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <ChartsTable
                        itemColor={itemColor}
                        data={PhaseItemData}
                        openModel={openModel}
                        setOpenModel={setOpenModel}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
