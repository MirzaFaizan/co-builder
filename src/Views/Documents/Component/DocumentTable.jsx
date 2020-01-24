import React, { useState } from "react";
import Model from "./DocumentModel/Model";
import dateFormat from "../../../Helpers/DateHelpers";
export default function Table({ data, deleteDocument }) {
  const [openModel, setOpenModel] = useState(false);
  const ToggleModel = () => {
    setOpenModel(!openModel);
  };
  if (data.length < 1) {
    return (
      <div className=" mt-2 font-weight-bold alert alert-danger font-30">
        No documents found for this users
      </div>
    );
  }

  return (
    <>
      <Model openModel={openModel} setOpenModel={setOpenModel} />
      <table class="table table-striped w-75">
        <thead>
          <tr>
            <th scope="col" className="border-0">
              Type
            </th>
            <th scope="col" className="border-0">
              Last Modified
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(value => (
            <tr>
              <td className="font-weight-bold">{value.folderName}</td>
              <td>
                <div className="d-flex flex-row justify-content-between align-items-center ">
                  <div className="m-1 p-1 font-weight-bold">
                    {dateFormat.getDate(value.updatedAt)}
                  </div>
                  <div className="d-flex flex-row align-items-center justify-content-center dialog_open__check">
                    <button
                      type="button"
                      className="btn btn-link custom-btn p-0 m-0"
                    >
                      <i className="fas fa-ellipsis-h fa-2x"></i>
                    </button>
                    <div className="d-flex flex-row align-items-center justify-content-center view_more">
                      {value.creator === "admin" ? (
                        ""
                      ) : (
                        <span className="mr-3 cursor-pointer">
                          <i
                            class="far fa-trash-alt text-blue"
                            onClick={() => deleteDocument(value)}
                          ></i>
                        </span>
                      )}

                      <span
                        className="mr-3 cursor-pointer text-blue"
                        onClick={ToggleModel}
                      >
                        View more
                      </span>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
