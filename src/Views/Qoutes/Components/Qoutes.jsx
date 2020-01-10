import React from "react";
import QoutesTable from "./QoutesTable";
export default function QoutesView() {
  return (
    <div className="col-sm-12 bg-white p-2">
      <div className="col-sm-12 pt-3">
        <div className="col-sm-12 pt-2 d-flex justify-content-between">
          <div className="col-sm-8">
            <h3 className="font-weight-bold mb-3 custom-text-gold ">Qoutes</h3>
            <div class=" col-sm-5 p-1 mt-2 mt-md-0 p-2 text-capitalize border">
              <small class="text-muted ml-1">View By</small>
              <select class="form-control selectdiv p-0 border-0 font-weight-bold">
                <option>Labour</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="col-sm-4 p-0 d-flex justify-content-around">
            <div className="col-sm-6 p-0 h-fit-content">
              <button class="btn btn-info btn-round m-0">
                Register New Qoute
              </button>
            </div>
            <div className="col-sm-6 p-0">
              <button class="btn btn-info btn-round m-0">Add New Qoute</button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 m-3 overflow-auto">
          <QoutesTable />
        </div>
      </div>
    </div>
  );
}
