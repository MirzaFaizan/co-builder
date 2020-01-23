import React, { useState } from "react";
import Model from "./Component/Model/Model";
import ProgressBar from "./Component/Progressbar";
import MonthBasedChecklist from "./Component/MonthBasedChecklist/Index";
import Api from "../../ApiCalls/api";
import "./checklist.css";
export default function CheckList(props) {
  const [openModel, setOpenModel] = useState(false);
  const [type, setType] = useState("new");
  const ToggleModel = () => {
    setType("");
    setOpenModel(!openModel);
  };
  const body = {
    userid: localStorage.getItem("userId")
  };

  // React.useEffect(() => {
  //   Api.getChecklist(body)
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="main-testing bg-white p-4">
      <Model openModel={openModel} setOpenModel={setOpenModel} type={type} />
      <div>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-lg-baseline">
          <h3 className="mb-0">
            <span className="custom-text-gold font-weight-bold">427</span> Days
            to go
          </h3>

          <div className="text-center">
            {/* <button className="btn btn-outline-info btn-round">
              Edit Checklist
            </button> */}
            <button
              className="btn btn-info btn-round"
              onClick={() => {
                setType("new");
                setOpenModel(!openModel);
              }}
            >
              Create New To-Do
            </button>
          </div>
        </div>
        <ProgressBar />
      </div>

      {/* <!-- History-Section-Start  --> */}
      <div className="history-section">
        {/* <!-- Toggle-Button-Start --> */}
        <div className="row mr-0 flex-column flex-md-row align-items-center justify-content-between">
          <div className="h4 col text-center text-md-left mb-0 mt-3 font-weight-bold"></div>

          <div className="col-7 col-md-5 col-lg-4 col-xl-3 p-1 mt-2 mt-md-0 text-capitalize border">
            <small className="text-muted ml-1">View By</small>

            <select className="form-control selectdiv p-0 border-0 font-weight-bold">
              <option selected="">All Months</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div>
          <MonthBasedChecklist ToggleModel={ToggleModel} />
        </div>
      </div>
    </div>
  );
}
