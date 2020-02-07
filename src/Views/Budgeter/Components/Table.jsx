import React from "react";
export default function Table({ setOpenModel, data, itemColor, editData }) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" className="border-0">
            Item
          </th>
          <th scope="col" className="border-0 text-center">
            Cost/Estimate
          </th>
          <th scope="col" className="border-0 text-center">
            Paid
          </th>
          <th scope="col" className="border-0 text-center">
            Over/Under Budget
          </th>
          {/* <th scope="col" className="border-0 text-center">
            Action
          </th> */}
        </tr>
      </thead>
      <tbody>
        {data.map(value => (
          <tr key={value._id}>
            <th scope="row" className="mt-2 mb-2">
              <span style={{ borderLeft: `4px solid ${itemColor}` }}>
                &nbsp;&nbsp;&nbsp;{value.name}
              </span>
            </th>
            <td>
              <div className="m-1 border text-center h-100 w-100 bg-white">
                ${value.estimatedCost}
              </div>
            </td>
            <td>
              <div className="m-1 border text-center h-100 w-100 bg-white">
                ${value.paidCost}
              </div>
            </td>
            <td>
              <div className="d-flex flex-row justify-content-around ">
                <div
                  className={`m-1 border text-center h-100 w-100  ${
                    value.estimatedCost - value.paidCost >= 0
                      ? "text-blue"
                      : "text-danger"
                  }  bg-white font-weight-bold`}
                >
                  ${value.estimatedCost - value.paidCost}
                </div>
              </div>
            </td>
            {/* <td className="p-0">
              <div className="d-flex flex-row justify-content-center dialog_open__check">
                <button type="button" className="btn btn-link custom-btn p-0">
                  <i className="fas fa-ellipsis-h fa-2x"></i>
                </button>
                <div className="d-flex flex-row align-items-center justify-content-center view_more">
                  <span
                    className="mr-3 cursor-pointer text-blue"
                    onClick={() => editData(value)}
                  >
                    View more
                  </span>
                </div>
              </div>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
