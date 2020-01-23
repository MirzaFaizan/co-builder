import React from "react";
import Calender from "../Calender";
import time from "../../../../Helpers/DateHelpers";
import "./model.css";
export default function Model({ openModel, setOpenModel, type }) {
  const [Right, setRight] = React.useState("-45%");
  const [Description, setDescription] = React.useState(
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt cond"
  );
  const [title, setTitle] = React.useState("Upload House Plan");
  const [date, setDate] = React.useState(new Date());
  const onChange = date => {
    setDate(date);
  };
  if (openModel === true) {
    if (Right === "-45%")
      setTimeout(() => {
        setRight("0px");
      }, 100);
  }

  return (
    <>
      {openModel ? (
        <>
          <div className="container demo model-swipe">
            <div className="modal right fade" aria-labelledby="myModalLabel2">
              <div className="model-dialog-custom" style={{ right: Right }}>
                {type === "new" ? (
                  <div className="modal-content">
                    <div className="modal-header bg-white">
                      <div className="col-sm-8">
                        <h3 className="ml-3 mb-1">Create New Todo-List</h3>
                      </div>
                      <button
                        type="button"
                        className="close"
                        onClick={() => {
                          setRight("-45%");
                          setOpenModel(false);
                        }}
                      >
                        <span>&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="col-sm-12 d-flex align-items-center pb-2">
                        <div className="col-sm-3">
                          <span className="font-weight-bold mr-3">Title:</span>
                        </div>
                        <div className="col-sm-8 font-weight-bold p-1 text-capitalize border btn-light cursor-pointer">
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-sm-12 d-flex align-items-center">
                        <div className="col-sm-3">
                          <span className="font-weight-bold mr-3">
                            Due Date:
                          </span>
                        </div>
                        <div className="col-sm-8 font-weight-bold p-1 text-capitalize border btn-light cursor-pointer">
                          {time.getDate(date)}
                        </div>
                      </div>
                      <div className="col-sm-12 d-flex pt-2 align-items-center">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-8 p-0">
                          <Calender date={date} onChange={onChange} />
                        </div>
                      </div>

                      <div className="col-sm-12 d-flex align-items-center pt-2 ">
                        <div className="col-sm-3 text-right">
                          <span className="font-weight-bold mr-3">
                            Discripton:
                          </span>
                        </div>
                        <div className="col-sm-8 p-0 text-capitalize">
                          <textarea
                            placeholder="Enter description"
                            className="h-100 w-100 font-weight-400"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-sm-12 d-flex align-items-center pb-2">
                        <div className="col-sm-3">
                          <span className="font-weight-bold mr-3">Status:</span>
                        </div>
                        <div className="col-sm-8 cursor-pointer">
                          <div
                            className="form-check"
                            style={{ marginLeft: "3.2rem" }}
                          >
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="form-check-sign custom-bg-gold"></span>
                              <h5 className="m-0">Mark it done</h5>
                              <p className="text-black-50">
                                <span className="custom-text-gold">
                                  leaves Uncheck if it's pending
                                </span>{" "}
                              </p>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="container text-right"
                      style={{ maxWidth: "75.6%" }}
                    >
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => {
                          setRight("-45%");
                          setOpenModel(false);
                        }}
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="modal-content">
                    <div className="modal-header bg-white">
                      <div className="col-sm-8 text-right">
                        <input
                          className="modal-title h3 border-0 mb-0"
                          value={title}
                          onChange={e => setTitle(e.target.value)}
                        />
                        <small className="text-blue"> Click to edit</small>
                      </div>
                      <button
                        type="button"
                        className="close"
                        onClick={() => {
                          setRight("-45%");
                          setOpenModel(false);
                        }}
                      >
                        <span>&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div
                        className="form-check"
                        style={{ marginLeft: "3.2rem" }}
                      >
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" />
                          <span className="form-check-sign custom-bg-gold"></span>
                          <h5 className="m-0">Mark it done</h5>
                          <p className="text-black-50">
                            <span className="custom-text-gold">Past Due :</span>{" "}
                            Due December 11
                          </p>
                        </label>
                      </div>
                      <div className="col-sm-12 d-flex align-items-center">
                        <div className="col-sm-3 text-right">
                          <span className="font-weight-bold mr-3">
                            Due Date:
                          </span>
                        </div>
                        <div className="col-sm-4 font-weight-bold p-1 text-capitalize border btn-light cursor-pointer">
                          {time.getDate(date)}
                        </div>
                      </div>
                      <div className="col-sm-12 d-flex pt-2 align-items-center">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-8 pl-0">
                          <Calender date={date} onChange={onChange} />
                        </div>
                      </div>

                      <div className="col-sm-12 d-flex align-items-center pt-2 ">
                        <div className="col-sm-3 text-right">
                          <span className="font-weight-bold mr-3">
                            Discripton:
                          </span>
                        </div>
                        <div className="col-sm-8 pl-0 text-capitalize">
                          <textarea
                            className="h-100 w-100 font-weight-400"
                            rows="4"
                            value={Description}
                            onChange={e => {
                              setDescription(e.target.value);
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div
                      className="container text-right"
                      style={{ maxWidth: "75.6%" }}
                    >
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => {
                          setRight("-45%");
                          setOpenModel(false);
                        }}
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
