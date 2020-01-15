import React from "react";
export default function Table() {
  return (
    <table class="table text-center">
      <thead>
        <tr>
          <th scope="col" className="border-0">
            Item
          </th>
          <th scope="col" className="border-0">
            Quantity
          </th>
          <th scope="col" className="border-0">
            Unit of Measure
          </th>
          <th scope="col" className="border-0">
            Unit Cost
          </th>
          <th scope="col" className="border-0">
            Total Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className="mt-2 mb-2">
            <span className="d-flex" style={{ borderLeft: "4px solid blue" }}>
              &nbsp;&nbsp;
              <div className="text-center d-flex flex-column">
                <span>Electrical Rouf/Top</span>
                <small>David Stiphen</small>
              </div>
            </span>
          </th>
          <td>
            <div className="m-1 p-1 border text-center h-100 w-100 bg-white">
              $500
            </div>
          </td>
          <td>
            <div className="m-1 p-1 border text-center h-100 bg-white d-flex align-items-center">
              <select class="w-100 border-0">
                <option>Sqr ft.</option>
                <option>...</option>
              </select>
              <i class="fas fa-chevron-circle-down text-grey" ></i>
            </div>
          </td>
          <td>
            <div className="m-1 p-1 border text-center h-100 w-100 bg-white">
              $500
            </div>
          </td>
          <td>
            <div className="d-flex flex-row justify-content-around align-items-center ">
              <div className="m-1 p-1 border text-center h-100 w-100 text-danger bg-white font-weight-bold">
                $500
              </div>
              {/* <i className="fas fa-ellipsis-h fa-2x ml-3 text-grey"></i> */}
            </div>
          </td>
        </tr>
     
      </tbody>
    </table>
  );
}
