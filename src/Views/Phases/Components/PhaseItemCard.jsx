import React from "react";
export default function PhaseItemCard({ editItemModel, value }) {
  console.log(value);
  return (
    <div class="form-group col-sm-4 pr-2">
      <div
        class="col-sm-12 p-0 form-group pb-3 mb-3 shadow"
        style={{ borderRadius: 20 }}
      >
        <div className="d-flex flex-column  col-sm-12 justify-content-center align-items-center">
          <h4 className="custom-text-gold font-weight-bold mt-3">
            {value.name}
          </h4>
          <div className="text-description text-center mb-4">
            {value.description}
          </div>
          <div className="col-sm-12 p-0 mb-3 d-flex">
            <div className="custom-text-gold font-weight-bold col-sm-4">
              Status
            </div>
            <div className="col-sm-8 p-0 text-left">{value.status}</div>
          </div>
          {/* <div className="col-sm-12 p-0 mb-3 d-flex">
            <div className="custom-text-gold font-weight-bold col-sm-4">
              Date
            </div>
            <div className="col-sm-8 p-0 text-left">June 15, 2015</div>
          </div> */}
          <div className="col-sm-12 p-0 mb-3 d-flex">
            <div className="custom-text-gold font-weight-bold col-sm-4">
              Trade
            </div>
            <div className="col-sm-8 p-0 text-left">{value.trade}</div>
          </div>
          <div className="col-sm-12 p-0 mb-3 d-flex">
            <div className="custom-text-gold font-weight-bold col-sm-4">
              Next Step
            </div>
            <div className="col-sm-8 p-0 text-left">{value.nextStep}</div>
          </div>
          <div className="col-sm-12 p-0 mb-3 d-flex">
            <div className="custom-text-gold font-weight-bold col-sm-4">
              Diy
            </div>
            <div className="col-sm-8 p-0 text-left">{value.diy}</div>
          </div>
          <div className="col-sm-12 p-0 d-flex">
            <div className="custom-text-gold font-weight-bold col-sm-4">
              Note
            </div>
            <div className="col-sm-8 p-0 text-left overflow-auto h-80px">
              {value.note}
            </div>
          </div>
          <div className="col-sm-12 p-0 mt-2 align-items-center justify-content-center d-flex">
            <button
              class="btn btn-primary m-0 p-1"
              type="button"
              onClick={() => editItemModel(value)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
