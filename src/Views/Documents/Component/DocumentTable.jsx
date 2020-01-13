import React, {useState} from 'react';
import Model from './DocumentModel/Model';
export default function Table(){
  const [openModel, setOpenModel] = useState(false);
  const ToggleModel = () => {
   setOpenModel(!openModel);
  }
    return(
      <>
<Model
openModel={openModel} setOpenModel={setOpenModel}
/>
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
        <tr>
          <td className="font-weight-bold">
              Dirt Work
          </td>
          <td>
            <div className="d-flex flex-row justify-content-between align-items-center ">
              <div className="m-1 p-1 font-weight-bold">
                Feb 23, 2020
              </div>
              <i className="fas fa-ellipsis-h fa-2x ml-3 text-grey cursor-pointer" onClick={ToggleModel}></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </>
    )
}