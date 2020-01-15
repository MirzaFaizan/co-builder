import React from 'react';
export default function Table(){
return(
    <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col" className="border-0">Item</th>
        <th scope="col" className="border-0">Cost/Estimate</th>
        <th scope="col" className="border-0">Paid</th>
        <th scope="col" className="border-0">Over/Under Budget</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" className="mt-2 mb-2"><span style={{borderLeft:'4px solid blue'}}>&nbsp;&nbsp;&nbsp;House Plan</span></th>
        <td><div className="m-1 border text-center h-100 w-100 bg-white">$500</div></td>
        <td><div className="m-1 border text-center h-100 w-100 bg-white">$500</div></td>
        <td><div className="d-flex flex-row justify-content-around "><div className="m-1 border text-center h-100 w-100 text-danger bg-white font-weight-bold">$500</div>
           <i className="fas fa-ellipsis-h fa-2x ml-3 text-grey"></i>
        </div>
        </td>
      </tr>
      <tr>
        <th scope="row" className="mt-2 mb-2"><span style={{borderLeft:'4px solid blue'}}>&nbsp;&nbsp;&nbsp;House Plan</span></th>
        <td><div className="m-1 border text-center h-100 w-100 bg-white">$500</div></td>
        <td><div className="m-1 border text-center h-100 w-100 bg-white">$500</div></td>
        <td><div className="d-flex flex-row justify-content-around"><div className="m-1 border text-center h-100 w-100 text-danger font-weight-bold bg-white">$500</div>
           <i className="fas fa-ellipsis-h fa-2x ml-3 text-grey"></i>
        </div>
        </td>
      </tr>
    </tbody>
  </table>
)
}